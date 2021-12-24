<!--
 * @Author: ecstAsy
 * @Date: 2021-12-09 14:54:27
 * @LastEditTime: 2021-12-24 13:04:04
 * @LastEditors: ecstAsy
-->

<template>
  <el-card v-loading="loading">
    <ul
      v-infinite-scroll="load"
      class="infinite-list"
      style="overflow: auto"
    >
      <li
        v-for="(item,i) in dataArry"
        :key="i"
        class="infinite-list-item"
      >
        <el-row>
          <el-col class="list-title">
            <b>{{ item.name }}</b>
            <div>{{ item.signature }}</div>
          </el-col>
          <el-col class="list-tags">
            <template
              v-for="tag in item.tags"
              :key="tag"
            >
              <el-tag size="mini">
                {{ tag }}
              </el-tag>
            </template>
          </el-col>
          <el-col
            class="list-content"
            :style="{ backgroundImage: `url(${ImageMaps[item.bgimg]})` }"
          >
            {{ item.article }}
          </el-col>
          <el-col class="list-info">
            <moko-icon icon="Avatar" />
            <el-button
              type="text"
              size="mini"
            >
              {{ item.cname }}
            </el-button>
            <span>
              发布在
              <a href="/">
                {{ item.dynamicType }}
              </a>
            </span>
            <span>{{ item.date }}</span>
          </el-col>
          <el-col class="list-action">
            <moko-icon icon="Star" />
            <span>{{ item.star }}</span>
            <moko-icon icon="ChatDotRound" />
            <span>{{ item.like }}</span>
            <moko-icon icon="View" />
            <span>{{ item.view }}</span>
          </el-col>
        </el-row>
      </li>
    </ul>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { mockLists } from "@/dataSource";
import {
  col1, col2, col3, col4, col5, col6, txtBg,
} from "@/assets";

const dataArry = ref<Array<any>>([]);
const ImageMaps = ref<Array<string>>([
  col1, col2, col3, col4, col5, col6, txtBg,
]);
const loading = ref<boolean>(false);
const load = async () => {
  loading.value = true;
  const data:any = await mockLists(1);
  dataArry.value = [...dataArry.value, ...data.data.list];
  loading.value = false;
};
</script>

<style lang="scss">
@import "@/styles/index.scss";

.infinite-list {
  height: 88vh;
  padding: 0;
  margin: 0;
  list-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .infinite-list-item {
    display: flex;
    border-bottom: 1px dashed var(--el-color-primary-light-9);
    padding: 10px 0;
    border-radius: 8px;
    & + .list-item {
      margin-top: 10px;
    }

    .list-title {
      @include flex-row();
      div {
        width: 50%;
        font-size: 12px;
        height: 70px;
        line-height: 18px;
        letter-spacing: 2px;
        writing-mode: vertical-rl;
        background: url(@/assets/txt-bg.png) no-repeat;
        background-size: 100% 70px;
        background-origin: border-box;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .list-tags {
      padding: 16px 0;
      .el-tag {
        margin-right: 16px;
      }
    }

    .list-content {
      font-size: 13px;
      line-height: 26px;
      background-origin: border-box;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .list-info {
      padding: 10px 0;
      @include flex-row(flex-start);
      @include f-s-c(13px, $font-color-regular);
      span {
        margin-left: 16px;
      }
    }

    .list-action {
      @include flex-row(flex-start);
      span {
        @include f-s-c(13px, $font-color-regular);
        margin-right: 8px;
      }
    }
  }
}
</style>
