<!--
 * @Author: ecstAsy
 * @Date: 2021-12-09 14:54:16
 * @LastEditTime: 2022-07-07 11:14:37
 * @LastEditors: ecstAsy
-->

<template>
  <page-wraper>
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
            type="danger"
          >
            Delete
          </el-button>
        </template>
      </moko-table>
    </el-card>
  </page-wraper>
</template>

<script setup lang="ts">
import { mockLists } from "@/dataSource";
import { PageWraper, MokoTable } from "@/components";
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

const tableProps = {
  columns,
  load: (params: any) => mockLists({
    ...params,
  }),
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
