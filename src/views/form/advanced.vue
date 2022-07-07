<!--
 * @Author: ecstAsy
 * @Date: 2021-12-05 11:50:43
 * @LastEditTime: 2022-07-07 11:00:08
 * @LastEditors: ecstAsy
-->

<template>
  <page-wraper>
    <el-card>
      <div style="border: 1px solid #ccc">
        <!-- 工具栏 -->
        <Toolbar
          :editor-id="editorId"
          :mode="mode"
          style="border-bottom: 1px solid #ccc"
        />
        <!-- 编辑器 -->
        <Editor
          :editor-id="editorId"
          :mode="mode"
          :default-config="editorConfig"
          :default-content="getDefaultContent"
          style="height: 500px"
          @on-created="handleCreated"
          @on-change="handleChange"
          @on-destroyed="handleDestroyed"
          @on-focus="handleFocus"
          @on-blur="handleBlur"
          @custom-alert="customAlert"
          @custom-paste="customPaste"
        />
      </div>
    </el-card>
  </page-wraper>
</template>

<script setup lang="ts">
import { computed, onUnmounted } from "vue";
import {
  Editor, Toolbar, getEditor, removeEditor,
} from "@wangeditor/editor-for-vue";
import { IDomEditor } from "@wangeditor/editor";
import cloneDeep from "lodash/cloneDeep";
import { PageWraper } from "@/components";

const editorId = "wangeEditor-1";

const mode = "default";

// 默认内容
const defaultContent = [
  {
    type: "paragraph",
    children: [{ text: "一行文字" }],
  },
];

// 注意，深度拷贝 content ，否则会报错
const getDefaultContent = computed(() => cloneDeep(defaultContent));

// 编辑器配置
const editorConfig = {
  placeholder: "请输入内容...",
  MENU_CONF: {
    insertImage: {
      checkImage (src: any) {
        console.log("image src", src);
        if (src.indexOf("http") !== 0) {
          return "图片网址必须以 http/https 开头";
        }
        return true;
      },
    },
  },
};

// 编辑器回调函数
const handleCreated = (editor: IDomEditor) => {
  console.log("created", editor);
};
const handleChange = (editor: IDomEditor) => {
  console.log("change:", editor.children);
};
const handleDestroyed = (editor: IDomEditor) => {
  console.log("destroyed", editor);
};
const handleFocus = (editor: IDomEditor) => {
  console.log("focus", editor);
};
const handleBlur = (editor: IDomEditor) => {
  console.log("blur", editor);
};
const customAlert = (info: string, type: string) => {
  console.log(`【自定义提示】${type} - ${info}`);
};
const customPaste = (editor: IDomEditor, event: any, callback: Function) => {
  console.log("ClipboardEvent 粘贴事件对象", event);

  // 自定义插入内容
  editor.insertText("xxx");

  // 返回值（注意，vue 事件的返回值，不能用 return）
  callback(false); // 返回 false ，阻止默认粘贴行为
  // callback(true) // 返回 true ，继续默认的粘贴行为
};

// 及时销毁编辑器
onUnmounted(() => {
  const editor = getEditor(editorId);
  if (editor == null) return;

  // 销毁，并移除 editor
  editor.destroy();
  removeEditor(editorId);
});
</script>
