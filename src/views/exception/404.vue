<!--
 * @Author: ecstAsy
 * @Date: 2021-12-03 10:29:01
 * @LastEditTime: 2021-12-05 11:40:19
 * @LastEditors: ecstAsy
-->

<template>
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
            size="medium"
          >
            Back
          </el-button>
        </router-link>
      </template>
    </el-result>
  </el-card>
</template>
