<!--
 * @Author: ecstAsy
 * @Date: 2021-12-05 11:50:43
 * @LastEditTime: 2022-07-07 16:21:54
 * @LastEditors: ecstAsy
-->

<template>
  <page-wraper>
    <el-card>
      <div style="border: 1px solid #ccc">
        <Toolbar
          style="border-bottom: 1px solid #ccc"
          :editor="editorRef"
          :default-config="toolbarConfig"
          mode="default"
        />
        <Editor
          v-model="valueHtml"
          style="height: 500px; overflow-y: hidden;"
          :default-config="editorConfig"
          mode="default"
          @on-created="handleCreated"
        />
      </div>
    </el-card>
  </page-wraper>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref, shallowRef } from "vue";
import {
  Editor, Toolbar,
} from "@wangeditor/editor-for-vue";
import { PageWraper } from "@/components";
import "@wangeditor/editor/dist/css/style.css";

const editorRef = shallowRef();

// 内容 HTML
const valueHtml = ref("<p>hello</p>");

const toolbarConfig = {};
const editorConfig = { placeholder: "请输入内容..." };

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = (editor:any) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};
</script>
