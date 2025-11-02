<template>
  <echart-render
    ref="renderRef"
    :options="renderOptions"
    :chartModel="renderModel"
  />
</template>
<script setup>
import { ref, useAttrs, onMounted } from "vue";
import * as echarts from "echarts/core";
const attrs = useAttrs();
let renderRef = ref(null);
let renderOptions = ref(null);
let renderModel = ref("");
onMounted(() => {
  initChart();
});
function initChart() {
  let optionRow = {
    color: ["#39AD93", "#0CE7B6", "#057165", "#2E8B7A", "#4DB8A8", "#6FC4B5"],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c}万t ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: "left",
      textStyle: {
        color: "#fff",
      },
    },
    series: [
      {
        name: "碳汇量分布",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "16",
            fontWeight: "bold",
            color: "#fff",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: 35.2,
            name: "造林项目",
          },
          {
            value: 28.6,
            name: "森林经营",
          },
          {
            value: 22.3,
            name: "竹林碳汇",
          },
          {
            value: 15.8,
            name: "湿地恢复",
          },
          {
            value: 12.5,
            name: "草原改良",
          },
          {
            value: 11.2,
            name: "其他项目",
          },
        ],
      },
    ],
  };
  if (optionRow) {
    renderOptions.value = optionRow;
    renderModel.value = attrs.darkModel ? "dark" : "light";
    renderRef.value.initRenderChart();
  }
}
defineExpose({
  initChart,
});
</script>
