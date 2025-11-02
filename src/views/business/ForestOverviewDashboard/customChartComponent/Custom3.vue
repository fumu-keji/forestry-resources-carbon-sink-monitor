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
    color: [
      "#39AD93",
      "#0CE7B6",
      "#057165",
      "#2E8B7A",
      "#4CAF9D",
      "#66D4A8",
      "#1F7A6A",
      "#8FE5C7",
    ],
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["森林面积", "蓄积量"],
      textStyle: {
        color: "#fff",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["2019", "2020", "2021", "2022", "2023", "2024"],
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
      axisLabel: {
        color: "#fff",
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
      axisLabel: {
        color: "#fff",
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
    series: [
      {
        name: "森林面积",
        type: "line",
        stack: "Total",
        smooth: true,
        data: [1180, 1205, 1228, 1245, 1252, 1256.8],
        itemStyle: {
          color: "#39AD93",
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(57, 173, 147, 0.3)",
            },
            {
              offset: 1,
              color: "rgba(57, 173, 147, 0.1)",
            },
          ]),
        },
      },
      {
        name: "蓄积量",
        type: "line",
        stack: "Total",
        smooth: true,
        data: [7.8, 8.0, 8.2, 8.4, 8.55, 8.65],
        itemStyle: {
          color: "#0CE7B6",
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(12, 231, 182, 0.3)",
            },
            {
              offset: 1,
              color: "rgba(12, 231, 182, 0.1)",
            },
          ]),
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
