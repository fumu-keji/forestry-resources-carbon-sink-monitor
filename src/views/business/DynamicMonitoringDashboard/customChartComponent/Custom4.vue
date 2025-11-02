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
    color: ["#39AD93", "#0CE7B6", "#FFA726", "#EF5350"],
    tooltip: {
      trigger: "item",
      backgroundColor: "rgba(0,0,0,0.8)",
      borderColor: "#39AD93",
      textStyle: {
        color: "#fff",
      },
    },
    series: [
      {
        name: "事件类型",
        type: "pie",
        radius: "60%",
        center: ["50%", "55%"],
        data: [
          {
            value: 45,
            name: "正常监测",
          },
          {
            value: 25,
            name: "病虫害",
          },
          {
            value: 20,
            name: "火灾风险",
          },
          {
            value: 10,
            name: "非法采伐",
          },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        label: {
          color: "#fff",
          fontSize: 11,
        },
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
