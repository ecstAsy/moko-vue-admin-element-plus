<!--
 * @Author: ecstAsy
 * @Date: 2021-12-03 10:24:06
 * @LastEditTime: 2021-12-21 11:21:51
 * @LastEditors: ecstAsy
-->
<template>
  <el-menu
    class="el-menu-vertical-demo"
    router
    :default-active="activeRoute"
    :collapse="collapse"
  >
    <menu-bar-item :menus="menus" />
  </el-menu>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { computed } from "vue";
import MenuBarItem from "./MenuBarItem.vue";

defineProps({
  menus: {
    type: Array,
    default: () => [],
  },
  collapse: {
    type: Boolean,
    default: false,
  },
});

const route = useRouter().currentRoute;
const activeRoute = computed(() => {
  if (route.value.meta.active) return route.value.meta.active;
  return route.value.path;
});
</script>

<style scoped lang="scss">
@import "@/styles/index.scss";
.el-menu-vertical-demo {
  &:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  &.el-menu {
    border: none;

    :deep(.el-menu-item) {
      display: block;
      @include hl(45px);
      &.is-active {
        background-color: #f1f0fe;
        color: $primary-color;
        .el-sub-menu__title {
          color: $primary-color !important;
        }
      }
      * {
        vertical-align: text-top;
      }
    }

    :deep(.el-sub-menu .el-sub-menu__title) {
      display: block;
      @include hl(45px);

      * {
        vertical-align: middle;
      }
    }

    :deep(.el-sub-menu.is-active .el-sub-menu__title) {
      color: $primary-color !important;
    }
  }
}
</style>
