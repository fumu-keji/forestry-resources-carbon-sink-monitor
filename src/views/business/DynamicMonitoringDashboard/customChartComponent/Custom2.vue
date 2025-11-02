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
    color: ["#39AD93", "#FFA726", "#EF5350", "#42A5F5"],
    tooltip: {
      trigger: "item",
      backgroundColor: "rgba(0,0,0,0.8)",
      borderColor: "#39AD93",
      textStyle: {
        color: "#fff",
      },
    },
    legend: {
      orient: "vertical",
      left: "left",
      textStyle: {
        color: "#fff",
        fontSize: 12,
      },
    },
    series: [
      {
        name: "碳汇损失",
        type: "pie",
        radius: ["40%", "70%"],
        center: ["65%", "50%"],
        data: [
          {
            value: 1250,
            name: "火灾损失",
          },
          {
            value: 850,
            name: "病虫害损失",
          },
          {
            value: 420,
            name: "非法采伐",
          },
          {
            value: 280,
            name: "自然灾害",
          },
          {
            value: 300,
            name: "气候变化",
          },
          {
            value: 200,
            name: "土地侵占",
          },
          {
            value: 150,
            name: "水土流失",
          },
          {
            value: 100,
            name: "工业污染",
          },
          {
            value: 90,
            name: "农业扩张",
          },
          {
            value: 80,
            name: "城市化",
          },
          {
            value: 70,
            name: "过度放牧",
          },
          {
            value: 60,
            name: "采矿活动",
          },
          {
            value: 50,
            name: "基础设施建设",
          },
          {
            value: 40,
            name: "旅游开发",
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
          fontSize: 10,
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
