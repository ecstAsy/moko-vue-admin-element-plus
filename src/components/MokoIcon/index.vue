<!--
 * @Author: ecstAsy
 * @Date: 2021-12-02 18:11:36
 * @LastEditTime: 2021-12-07 09:17:34
 * @LastEditors: ecstAsy
-->
<template>
  <el-icon class="moko-icon">
    <component
      :is="icon"
    />
  </el-icon>
</template>

<script setup lang="ts">
defineProps<{icon:string}>();
</script>

<style lang="scss" scoped>
.moko-icon {
  margin-right: 5px;
}
</style>
