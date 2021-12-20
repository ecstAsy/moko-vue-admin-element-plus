<!--
 * @Author: ecstAsy
 * @Date: 2021-12-09 14:34:16
 * @LastEditTime: 2021-12-09 14:38:17
 * @LastEditors: ecstAsy
-->

<template>
  <el-row class="row-title">
    <el-col :span="12">
      {{ title }}
    </el-col>
    <el-col
      :span="12"
      align="right"
    >
      <el-tooltip
        :content="tooltip"
        placement="top"
      >
        <moko-icon
          icon="warning-filled"
        />
      </el-tooltip>
    </el-col>
    <el-col class="row-title-num">
      {{ value }}
    </el-col>
  </el-row>
</template>

<script setup lang="ts">

defineProps<{
  title: string
  value?: string
  tooltip:string
}>();
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
.row-title {
  @include f-s-c(14px, $font-color-info);
  &-num {
    @include f-s-c(30px, $font-color-primary);
    font-size: 30px;
    line-height: 38px;
    white-space: nowrap;
    margin: 8px 0;
  }
}
</style>
