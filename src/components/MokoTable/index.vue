<!--
 * @Author: ecstAsy
 * @Date: 2021-12-09 14:52:53
 * @LastEditTime: 2021-12-21 11:13:36
 * @LastEditors: ecstAsy
-->

<template>
  <el-row>
    <el-table
      v-loading="loading"
      :data="data"
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
import { ColumnTypes } from "./type";

defineProps<{
  data: Array<any>,
  columns: Array<ColumnTypes>
  loading: boolean
}>();

const emit = defineEmits<{(e: "current-change", page: number): void
}>();

const onCurrentChange = (page: number) => emit("current-change", page);
</script>
