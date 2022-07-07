<!--
 * @Author: ecstAsy
 * @Date: 2021-12-09 14:54:22
 * @LastEditTime: 2022-07-07 10:57:52
 * @LastEditors: ecstAsy
-->

<template>
  <page-wraper>
    <el-row
      v-loading="loading"
      :gutter="24"
      class="card-lists"
    >
      <template
        v-for="item in dataArry"
        :key="item.id"
      >
        <el-col :span="6">
          <el-card>
            <template #header>
              <el-row>
                <el-col :span="12">
                  {{ item.name }}
                </el-col>
                <el-col
                  align="right"
                  :span="12"
                >
                  <span class="header-extra">{{ item.date }}</span>
                </el-col>
              </el-row>
            </template>
            <div
              class="card-list"
              :style="{ backgroundImage: `url(${ImageMaps[item.bgimg]})` }"
            >
              <div class="list-content">
                {{ item.article }}
              </div>
              <div class="list-action">
                <moko-icon icon="Star" />
                <span>{{ item.star }}</span>
                <moko-icon icon="ChatDotRound" />
                <span>{{ item.like }}</span>
                <moko-icon icon="View" />
                <span>{{ item.view }}</span>
              </div>
              <div class="list-footer">
                ——{{ item.signature }}
              </div>
            </div>
          </el-card>
        </el-col>
      </template>
      <el-col
        align="center"
        style="margin: 24px 0;"
      >
        <el-pagination
          size="medium"
          background
          layout="prev, pager, next"
          :total="100"
          @current-change="onCurrentChange"
        />
      </el-col>
    </el-row>
  </page-wraper>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { mockLists } from "@/dataSource";
import {
  col1, col2, col3, col4, col5, col6, txtBg,
} from "@/assets";
import { PageWraper, MokoIcon } from "@/components";

const dataArry = ref<Array<any>>([]);
const loading = ref<boolean>(false);
const ImageMaps = ref<Array<string>>([
  col1, col2, col3, col4, col5, col6, txtBg,
]);
const load = async () => {
  loading.value = true;
  const data: any = await mockLists({ num: 12, current: 1 });
  dataArry.value = data.data.data;
  loading.value = false;
};
onMounted(() => load());

const onCurrentChange = () => {
  load();
};
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
.card-lists {
  .el-col.el-col-6.is-guttered {
    padding-right: 4px !important;
    margin-bottom: 16px;
    &:last-of-type {
      padding-right: 12px !important;
    }
  }

  .header-extra {
    font-size: 10px;
    color: #b0b0b0;
  }
  .card-list {
    width: 100%;
    font-size: 13px;
    background-origin: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    .list-content {
      height: 96px;
      line-height: 16px;
      @include ellipse(7);
      overflow: hidden;
    }

    .list-action {
      height: 30px;
      margin-top: 16px;
      @include flex-row(flex-start);
      span {
        @include f-s-c(13px, $font-color-regular);
        margin-right: 8px;
      }
    }

    .list-footer {
      text-align: right;
    }
  }
}
</style>
