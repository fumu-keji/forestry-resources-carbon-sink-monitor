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
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    radar: {
      indicator: [
        {
          name: "短期收益",
          max: 100,
        },
        {
          name: "长期收益",
          max: 100,
        },
        {
          name: "风险控制",
          max: 100,
        },
        {
          name: "生态效益",
          max: 100,
        },
        {
          name: "市场潜力",
          max: 100,
        },
        {
          name: "政策支持",
          max: 100,
        },
      ],
      center: ["50%", "50%"],
      radius: "70%",
      axisName: {
        color: "#fff",
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.2)",
        },
      },
      splitArea: {
        areaStyle: {
          color: ["rgba(57, 173, 147, 0.1)", "rgba(57, 173, 147, 0.05)"],
        },
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.3)",
        },
      },
    },
    series: [
      {
        type: "radar",
        data: [
          {
            value: [85, 92, 78, 88, 95, 90],
            name: "优化方案",
            areaStyle: {
              color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                {
                  offset: 0,
                  color: "rgba(57, 173, 147, 0.5)",
                },
                {
                  offset: 1,
                  color: "rgba(57, 173, 147, 0.1)",
                },
              ]),
            },
            lineStyle: {
              color: "#39AD93",
            },
          },
          {
            value: [75, 80, 85, 72, 78, 82],
            name: "常规方案",
            areaStyle: {
              color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                {
                  offset: 0,
                  color: "rgba(12, 231, 182, 0.5)",
                },
                {
                  offset: 1,
                  color: "rgba(12, 231, 182, 0.1)",
                },
              ]),
            },
            lineStyle: {
              color: "#0CE7B6",
            },
          },
          {
            value: [70, 75, 90, 85, 65, 75],
            name: "保守方案",
            areaStyle: {
              color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                {
                  offset: 0,
                  color: "rgba(5, 113, 101, 0.5)",
                },
                {
                  offset: 1,
                  color: "rgba(5, 113, 101, 0.1)",
                },
              ]),
            },
            lineStyle: {
              color: "#057165",
            },
          },
        ],
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
