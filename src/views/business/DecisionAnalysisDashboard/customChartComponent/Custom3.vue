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
    color: ["#39AD93", "#0CE7B6", "#057165", "#2D9B8C", "#1E8B7D", "#4FC4A6"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["生长促进", "密度调控", "施肥管理", "病虫害防治", "间伐措施"],
      textStyle: {
        color: "#fff",
      },
      top: 10,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      name: "效果提升率(%)",
      nameTextStyle: {
        color: "#fff",
      },
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
          color: "rgba(255,255,255,0.1)",
        },
      },
    },
    yAxis: {
      type: "category",
      data: ["方案A", "方案B", "方案C", "方案D", "方案E", "方案F"],
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
        name: "生长促进",
        type: "bar",
        stack: "total",
        data: [12, 15, 8, 18, 14, 10],
      },
      {
        name: "密度调控",
        type: "bar",
        stack: "total",
        data: [8, 10, 12, 9, 11, 13],
      },
      {
        name: "施肥管理",
        type: "bar",
        stack: "total",
        data: [10, 8, 9, 12, 7, 11],
      },
      {
        name: "病虫害防治",
        type: "bar",
        stack: "total",
        data: [6, 7, 8, 5, 9, 6],
      },
      {
        name: "间伐措施",
        type: "bar",
        stack: "total",
        data: [9, 6, 7, 8, 10, 8],
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
