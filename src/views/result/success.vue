<!--
 * @Author: ecstAsy
 * @Date: 2021-12-05 11:26:41
 * @LastEditTime: 2021-12-05 11:39:15
 * @LastEditors: ecstAsy
-->

<template>
  <el-card class="page-result">
    <el-result
      icon="success"
      title="提交成功"
      sub-title="提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。"
    >
      <template #extra>
        <router-link :to="{ path: '/' }">
          <el-button
            type="primary"
            size="medium"
          >
            返回列表
          </el-button>
        </router-link>
        <router-link :to="{ path: '/' }">
          <el-button
            style="margin: 0 16px;"
            size="medium"
          >
            查看项目
          </el-button>
        </router-link>
        <router-link :to="{ path: '/' }">
          <el-button size="medium">
            打印
          </el-button>
        </router-link>
      </template>
    </el-result>
    <div class="page-result-success">
      <el-descriptions
        title="项目信息"
        size="medium"
      >
        <el-descriptions-item label="项目 ID:">
          20211118
        </el-descriptions-item>
        <el-descriptions-item label="负责人:">
          Sky Moko
        </el-descriptions-item>
        <el-descriptions-item label="生效时间:">
          2021-11-18 ~ 2023-11-17
        </el-descriptions-item>
      </el-descriptions>

      <el-steps
        style="margin-top: 50px;"
        :active="2"
        align-center
        size="medium"
      >
        <el-step
          title="创建项目"
          description="欲买桂花"
        />
        <el-step
          title="部门初审"
          description="同载酒"
        />
        <el-step
          title="财务复核"
          description="终不似"
        />
        <el-step
          title="完成"
          description="少年游"
        />
      </el-steps>
    </div>
  </el-card>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>
