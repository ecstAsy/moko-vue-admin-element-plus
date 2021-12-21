<!--
 * @Author: ecstAsy
 * @Date: 2021-12-21 16:58:33
 * @LastEditTime: 2021-12-21 18:01:31
 * @LastEditors: ecstAsy
-->
<template>
  <el-form
    ref="transfer"
    :modle="transferState"
    :rules="rules"
    size="medium"
    label-width="45%"
  >
    <el-form-item
      label="付款账户"
      prop="account"
    >
      <el-input
        v-model="transferState.account"
        class="form-item-340"
        placeholder="请输入付款账户"
      />
    </el-form-item>
    <el-form-item
      label="收款账户"
      required
    >
      <div class="form-item-flex">
        <el-form-item prop="date1">
          <el-select
            v-model="transferState.way"
            class="form-item-100"
            placeholder="请选择区域"
          >
            <template
              v-for="item in payWaysMap"
              :key="item.value"
            >
              <el-option
                :label="item.label"
                :value="item.value"
              />
            </template>
          </el-select>
        </el-form-item>
        <span class="line">-</span>
        <el-form-item prop="payment">
          <el-input
            v-model="transferState.payment"
            class="form-item-200"
            placeholder="请输入收款人账号"
          />
        </el-form-item>
      </div>
    </el-form-item>
    <el-form-item
      label="收款人姓名"
      prop="account"
    >
      <el-input
        v-model="transferState.name"
        class="form-item-340"
        placeholder="请输入收款人姓名"
      />
    </el-form-item>
    <el-form-item
      label="转账金额"
      prop="amount"
    >
      <el-input-number
        v-model="transferState.amount"
        :min="1"
        controls-position="right"
      />
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref, Ref } from "vue";
import { TransferStateTypes } from "../type";
import { PayWays } from "@/dataSource";

const transfer = ref<Ref | null>(null);
const payWaysMap = reactive<Array<{label:string, value:number}>>(PayWays);
const transferState = reactive<TransferStateTypes>({
  account: null,
  way: 1,
  payment: null,
  name: null,
  amount: 100,
});
const rules = {
  account: [
    {
      required: true,
      message: "请输入付款账号！",
      trigger: "blur",
    },
  ],
  way: [
    {
      required: true,
      message: "请输入收款人姓名！",
      trigger: "change",
    },
  ],
  payment: [
    {
      required: true,
      message: "请输入收款人账户！",
      trigger: "blur",
    },
  ],
  name: [
    {
      required: true,
      message: "请输入收款人姓名！",
      trigger: "blur",
    },
  ],
  amount: [
    {
      required: true,
      message: "请输入转账金额！",
      trigger: "blur",
    },
  ],
};
// const onSubmit = async () => {
//   try {
//     await transfer.value.validate();
//     return transferState;
//   } catch (error) {
//     return false;
//   }
// };
</script>
