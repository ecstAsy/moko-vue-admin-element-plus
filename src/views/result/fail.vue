<!--
 * @Author: ecstAsy
 * @Date: 2021-12-05 11:26:46
 * @LastEditTime: 2021-12-05 11:39:12
 * @LastEditors: ecstAsy
-->

<template>
  <el-card class="page-result">
    <el-result
      icon="error"
      title="提交失败"
      sub-title="请核对并修改以下信息后，再重新提交。"
    >
      <template #extra>
        <router-link :to="{ path: '/' }">
          <el-button
            type="primary"
            size="medium"
          >
            返回修改
          </el-button>
        </router-link>
      </template>
    </el-result>
    <div class="page-result-fail">
      <p>
        <b>您提交的内容有如下错误：</b>
      </p>
      <p>
        <CircleClose class="icon" />
        <span>您的账户已被冻结</span>
        <router-link :to="{ path: '/' }">
          <el-link
            type="primary"
            :underline="false"
          >
            立即解冻 >
          </el-link>
        </router-link>
      </p>
      <p>
        <CircleClose class="icon" />
        <span>您的账户还不具备申请资格</span>
        <router-link :to="{ path: '/' }">
          <el-link
            type="primary"
            :underline="false"
          >
            立即升级 >
          </el-link>
        </router-link>
      </p>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { CircleClose } from "@element-plus/icons";
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
