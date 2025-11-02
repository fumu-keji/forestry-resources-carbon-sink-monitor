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
    },
    legend: {
      data: ["交易价格", "交易量", "市场活跃度"],
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
    yAxis: [
      {
        type: "value",
        name: "价格(元/吨)",
        nameTextStyle: {
          color: "#fff",
        },
        position: "left",
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
      {
        type: "value",
        name: "交易量(万吨)",
        nameTextStyle: {
          color: "#fff",
        },
        position: "right",
        axisLine: {
          lineStyle: {
            color: "#fff",
          },
        },
        axisLabel: {
          color: "#fff",
        },
      },
    ],
    series: [
      {
        name: "交易价格",
        type: "line",
        yAxisIndex: 0,
        data: [68, 72, 75, 78, 82, 85, 88, 91, 94, 92, 95, 98],
        smooth: true,
        itemStyle: {
          color: "#0CE7B6",
        },
      },
      {
        name: "交易量",
        type: "bar",
        yAxisIndex: 1,
        data: [12, 15, 18, 22, 25, 28, 32, 35, 38, 42, 45, 48],
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(57, 173, 147, 0.8)",
            },
            {
              offset: 1,
              color: "rgba(57, 173, 147, 0.3)",
            },
          ]),
        },
      },
      {
        name: "市场活跃度",
        type: "line",
        yAxisIndex: 0,
        data: [65, 68, 72, 75, 78, 82, 85, 88, 86, 89, 92, 95],
        smooth: true,
        itemStyle: {
          color: "#057165",
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
