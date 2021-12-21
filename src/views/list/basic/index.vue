<!--
 * @Author: ecstAsy
 * @Date: 2021-12-09 14:54:16
 * @LastEditTime: 2021-12-21 11:21:04
 * @LastEditors: ecstAsy
-->

<template>
  <el-card class="basic-list">
    <basic-form @submit="handleSubmit" />
    <moko-table
      :data="dataBase"
      :columns="columns"
      :loading="loading"
      @current-change="onCurrentChange"
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
// import { mokoList } from "@/Http";
import { mockLists } from "@/dataSource";

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

const loading = ref<boolean>(false);

const handleSubmit = async (fields: BasicParamsTypes) => {
  console.log(fields);
};

const getInitList = async (params: BasicParamsTypes) => {
  try {
    loading.value = true;
    const res: any = await mockLists();
    await Promise.all([
      dataBase.value = res.data.list,
      loading.value = false,
    ]);
    return true;
  } catch (error) {
    loading.value = false;
    return false;
  }
};

onMounted(() => {
  getInitList(formParams);
});

const onEdit = (info:any) => {
  console.log(info);
};

const onCurrentChange = (current:number) => {
  getInitList({ ...formParams, current });
};
</script>

<style lang="scss" scoped>
.basic-list {
  :deep(.el-form--inline .el-form-item) {
    vertical-align: top !important;
  }
}
</style>
