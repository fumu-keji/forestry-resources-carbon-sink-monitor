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
      "#2D9B8C",
      "#1E8B7D",
      "#4FC4A6",
      "#36D4B8",
      "#0A856A",
    ],
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c}万元",
    },
    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        center: ["50%", "50%"],
        data: [
          {
            value: 3250,
            name: "固碳价值",
          },
          {
            value: 2180,
            name: "释氧价值",
          },
          {
            value: 1560,
            name: "水土保持",
          },
          {
            value: 980,
            name: "生物多样性",
          },
          {
            value: 750,
            name: "景观价值",
          },
          {
            value: 620,
            name: "净化空气",
          },
          {
            value: 480,
            name: "调节气候",
          },
          {
            value: 320,
            name: "其他价值",
          },
        ],
        itemStyle: {
          borderRadius: 4,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          color: "#fff",
          fontSize: 12,
        },
        labelLine: {
          lineStyle: {
            color: "#fff",
          },
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
