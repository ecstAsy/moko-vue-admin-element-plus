<!--
 * @Author: ecstAsy
 * @Date: 2021-12-21 16:59:07
 * @LastEditTime: 2022-07-06 17:12:46
 * @LastEditors: ecstAsy
-->
<template>
  <el-row>
    <el-col align="center">
      <el-tag
        v-if="tagShow"
        closable
        disable-transitions
        @close="tagShow = !tagShow"
      >
        <moko-icon icon="WarningFilled" />确认转账后，资金将直接打入对方账户，无法退回。
      </el-tag>
    </el-col>
    <el-col align="center">
      <table class="info-table">
        <tr>
          <th>付款账户</th>
          <td>moko-admin@net.com</td>
        </tr>
        <tr>
          <th>收款账户</th>
          <td>user@net.com</td>
        </tr>
        <tr>
          <th>收款人姓名</th>
          <td>Moko</td>
        </tr>
        <tr>
          <th>转账金额</th>
          <td>
            <b>500.00</b>元
          </td>
        </tr>
      </table>
    </el-col>
    <el-col>
      <el-form
        ref="infoForm"
        :model="infoState"
        :rules="infoRules"
        label-width="45%"
      >
        <el-form-item
          label="支付密码"
          prop="passward"
        >
          <el-input
            v-model="infoState.passward"
            type="password"
            class="form-item-220"
            placeholder="请输入支付密码"
          />
        </el-form-item>
      </el-form>
    </el-col>
    <el-col align="center">
      <el-button
        @click="emit('prev')"
      >
        上一步
      </el-button>
      <el-button
        type="primary"
        @click="onSubmit"
      >
        下一步
      </el-button>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref, Ref, reactive } from "vue";

const tagShow = ref<boolean>(true);
const infoForm = ref<Ref | null>(null);
const infoState = reactive<{
  passward:string
}>({
  passward: "",
});
const infoRules = {
  passward: [{ required: true, message: "请输入支付密码！", trigger: "blur" }],
};

const emit = defineEmits<{(e: "prev"): void, (e: "next"): void}>();

const onSubmit = async () => {
  try {
    await infoForm.value.validate();
    return emit("next");
  } catch (error) {
    return false;
  }
};
</script>

<style lang="scss" scoped>
.info-table {
  border-collapse: collapse;
  text-align: left;
  width: 500px;
  margin: 20px auto;
  th,
  td {
    border: 1px solid #f0f0f0;
    padding: 10px;
  }
  th {
    background: #fafafa;
  }
}
</style>
