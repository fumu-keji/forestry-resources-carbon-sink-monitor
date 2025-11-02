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
    xAxis: {
      type: "category",
      data: [
        "高密度区",
        "中高密度区",
        "中密度区",
        "低密度区",
        "极低密度区",
        "超高密度区",
      ],
      axisLabel: {
        color: "#fff",
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        color: "#fff",
      },
    },
    series: [
      {
        name: "碳汇密度",
        type: "bar",
        data: [35, 28, 22, 15, 10, 40, 25, 30, 18, 22, 27, 33, 19],
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
      },
      {
        name: "碳汇密度",
        type: "line",
        data: [35, 28, 22, 15, 10, 40, 25, 30, 18, 22, 27, 33, 19],
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: "bold",
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
