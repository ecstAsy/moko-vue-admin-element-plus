<!--
 * @Author: ecstAsy
 * @Date: 2021-12-09 14:54:16
 * @LastEditTime: 2022-07-06 17:05:02
 * @LastEditors: ecstAsy
-->

<template>
  <el-card class="basic-list">
    <basic-form @submit="handleSubmit" />
    <moko-table
      v-bind="tableProps"
    >
      <template #avatar="scope">
        <el-image
          style="width: 30px; height: 30px;display: block;border-radius: 50%;"
          :src="scope.row.avatar"
          fit="cover"
        />
      </template>
      <template #action="scope">
        <el-button
          text
          @click="onEdit(scope)"
        >
          Edit
        </el-button>
        <el-divider direction="vertical" />
        <el-button
          text
          style="color: #f56c6c;"
        >
          Delete
        </el-button>
      </template>
    </moko-table>
  </el-card>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { mockLists } from "@/dataSource";
import BasicForm from "./BasicForm.vue";
import { BasicParamsTypes } from "./type";
// import { mokoList } from "@/Http";

const columns = [{
  key: "avatar",
  title: "Logo",
  dataIndex: "avatar",
  scopedSlots: { customRender: "avatar" },
}, {
  key: "name",
  title: "Name",
  dataIndex: "name",
}, {
  key: "date",
  title: "Date",
  dataIndex: "date",
}, {
  key: "address",
  title: "Address",
  dataIndex: "address",
}, {
  key: "times",
  title: "Times",
  dataIndex: "times",
}, {
  key: "action",
  title: "Action",
  scopedSlots: { customRender: "action" },
}];

const formParams = reactive<BasicParamsTypes>({
  current: 1,
  pageSize: 10,
});

const tableProps = {
  columns,
  load: () => mockLists(formParams),
};

const handleSubmit = async (fields: BasicParamsTypes) => {
  console.log(fields);
};

const onEdit = (info:any) => {
  console.log(info);
};
</script>

<style lang="scss" scoped>
.basic-list {
  :deep(.el-form--inline .el-form-item) {
    vertical-align: top !important;
  }
}
</style>
