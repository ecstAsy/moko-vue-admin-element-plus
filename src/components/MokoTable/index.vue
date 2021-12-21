<!--
 * @Author: ecstAsy
 * @Date: 2021-12-09 14:52:53
 * @LastEditTime: 2021-12-21 13:16:16
 * @LastEditors: ecstAsy
-->

<template>
  <el-row>
    <el-table
      v-loading="loading"
      :data="dataSource"
      style="width: 100%"
    >
      <template
        v-for="column in columns"
        :key="column.key"
      >
        <el-table-column
          :prop="column.dataIndex"
          :label="column.title"
        >
          <template
            v-if="column.scopedSlots"
            #default="scope"
          >
            <slot
              :row="scope.row"
              :name="column.scopedSlots.customRender"
            />
          </template>
        </el-table-column>
      </template>
    </el-table>
    <el-col
      align="center"
      style="margin: 24px 0;"
    >
      <el-pagination
        size="medium"
        background
        layout="prev, pager, next"
        :total="100"
        @current-change="onCurrentChange"
      />
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ColumnTypes } from "./type";

const loading = ref<boolean>(false);

const props = defineProps<{
  columns: Array<ColumnTypes>
  load:()=> Array<any>
}>();

const dataSource = ref<Array<any>>([]);

const getData = async () => {
  loading.value = true;
  const res:any = await props.load();
  dataSource.value = res.data.list;
  loading.value = false;
  return true;
};

onMounted(() => getData());

const onCurrentChange = (page: number) => getData();
</script>
