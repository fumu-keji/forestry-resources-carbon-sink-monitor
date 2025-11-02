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
    color: ["#39AD93"],
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(0,0,0,0.8)",
      borderColor: "#39AD93",
      textStyle: {
        color: "#fff",
      },
    },
    grid: {
      left: "15%",
      right: "10%",
      bottom: "15%",
      top: "10%",
    },
    xAxis: {
      type: "category",
      data: ["安全", "低风险", "中风险", "高风险", "紧急"],
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
      name: "区域数量",
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
        data: [28, 12, 8, 3, 1],
        type: "bar",
        barWidth: "50%",
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#39AD93",
            },
            {
              offset: 1,
              color: "#057165",
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
