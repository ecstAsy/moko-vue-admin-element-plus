<!--
 * @Author: ecstAsy
 * @Date: 2021-12-09 14:54:27
 * @LastEditTime: 2021-12-22 18:03:40
 * @LastEditors: ecstAsy
-->

<template>
  <el-card>
    <ul
      v-infinite-scroll="load"
      class="infinite-list"
      style="overflow: auto"
    >
      <li
        v-for="i in count"
        :key="i"
        class="infinite-list-item"
      >
        <el-row>
          <el-col>
            <b>Moko</b>
          </el-col>
          <el-col>
            <el-tag size="medium">
              设计语言
            </el-tag>
            <el-tag size="medium">
              设计语言
            </el-tag>
            <el-tag size="medium">
              设计语言
            </el-tag>
          </el-col>
          <el-col>
            不要眼眶一红，就觉得人间不值得，散伙是人间常态，你我，又有什么例外！
            夏虫不可语于冰，井蛙不可语于海。
            生而未养，断指可还。生而养之，断头可还。未生而养，百世难还！
            唐多令
            宋 · 刘过
            芦叶满汀洲，寒沙带浅流。
            二十年重过南楼。
            柳下系船犹未稳，能几日，又中秋。
            黄鹤断矶头，故人曾到否？旧江山浑是新愁。
            欲买桂花同载酒，终不似，少年游。
          </el-col>
          <el-col>
            <el-avatar
              :size="20"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            />
          </el-col>
          <el-col>
            <moko-icon icon="ChatDotRound" />
          </el-col>
        </el-row>
      </li>
    </ul>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const count = ref(0);
const load = () => {
  count.value += 2;
};
</script>

<style lang="scss">
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
    background: var(--el-color-primary-light-9);
    opacity: .8;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 8px;
    & + .list-item {
      margin-top: 10px;
    }
  }
}
</style>
