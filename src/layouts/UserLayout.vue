<!--
 * @Author: ecstAsy
 * @Date: 2021-12-02 17:07:14
 * @LastEditTime: 2022-07-15 17:02:45
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

<style lang="scss" scoped>
@import "@/styles/index.scss";

.user-layout {
  height: 100%;
  background-color: #fff;

  &-content {
    @include flex-row();
  }

  &-footer {
    text-align: center;
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
