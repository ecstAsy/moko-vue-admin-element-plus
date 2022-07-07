<!--
 * @Author: ecstAsy
 * @Date: 2022-02-16 09:08:05
 * @LastEditTime: 2022-07-07 10:54:27
 * @LastEditors: ecstAsy
-->
<template>
  <div class="page-wraper">
    <template v-if="props.header">
      <div
        class="page-wraper-header"
        :style="{height: `${props.height}px`}"
      >
        <div :class="`page-wraper-header-title ${getIsCollapse() ? 'isCollapse' : ''}`">
          <slot name="title">
            <b style="font-size: 18px;">{{ props.title }}</b>
          </slot>
        </div>
        <div class="page-wraper-header-extra">
          <slot name="extra" />
        </div>
      </div>
      <div :style="{height: `${props.height}px`}" />
    </template>
    <div class="page-wraper-content">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { store } from "@/store";

interface Props {
  title?: string
  height?: number
  header?: boolean
  fixed?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  title: "",
  height: 48,
  header: false,
  fixed: true,
});
// @ts-ignore
const getIsCollapse = computed(() => () => store.state.app.isCollapse);
</script>
<style lang="scss" scoped>
@import "@/styles/index.scss";

.page-wraper {
  &-header {
    left: 0;
    @include flex-row();
    position: fixed;
    right: 0;
    background-color: #fff;
    z-index: 20;
    border-bottom: 1px solid $tm-border-color;
    transition: all .5s;
    &-title {
      height: 100%;
      padding-left: 16px;
      border-left: 1px solid $tm-border-color;
      transform: translateX(180px);
      @include flex-row();
      transition: transform .4s;
      &.isCollapse {
        transform: translateX(64px);
        transition: transform .4s;
      }
    }
    &-extra {
      padding-right: 16px;
    }
  }
  &-content {
    padding: 16px;
  }
}
</style>
