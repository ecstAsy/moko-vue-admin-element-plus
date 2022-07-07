<!--
 * @Author: ecstAsy
 * @Date: 2022-03-25 13:21:47
 * @LastEditTime: 2022-07-07 11:49:47
 * @LastEditors: ecstAsy
-->
<template>
  <ul
    class="moko-file-info"
    :style="{width: width || '100%'}"
  >
    <template v-if="files.length">
      <li
        v-for="item in files"
        :key="item.id"
        class="moko-file-info-item"
        @click="onPreview(item.url)"
      >
        <div class="moko-file-info-item-left">
          <moko-icon icon="Paperclip" />
          <span>{{ item.name }}</span>
        </div>
        <div class="moko-file-info-item-right">
          <moko-icon
            class="action-icon"
            icon="Download"
          />
        </div>
      </li>
    </template>
    <li v-else>
      --
    </li>
  </ul>
</template>

<script setup lang="ts">
import { MokoIcon } from "@/components";

interface Props {
  width?: string
  files: Array<{
    id: number
    name: string
    url: string
  }>
}
defineProps<Props>();
const onPreview = (url:string) => {
  window.open(url, "_blank");
};
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";

.moko-file-info {
  padding: 0;
  margin: 0;
  cursor: pointer;
  li {
    list-style: none;
  }
  &-item {
    @include flex-row();
    @include f-s-c(13px, $primary-color);
    &:hover {
      color: $primary-hover-color;
      .action-icon {
        visibility: visible;
      }
    }
    &-left {
      @include flex-row(flex-start);
    }
    .action-icon {
      visibility: hidden;
      margin-left: 16px;
    }
  }
}
</style>
