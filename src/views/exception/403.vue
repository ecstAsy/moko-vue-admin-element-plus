<!--
 * @Author: ecstAsy
 * @Date: 2021-12-03 10:29:13
 * @LastEditTime: 2021-12-05 11:39:08
 * @LastEditors: ecstAsy
-->

<template>
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
            size="medium"
          >
            Back
          </el-button>
        </router-link>
      </template>
    </el-result>
  </el-card>
</template>
