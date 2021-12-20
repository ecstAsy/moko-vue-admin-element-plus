<!--
 * @Author: ecstAsy
 * @Date: 2021-12-07 13:10:20
 * @LastEditTime: 2021-12-20 17:22:44
 * @LastEditors: ecstAsy
-->

<template>
  <div class="page-login">
    <div class="login-img">
      <img
        src="../../assets/login-bg.png"
        alt="login-bg"
      >
    </div>
    <div class="login-form">
      <div class="header">
        <img
          class="logo"
          src="@/assets/logo.png"
          alt="logo"
        >
        <span class="title">Moko Admin</span>
        <div class="desc">
          Vue3 Element-plus Vuex Vite TypeScript !
        </div>
      </div>
      <el-form
        ref="loginForm"
        :rules="rules"
        :model="formState"
        label-width="80px"
      >
        <el-form-item
          label="账号"
          prop="account"
        >
          <el-input
            v-model="formState.account"
            placeholder="moko.admin"
          />
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input
            v-model="formState.password"
            placeholder="admin"
            type="password"
          />
        </el-form-item>
        <el-form-item label=" ">
          <el-checkbox
            v-model="checked"
            label="记住密码"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            :loading="loading"
            style="width:100%"
            @click.prevent="onSubmit"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref, Ref } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { useStore } from "@/store";

const store = useStore();

const router = useRouter();

const checked = ref<boolean>(true);

const loading = ref<boolean>(false);

const loginForm = ref<Ref | null>(null);

const formState = reactive<{
  account: string;
  password: string;
}>({
  account: "",
  password: "",
});

const rules = {
  account: [
    {
      required: true,
      message: "Please input account",
    },
  ],
  password: [
    {
      required: true,
      message: "Please input sub password",
    },
  ],
};

const onSubmit = async () => {
  try {
    await (loading.value = true);
    await loginForm.value.validate();
    const res = await store.dispatch("login", formState);
    await (loading.value = false);
    if (res.code) {
      return ElMessage.error(res.message);
    }
    return Promise.all([
      ElMessage.success(res.message),
      router.push({ path: "/" }),
    ]);
  } catch (error) {
    await (loading.value = false);
    return false;
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
.page-login {
  @include wh(1106px,700px);
  min-height: 700px;
  margin: 0 auto;
  box-shadow: 0 0px 20px 8px #f8f8f8;
  border-radius: 16px;
  overflow: hidden;
  @include flex-row(center);
  .login-img {
    width: 553px;
    height: 100%;
    min-height: 700px;
  }
  .login-form {
    width: 553px;
    height: 100%;
    min-height: 700px;
    @include flex-column(center);
    .header {
      margin-bottom: 80px;
      .logo {
        height: 38px;
        vertical-align: middle;
        margin-right: 16px;
        border-style: none;
      }

      .title {
        @include f-s-c(33px, $font-color-primary);
        @include f-w-r("Avenir, 'Helvetica Neue', Arial", 600);
        vertical-align: middle;
      }

      .desc {
        margin-top: 20px;
        color: $font-color-info;
      }
    }
    :deep(.el-form-item__content) {
      line-height: 0;
    }
  }
}
</style>
