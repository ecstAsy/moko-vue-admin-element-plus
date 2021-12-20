<!--
 * @Author: ecstAsy
 * @Date: 2021-12-09 14:32:43
 * @LastEditTime: 2021-12-09 14:46:46
 * @LastEditors: ecstAsy
-->

<template>
  <el-card>
    <row-title
      title="总销售额"
      value="¥ 126,560"
      tooltip="总销售额"
    />
    <div class="content">
      <div style="text-align:left">
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
      </div>
    </div>
    <el-row class="footer">
      日销售额￥12,423
    </el-row>
  </el-card>
</template>

<script setup lang="ts">
import RowTitle from "./RowTitle.vue";
</script>
