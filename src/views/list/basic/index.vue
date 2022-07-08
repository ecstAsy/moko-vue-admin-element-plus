<!--
 * @Author: ecstAsy
 * @Date: 2021-12-09 14:54:16
 * @LastEditTime: 2022-07-08 10:14:05
 * @LastEditors: ecstAsy
-->

<template>
  <page-wraper>
    <el-card class="basic-list">
      <basic-form
        @submit="handleSubmit"
        @create="dialogProps.visible = true"
      />
      <moko-table
        v-bind="tableProps"
      >
        <template #avatar="scope:any">
          <el-image
            style="width: 30px; height: 30px;display: block;border-radius: 50%;"
            :src="scope.row.avatar"
            fit="cover"
          />
        </template>
        <template #action="scope">
          <el-button
            v-permission="['dd']"
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
    <basic-dialog v-bind="dialogProps" />
  </page-wraper>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { mockLists } from "@/dataSource";
import { PageWraper, MokoTable } from "@/components";
import { BasicForm, BasicDialog } from "./components";
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

const dialogProps = reactive({
  visible: false,
  loading: false,
  cancel: () => {
    dialogProps.visible = false;
  },
  confirm: (fields:any) => {
    console.log("argments:", fields);
  },
});

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
