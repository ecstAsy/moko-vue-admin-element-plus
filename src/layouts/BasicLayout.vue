<!--
 * @Author: ecstAsy
 * @Date: 2021-12-02 17:00:41
 * @LastEditTime: 2022-07-07 10:52:43
 * @LastEditors: ecstAsy
-->
<template>
  <el-container class="basic-layout">
    <el-header class="basic-layout-header">
      <global-header />
    </el-header>
    <el-container class="basic-layout-content">
      <!-- menu -->
      <el-aside
        class="basic-layout-content-aside"
        width="auto"
      >
        <el-scrollbar>
          <menu-side-bar
            :menus="menus"
            :collapse="isCollapse"
          />
        </el-scrollbar>
        <div class="aside-link">
          <moko-icon
            :icon="isCollapse ? 'Expand' : 'Fold'"
            @click="onCollapse"
          />
        </div>
      </el-aside>
      <!-- main -->
      <el-main class="basic-layout-content-main">
        <el-scrollbar>
          <router-view />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useStore } from "@/store";
import { GlobalHeader, MenuSideBar, MokoIcon } from "@/components";

const store = useStore();

const menus = ref<[]>([]);

const menuRoute: any = store.state.permission.routers.find((item: any) => item.path === "/");

if (menuRoute) menus.value = menuRoute.children;

const isCollapse = computed(() => store.state.app.isCollapse);

const onCollapse = () => store.dispatch("setCollpase");
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.basic-layout {
  height: 100%;

  &-header {
    @include wh(100%, 48px);
    background-color: #fff;
  }

  &-content {
    height: calc(100% - 56px);
    &-aside {
      height: 100%;
      background-color: #fff;
      @include flex-column();
      box-shadow: 0px 2px 12px -6px rgba(0, 0, 0, 0.1);

      .aside-link {
        line-height: 45px;
        cursor: pointer;
        &:hover {
          color: $primary-color;
        }
      }
    }

    &-main {
      padding: 0;
    }
  }

}
</style>
