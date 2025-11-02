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
    color: ["#39AD93", "#0CE7B6", "#057165", "#4CAF50", "#66BB6A", "#81C784"],
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(0,0,0,0.8)",
      borderColor: "#39AD93",
      textStyle: {
        color: "#fff",
      },
    },
    grid: {
      left: "10%",
      right: "10%",
      bottom: "15%",
      top: "10%",
    },
    xAxis: {
      type: "category",
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
          color: "#39AD93",
        },
      },
      axisLabel: {
        color: "#fff",
        fontSize: 10,
      },
    },
    yAxis: {
      type: "value",
      name: "生长速度(cm/月)",
      nameTextStyle: {
        color: "#fff",
      },
      axisLine: {
        lineStyle: {
          color: "#39AD93",
        },
      },
      axisLabel: {
        color: "#fff",
        fontSize: 10,
      },
      splitLine: {
        lineStyle: {
          color: "rgba(57, 173, 147, 0.2)",
        },
      },
    },
    series: [
      {
        name: "幼龄林",
        type: "line",
        smooth: true,
        data: [2.1, 2.3, 3.2, 4.5, 5.8, 6.2, 5.9, 5.3, 4.8, 3.9, 2.8, 2.2],
        lineStyle: {
          width: 2,
        },
        symbol: "circle",
        symbolSize: 4,
      },
      {
        name: "中龄林",
        type: "line",
        smooth: true,
        data: [1.5, 1.7, 2.1, 2.8, 3.5, 3.8, 3.6, 3.2, 2.9, 2.4, 1.9, 1.6],
        lineStyle: {
          width: 2,
        },
        symbol: "circle",
        symbolSize: 4,
      },
      {
        name: "成熟林",
        type: "line",
        smooth: true,
        data: [0.8, 0.9, 1.1, 1.4, 1.7, 1.8, 1.7, 1.5, 1.3, 1.1, 0.9, 0.8],
        lineStyle: {
          width: 2,
        },
        symbol: "circle",
        symbolSize: 4,
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
