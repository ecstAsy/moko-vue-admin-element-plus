<!--
 * @Author: ecstAsy
 * @Date: 2021-12-09 14:29:22
 * @LastEditTime: 2021-12-09 14:40:02
 * @LastEditors: ecstAsy
-->

<template>
  <el-row
    :gutter="24"
    class="dashbord-card"
  >
    <el-col :span="6">
      <sale-card />
    </el-col>
    <el-col :span="6">
      <traffic-card />
    </el-col>
    <el-col :span="6">
      <payment-card />
    </el-col>
    <el-col :span="6">
      <effect-card />
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import SaleCard from "./SaleCard.vue";
import TrafficCard from "./TrafficCard.vue";
import PaymentCard from "./PaymentCard.vue";
import EffectCard from "./EffectCard.vue";

</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
.dashbord-card {
  .el-col.el-col-6.is-guttered {
    padding-right: 4px !important;
    &:last-of-type {
      padding-right: 12px !important;
    }
  }

  :deep(.content) {
    @include flex-column(flex-end, flex-start);
    height: 46px;
    padding-bottom: 8px;
    border-bottom: 1px solid #f3f3f3;
  }

  :deep(.footer) {
    margin-top: 16px;
  }
}
</style>
