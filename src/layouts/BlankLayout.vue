<!--
 * @Author: ecstAsy
 * @Date: 2021-12-03 10:30:50
 * @LastEditTime: 2021-12-07 09:27:43
 * @LastEditors: ecstAsy
-->
<template>
  <div class="blank-layout">
    <router-view v-slot="{ Component }">
      <transition
        mode="out-in"
        name="fade-transform"
      >
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

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
