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
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
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
    yAxis: {
      type: "category",
      data: ["项目A", "项目B", "项目C", "项目D", "项目E", "项目F"],
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
      axisLabel: {
        color: "#fff",
      },
    },
    series: [
      {
        name: "基线排放",
        type: "bar",
        stack: "总量",
        data: [12.0, 10.5, 9.8, 8.5, 7.2, 6.8],
        itemStyle: {
          color: "#2E8B7A",
        },
      },
      {
        name: "项目排放",
        type: "bar",
        stack: "总量",
        data: [8.5, 7.2, 6.5, 5.8, 4.5, 4.0],
        itemStyle: {
          color: "#4DB8A8",
        },
      },
      {
        name: "减排量",
        type: "bar",
        stack: "总量",
        data: [3.5, 3.3, 3.3, 2.7, 2.7, 2.8],
        itemStyle: {
          color: "#0CE7B6",
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
