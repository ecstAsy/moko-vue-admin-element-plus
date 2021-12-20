<!--
 * @Author: ecstAsy
 * @Date: 2021-12-03 10:24:30
 * @LastEditTime: 2021-12-05 11:48:03
 * @LastEditors: ecstAsy
-->
<template>
  <template
    v-for="menu in menus"
    :key="menu.path"
  >
    <el-sub-menu
      v-if="menu.children && menu.children.length"
      :index="menu.path"
    >
      <template #title>
        <moko-icon
          v-if="menu.meta.icon"
          :icon="menu.meta.icon"
        />
        <span>{{ menu.meta.title }}</span>
      </template>
      <menu-bar-item :menus="menu.children" />
    </el-sub-menu>
    <el-menu-item
      v-else
      :index="menu.path"
    >
      <moko-icon
        v-if="menu.meta.icon"
        :icon="menu.meta.icon"
      />
      <template #title>
        {{ menu.meta.title }}
      </template>
    </el-menu-item>
  </template>
</template>
<script lang="ts" setup>
import MokoIcon from "../MokoIcon/index.vue";

defineProps({
  menus: {
    type: Object,
    default: () => null,
  },
});
</script>
