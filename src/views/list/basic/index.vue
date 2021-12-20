<!--
 * @Author: ecstAsy
 * @Date: 2021-12-09 14:54:16
 * @LastEditTime: 2021-12-09 15:08:40
 * @LastEditors: ecstAsy
-->

<template>
  <el-card class="basic-list">
    <basic-form @submit="handleSubmit" />
    <moko-table
      :data="dataBase"
      :columns="columns"
    >
      <template #avatar="scope">
        <el-image
          style="width: 50px; height: 50px;display: block;border-radius: 50%;"
          :src="scope.row.avatar"
          fit="cover"
        />
      </template>
      <template #action="scope">
        <el-button
          type="text"
          @click="onEdit(scope)"
        >
          Edit
        </el-button>
        <el-divider direction="vertical" />
        <el-button
          type="text"
          style="color: #f56c6c;"
        >
          Delete
        </el-button>
      </template>
    </moko-table>
  </el-card>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import BasicForm from "./BasicForm.vue";
import { BasicParamsTypes } from "./type";
import { mokoList } from "@/Http";

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

const dataBase = ref([]);

const handleSubmit = async (fields: BasicParamsTypes) => {
  console.log(fields);
};

const getInitList = async (params: BasicParamsTypes) => {
  try {
    const res: any = await mokoList(params);
    dataBase.value = res.data.list;
    return true;
  } catch (error) {
    return false;
  }
};

onMounted(() => {
  getInitList(formParams);
});

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
