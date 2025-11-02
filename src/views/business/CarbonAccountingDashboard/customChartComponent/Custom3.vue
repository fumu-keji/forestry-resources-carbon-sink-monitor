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
    },
    legend: {
      data: ["基线情景", "项目情景", "额外减排量"],
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
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
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
        name: "基线情景",
        type: "line",
        data: [8.2, 8.5, 8.3, 8.7, 8.9, 9.1, 9.0, 8.8, 8.6, 8.4, 8.3, 8.1],
        smooth: true,
      },
      {
        name: "项目情景",
        type: "line",
        data: [5.2, 5.0, 4.8, 4.5, 4.3, 4.1, 4.0, 3.8, 3.6, 3.4, 3.2, 3.0],
        smooth: true,
      },
      {
        name: "额外减排量",
        type: "line",
        data: [3.0, 3.5, 3.5, 4.2, 4.6, 5.0, 5.0, 5.0, 5.0, 5.0, 5.1, 5.1],
        smooth: true,
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
