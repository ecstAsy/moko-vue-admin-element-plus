<template>
  <el-config-provider v-bind="State.config">
    <router-view />
  </el-config-provider>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import zhCn from "element-plus/lib/locale/lang/zh-cn";

const State = reactive({
  config: {
    zIndex: 3000,
    size: "default",
    locale: zhCn,
  },
});
</script>
