<!--
 * @Author: ecstAsy
 * @Date: 2021-12-03 10:30:50
 * @LastEditTime: 2022-07-07 11:07:53
 * @LastEditors: ecstAsy
-->
<template>
  <div class="blank-layout">
    <router-view v-slot="{ Component }">
      <transition
        mode="out-in"
        name="fade-transform"
      >
        <keep-alive v-if="route.meta.keepAlive">
          <component
            :is="Component"
            :key="route.name"
          />
        </keep-alive>
        <component
          :is="Component"
          v-else
          :key="route.name"
        />
      </transition>
    </router-view>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";

const route = useRouter().currentRoute;

</script>
<style lang="scss" scoped>
.blank-layout {
  overflow: hidden;
  .fade-transform-leave-active,
  .fade-transform-enter-active {
    transition: all 0.5s;
  }

  .fade-transform-enter {
    opacity: 0;
    transform: translateX(-20px);
  }

  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(20px);
  }
}
</style>
