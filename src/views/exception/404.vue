<!--
 * @Author: ecstAsy
 * @Date: 2021-12-03 10:29:01
 * @LastEditTime: 2022-07-07 11:02:35
 * @LastEditors: ecstAsy
-->

<template>
  <page-wraper>
    <el-card>
      <el-result
        icon="info"
        title="Info Tip 404"
        sub-title="Please follow the instructions"
      >
        <template #extra>
          <router-link :to="{ path: '/' }">
            <el-button
              type="info"
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
