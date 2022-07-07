<!--
 * @Author: ecstAsy
 * @Date: 2022-03-09 14:30:36
 * @LastEditTime: 2022-05-31 13:03:22
 * @LastEditors: ecstAsy
-->
<template>
  <div class="moko-title-wrap">
    <b class="moko-title">
      {{ title }}
    </b>
    <span>
      <slot />
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
}
defineProps<Props>();
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
.moko-title-wrap {
  @include flex-row(flex-start);

  .moko-title {
    display: block;
    text-indent: 12px;
    position: relative;
    font-size: 14px;
    line-height: 1;
    &::after {
      position: absolute;
      display: block;
      width: 4px;
      height: 100%;
      content: "";
      background-color: $primary-color;
      left: 0;
      top: 0;
      border-radius: 4px;
    }
  }
}

</style>
