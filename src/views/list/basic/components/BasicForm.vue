<!--
 * @Author: ecstAsy
 * @Date: 2021-12-09 14:56:18
 * @LastEditTime: 2022-07-08 15:36:28
 * @LastEditors: ecstAsy
-->

<template>
  <el-form
    ref="basicForm"
    :inline="true"
    :model="queryParams"
    label-width="100px"
  >
    <el-row>
      <el-col :span="12">
        <el-button
          type="primary"
          @click="emit('create')"
        >
          创建规则
        </el-button>
      </el-col>
      <el-col
        :span="12"
        align="right"
      >
        <el-button
          type="primary"
          text
          style="margin-right: 10px;"
          @click="isFold = !isFold"
        >
          高级搜索
        </el-button>
        <el-form-item prop="des">
          <el-input
            v-model="queryParams.des"
            class="form-item-200"
            placeholder="请输入描述、关键词"
          />
        </el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
        >
          查询
        </el-button>
        <el-button @click="onReset">
          重置
        </el-button>
      </el-col>
    </el-row>
    <el-collapse-transition>
      <el-row v-show="isFold">
        <el-col
          align="right"
          :span="6"
        >
          <el-form-item
            label="规则名称"
            prop="name"
          >
            <el-input
              v-model="queryParams.name"
              class="form-item-200"
              placeholder="请输入规则名称"
            />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item
            label="调用次数"
            prop="times"
          >
            <el-input-number
              v-model="queryParams.times"
              :min="0"
              :max="10"
              controls-position="right"
            />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item
            label="状态"
            prop="status"
          >
            <el-select
              v-model="queryParams.status"
              class="form-item-200"
              placeholder="请选择状态"
            >
              <el-option
                v-for="item in Status"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item
            label="调度时间"
            prop="date"
          >
            <el-date-picker
              v-model="queryParams.date"
              class="form-item-200"
              type="date"
              placeholder="请选择上次调度时间"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-collapse-transition>
  </el-form>
</template>

<script setup lang="ts">
import {
  ref, Ref, reactive,
} from "vue";
import { OptionItemTypes, BasicParamsTypes } from "../type";

const isFold = ref<boolean>(false);
const Status = ref<Array<OptionItemTypes>>([]);
const basicForm = ref<Ref | null>(null);
const queryParams = reactive<BasicParamsTypes>({
  name: null,
  status: null,
  times: 0,
  date: null,
  des: null,
});

// const getStatus = async () => {
//   try {
//     const res: any = await allCate();
//     Status.value = res.data;
//     return true;
//   } catch (error) {
//     return false;
//   }
// };
interface Emits {
  (e: "submit", fields: BasicParamsTypes): void
  (e:"create"):void
}
const emit = defineEmits<Emits>();

const onSubmit = () => {
  emit("submit", queryParams);
};

const onReset = async () => {
  await basicForm.value.resetFields();
  return emit("submit", queryParams);
};

// onMounted(() => {
//   getStatus();
// });
</script>
