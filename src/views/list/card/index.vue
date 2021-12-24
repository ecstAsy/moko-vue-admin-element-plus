<!--
 * @Author: ecstAsy
 * @Date: 2021-12-09 14:54:22
 * @LastEditTime: 2021-12-24 11:51:50
 * @LastEditors: ecstAsy
-->

<template>
  <el-row
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
            :style="{ backgroundImage: `url(${item.bgimg})` }"
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
              {{ item.signature }}
            </div>
          </div>
        </el-card>
      </el-col>
    </template>
  </el-row>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { mockLists } from "@/dataSource";

const dataArry = ref<Array<any>>([]);
const loading = ref<boolean>(false);
const load = async () => {
  loading.value = true;
  const data: any = await mockLists({ num: 2 });
  dataArry.value = [...dataArry.value, ...data.data.list];
  loading.value = false;
};
onMounted(() => load());
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
      @include ellipse(6);
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
