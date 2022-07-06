<!--
 * @Author: ecstAsy
 * @Date: 2021-12-05 11:50:34
 * @LastEditTime: 2022-07-06 17:12:05
 * @LastEditors: ecstAsy
-->

<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>分步表单</span>
      </div>
    </template>
    <el-steps
      :active="activeStep"
      align-center
    >
      <template
        v-for="step in StepsMap"
        :key="step.value"
      >
        <el-step
          :title="step.title"
          :icon="step.icon"
        />
      </template>
    </el-steps>
    <el-row v-loading="loading">
      <el-col class="step-form-content">
        <template v-if="activeStep === 1">
          <transfer-form
            ref="transfer"
            @next="onNext"
          />
        </template>
        <template v-else-if="activeStep === 2">
          <transfer-info
            @prev="activeStep -= 1"
            @next="onNext"
          />
        </template>
        <template v-else>
          <transfer-result @repeat="activeStep = 1" />
        </template>
      </el-col>
      <el-col class="step-form-toast">
        <b>说明</b>
        <br>转账到银行卡
        <br>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
        <br>转账到微信账户
        <br>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
        <br>转账到支付宝账户
        <br>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
        <br>
      </el-col>
    </el-row>
  </el-card>
</template>

<script lang="ts" setup>
import { ref, reactive, Ref } from "vue";
import { StepItemTypes } from "./type";
import { TransferForm, TransferInfo, TransferResult } from "./components";

const loading = ref<boolean>(false);

const StepsMap = reactive<Array<StepItemTypes>>([
  { title: "填写转账信息", icon: "Edit" },
  { title: "确认转账信息", icon: "Checked" },
  { title: "完成", icon: "CircleCheckFilled" },
]);

const activeStep = ref<number>(1);

const transfer = ref<Ref | null>(null);

const onNext = () => {
  activeStep.value += 1;
};

</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";

.step-form-content {
  margin: 50px 0;
}
.step-form-toast {
  @include f-s-c(13px, $font-color-info);
  padding: 16px;
  border-top: 1px dashed $font-color-info;
  line-height: 24px;
}
</style>
