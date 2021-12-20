<!--
 * @Author: ecstAsy
 * @Date: 2021-12-03 10:29:18
 * @LastEditTime: 2021-12-05 11:40:34
 * @LastEditors: ecstAsy
-->

<template>
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
            size="medium"
          >
            Back
          </el-button>
        </router-link>
      </template>
    </el-result>
  </el-card>
</template>
