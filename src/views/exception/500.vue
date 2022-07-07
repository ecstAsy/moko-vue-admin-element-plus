<!--
 * @Author: ecstAsy
 * @Date: 2021-12-03 10:29:18
 * @LastEditTime: 2022-07-07 11:02:43
 * @LastEditors: ecstAsy
-->

<template>
  <page-wraper>
    <el-card>
      <el-result
        icon="error"
        title="Error Tip 500"
        sub-title="Please follow the instructions"
      >
        <template #extra>
          <router-link :to="{ path: '/' }">
            <el-button
              type="danger"
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
