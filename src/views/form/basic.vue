<!--
 * @Author: ecstAsy
 * @Date: 2021-12-05 11:50:01
 * @LastEditTime: 2022-07-07 10:58:53
 * @LastEditors: ecstAsy
-->

<template>
  <page-wraper>
    <el-card class="basic-form">
      <template #header>
        <div class="card-header">
          <span>基础表单</span>
        </div>
      </template>
      <el-form
        ref="basicForm"
        :model="ruleForm"
        :rules="rules"
        label-width="340px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="名称"
          prop="name"
        >
          <el-input
            v-model="ruleForm.name"
            class="form-item-340"
            placeholder="请输入名称"
          />
        </el-form-item>
        <el-form-item
          label="区域"
          prop="region"
        >
          <el-select
            v-model="ruleForm.region"
            class="form-item-340"
            placeholder="请选择区域"
          >
            <el-option
              label="上海"
              value="shanghai"
            />
            <el-option
              label="北京"
              value="beijing"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="日期"
          required
        >
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                v-model="ruleForm.date1"
                type="date"
                placeholder="选择日期"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
          <el-col
            class="line"
            :span="2"
          >
            -
          </el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker
                v-model="ruleForm.date2"
                placeholder="选择时间"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item
          label="状态"
          prop="delivery"
        >
          <el-switch v-model="ruleForm.delivery" />
        </el-form-item>
        <el-form-item
          label="线路"
          prop="type"
        >
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox
              label="线路1"
              name="1"
            />
            <el-checkbox
              label="线路2"
              name="2"
            />
            <el-checkbox
              label="线路3"
              name="3"
            />
            <el-checkbox
              label="线路4"
              name="4"
            />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item
          label="类型"
          prop="resource"
        >
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="单线程" />
            <el-radio label="多线程" />
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="备注"
          prop="desc"
        >
          <el-input
            v-model="ruleForm.desc"
            class="form-item-340"
            type="textarea"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit()"
          >
            提交
          </el-button>
          <el-button @click="onReset()">
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </page-wraper>
</template>

<script setup lang="ts">
import { reactive, ref, Ref } from "vue";
import { PageWraper } from "@/components";
import { IBasicForm } from "./type";

const basicForm = ref<Ref | null>(null);
const ruleForm = reactive<IBasicForm>({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});
const rules = {
  name: [
    {
      required: true,
      message: "Please input Activity name",
      trigger: "blur",
    },
    {
      min: 3,
      max: 5,
      message: "Length should be 3 to 5",
      trigger: "blur",
    },
  ],
  region: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "change",
    },
  ],
  date1: [
    {
      type: "date",
      required: true,
      message: "Please pick a date",
      trigger: "change",
    },
  ],
  date2: [
    {
      type: "date",
      required: true,
      message: "Please pick a time",
      trigger: "change",
    },
  ],
  type: [
    {
      type: "array",
      required: true,
      message: "Please select at least one activity type",
      trigger: "change",
    },
  ],
  resource: [
    {
      required: true,
      message: "Please select activity resource",
      trigger: "change",
    },
  ],
  desc: [
    {
      required: true,
      message: "Please input activity form",
      trigger: "blur",
    },
  ],
};
const onSubmit = async () => {
  try {
    await basicForm.value.validate();
    console.log("submit");
    return true;
  } catch (error) {
    console.log("error submit!!");
    return false;
  }
};
const onReset = () => basicForm.value.resetFields();
</script>
