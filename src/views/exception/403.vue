<!--
 * @Author: ecstAsy
 * @Date: 2021-12-03 10:29:13
 * @LastEditTime: 2022-07-07 11:02:20
 * @LastEditors: ecstAsy
-->

<template>
  <page-wraper>
    <el-card>
      <el-result
        icon="warning"
        title="Warning Tip 403"
        sub-title="Please follow the instructions"
      >
        <template #extra>
          <router-link :to="{ path: '/' }">
            <el-button
              type="warning"
            >
              Back
            </el-button>
          </router-link>
        </template>
      </el-result>
    </el-card>
  </page-wraper>
</template>

<script setup lang="ts">
import { PageWraper } from "@/components";
</script>
