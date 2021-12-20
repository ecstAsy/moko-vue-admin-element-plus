<!--
 * @Author: ecstAsy
 * @Date: 2021-12-09 14:33:08
 * @LastEditTime: 2021-12-09 14:45:57
 * @LastEditors: ecstAsy
-->

<template>
  <el-card>
    <row-title
      title="运营活动效果"
      value="78%"
      tooltip="运营活动效果"
    />
    <div class="content">
      <div style="width:100%">
        <el-progress
          :percentage="78"
          :indeterminate="true"
          color="#7367f0"
        />
      </div>
    </div>
    <el-row class="footer">
      <span>
        周同比12%
        <moko-icon
          icon="caret-top"
          class="status-error"
        />
      </span>
      <span style="margin-left: 16px;">
        日同比11%
        <moko-icon
          icon="caret-bottom"
          class="status-success"
        />
      </span>
    </el-row>
  </el-card>
</template>

<script setup lang="ts">
import RowTitle from "./RowTitle.vue";
</script>
