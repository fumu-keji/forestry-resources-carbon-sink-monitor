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
    color: ["#39AD93", "#0CE7B6", "#057165", "#2D9B8C", "#1E8B7D"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    legend: {
      data: ["基准情景", "优化情景", "保守情景", "激进情景"],
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
      type: "category",
      boundaryGap: false,
      data: [
        "2025",
        "2026",
        "2027",
        "2028",
        "2029",
        "2030",
        "2031",
        "2032",
        "2033",
        "2034",
        "2035",
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
      name: "碳汇量(万吨)",
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
    series: [
      {
        name: "基准情景",
        type: "line",
        smooth: true,
        data: [45, 52, 58, 65, 72, 78, 84, 89, 94, 98, 102],
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
        name: "优化情景",
        type: "line",
        smooth: true,
        data: [48, 56, 64, 73, 82, 91, 99, 107, 114, 120, 125],
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
      {
        name: "保守情景",
        type: "line",
        smooth: true,
        data: [42, 48, 53, 58, 63, 67, 71, 75, 78, 81, 84],
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(5, 113, 101, 0.3)",
            },
            {
              offset: 1,
              color: "rgba(5, 113, 101, 0.1)",
            },
          ]),
        },
      },
      {
        name: "激进情景",
        type: "line",
        smooth: true,
        data: [50, 60, 71, 84, 98, 113, 128, 143, 158, 172, 185],
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(45, 155, 140, 0.3)",
            },
            {
              offset: 1,
              color: "rgba(45, 155, 140, 0.1)",
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
