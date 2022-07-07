<!--
 * @Author: ecstAsy
 * @Date: 2022-03-31 13:59:37
 * @LastEditTime: 2022-05-19 10:54:56
 * @LastEditors: ecstAsy
-->
<template>
  <el-button
    type="success"
    :loading="loading"
    @click="onExport"
  >
    {{ props.exportTxt }}
  </el-button>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
  exportTxt?: string
  type?: number
  load:(params?:any) => void
}
const props = withDefaults(defineProps<Props>(), {
  exportTxt: "导出",
  type: 1,
});
const loading = ref<boolean>(false);
const onExport = async () => {
  try {
    loading.value = true;
    const res:any = await props.load({
      export: props.type,
    });
    window.location.href = res.data;
    loading.value = false;
    return true;
  } catch (error) {
    loading.value = false;
    return false;
  }
};
</script>
