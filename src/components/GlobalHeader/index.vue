<!--
 * @Author: ecstAsy
 * @Date: 2021-12-03 10:01:33
 * @LastEditTime: 2021-12-07 09:17:15
 * @LastEditors: ecstAsy
-->
<template>
  <div class="moko-global-header">
    <!-- logo -->
    <div class="moko-global-header-logo">
      <img
        src="@/assets/logo.png"
        class="moko-logo-img"
        alt="logo"
      >
      <span
        v-if="!isCollapse"
        class="moko-logo-title"
      >
        Moko Pro
      </span>
    </div>
    <!-- breadcrumb -->
    <div class="moko-global-header-breadcrumb">
      <div class="menu">
        <moko-icon icon="Menu" />
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="item in breadListRef"
          :key="item.path"
          :to="{ path: item.path }"
        >
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- action -->
    <div class="moko-global-header-content">
      <el-space
        wrap
        size="medium"
      >
        <div class="content-item user">
          <el-dropdown
            class="dropdown"
            placement="top"
          >
            <div class="user-info">
              <el-avatar
                size="small"
                style="cursor: pointer"
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              />
              <span class="user-info-name">admin</span>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item @click="onLogout">
                  退出登录
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-space>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { computed } from "vue";
import { useStore } from "@/store";

const store = useStore();

const router = useRouter();
const breadListRef = computed(() => router.currentRoute.value.matched);
const isCollapse = computed(() => store.state.app.isCollapse);

const onLogout = () => router.push({ path: "/user/login" });
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
.moko-global-header {
  width: 100%;
  @include flex-row();
  justify-content: flex-start;
  @include hl(48px);
  &-logo {
    @include flex-row();
    justify-content: flex-start;
    align-items: center;
    // padding: 0 5px;
    .moko-logo {
      &-img {
        @include wh(30px, 30px);
        margin-left: -2px;
      }
      &-title {
        @include f-s-c(20px, $primary-color);
        font-weight: 600;
        margin-left: 16px;
        margin-right: 26px;
        transition: all 0.3s;
      }
    }
  }

  &-breadcrumb {
    margin-left: 16px;
    @include flex-row();
    .menu {
      margin-bottom: -4px;
      line-height: 48px;
      color: #f1f0fe;
    }
  }

  &-content {
    margin-left: auto;
    @include flex-row();
    justify-content: flex-end;
    align-items: center;
    .content-item {
      @include hl(48px);
      &.user {
        .user-info {
          @include flex-row();
          align-items: center;
          @include hl(48px);
          &-name {
            margin-left: 8px;
          }
        }
      }
    }
  }
}
</style>
