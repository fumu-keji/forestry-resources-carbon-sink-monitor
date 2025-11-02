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
      formatter: "{a} <br/>{b} : {c}万t",
    },
    series: [
      {
        name: "碳汇量",
        type: "gauge",
        min: 0,
        max: 200,
        detail: {
          formatter: "{value}",
          fontSize: 20,
          color: "#0CE7B6",
        },
        data: [
          {
            value: 125.6,
            name: "总碳汇量",
          },
        ],
        axisLine: {
          lineStyle: {
            color: [
              [0.3, "#ff7a7a"],
              [0.7, "#39AD93"],
              [1, "#0CE7B6"],
            ],
            width: 20,
          },
        },
        axisLabel: {
          color: "#fff",
        },
        title: {
          color: "#fff",
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
