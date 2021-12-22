<!--
 * @Author: ecstAsy
 * @Date: 2021-12-21 16:59:30
 * @LastEditTime: 2021-12-22 17:33:13
 * @LastEditors: ecstAsy
-->
<template>
  <el-row>
    <el-col>
      <el-result
        icon="success"
        title="操作成功"
        sub-title="预计2小时到账"
      >
        <template #extra>
          <el-button
            type="primary"
            size="medium"
            @click="emit('repeat')"
          >
            再转一笔
          </el-button>
          <el-button size="medium">
            查看账单
          </el-button>
        </template>
      </el-result>
    </el-col>
    <el-col align="center">
      <div class="result-info">
        <el-descriptions
          class="margin-top"
          title="转账信息"
          :column="1"
        >
          <el-descriptions-item label="收款人姓名">
            Moko
          </el-descriptions-item>
          <el-descriptions-item
            label="付款账户"
          >
            moko-admin@net.com
          </el-descriptions-item>
          <el-descriptions-item
            label="收款账户"
          >
            user@net.com
          </el-descriptions-item>
          <el-descriptions-item label="转账金额">
            <b>500.00</b>元
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
const emit = defineEmits<{(e:"repeat"):void}>();
</script>

<style lang="scss" scoped>
.result-info {
  width: 360px;
  padding: 20px;
  background-color: #f0f0f0;
  ::v-deep {
    .el-descriptions__body {
      background: transparent;
    }
  }
}
</style>
