<!--
 * @Author: ecstAsy
 * @Date: 2021-12-09 14:29:16
 * @LastEditTime: 2021-12-09 14:44:07
 * @LastEditors: ecstAsy
-->

<template>
  <el-card style="margin-top: 16px;">
    <el-row>
      <el-col>
        <div
          ref="chartDom"
          style="width: 100%;height: 500px;"
        />
      </el-col>
    </el-row>
  </el-card>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from "vue";
import * as echarts from "echarts/core";
import {
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import { LineChart, BarChart, PictorialBarChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  BarChart,
  PictorialBarChart,
  CanvasRenderer,
  UniversalTransition,
]);

const chartDom = ref<Ref | null>(null);
const myChart = ref<any>(null);

const setInit = () => {
  myChart.value = echarts.init(chartDom.value);
  // Generate data
  const category = [];
  let dottedBase = +new Date();
  const lineData = [];
  const barData = [];
  for (let i = 0; i < 20; i += 1) {
    const date = new Date((dottedBase += 3600 * 24 * 1000));
    category.push(
      [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("-"),
    );
    const b = Math.random() * 200;
    const d = Math.random() * 200;
    barData.push(b);
    lineData.push(d + b);
  }
  // option
  const option = {
    backgroundColor: "#fff",
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["line", "bar"],
      textStyle: {
        color: "#ccc",
      },
    },
    xAxis: {
      data: category,
      axisLine: {
        lineStyle: {
          color: "#ccc",
        },
      },
    },
    yAxis: {
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: "#ccc",
        },
      },
    },
    series: [
      {
        name: "line",
        type: "line",
        smooth: true,
        showAllSymbol: true,
        symbol: "emptyCircle",
        symbolSize: 15,
        data: lineData,
        color: "#7367F0",
      },
      {
        name: "bar",
        type: "bar",
        barWidth: 10,
        itemStyle: {
          borderRadius: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#14c8d4" },
            { offset: 1, color: "#43eec6" },
          ]),
        },
        data: barData,
      },
      {
        name: "line",
        type: "bar",
        barGap: "-100%",
        barWidth: 10,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#83bff6" },
            { offset: 0.5, color: "#188df0" },
            { offset: 1, color: "#188df0" },
          ]),
        },
        z: -12,
        data: lineData,
      },
    ],
  };
  myChart.value.setOption(option);
};

onMounted(() => setInit());
</script>
