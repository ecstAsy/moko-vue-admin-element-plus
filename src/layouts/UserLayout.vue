<!--
 * @Author: ecstAsy
 * @Date: 2021-12-02 17:07:14
 * @LastEditTime: 2021-12-07 13:04:51
 * @LastEditors: ecstAsy
-->
<template>
  <el-container class="user-layout">
    <el-main class="user-layout-content">
      <router-view />
    </el-main>
    <el-footer class="user-layout-footer">
      <div class="footer-links">
        <a href="_self">帮助</a>
        <a href="_self">隐私</a>
        <a href="_self">条款</a>
      </div>
      <div class="footer-copyright">
        Copyright &copy; 2021 MokoPro
      </div>
    </el-footer>
  </el-container>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";

.user-layout {
  min-height: 1000px;
  background-color: #fff;

  &-content {
    padding-top: 100px;
  }

  &-footer {
    line-height: 30px;
    background-color: #fff;
    text-align: center;
    @include flex-column();
    .footer-links {
      a {
       @include f-s-c(12px, $font-color-info);
        transition: all 0.3s;
        &:not(:last-child) {
          margin-right: 40px;
        }
      }
    }

    .footer-copyright {
      @include f-s-c(12px, $font-color-info);
      letter-spacing: 1px;
    }
  }
}
</style>
