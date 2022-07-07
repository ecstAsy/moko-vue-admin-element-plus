<!--
 * @Author: ecstAsy
 * @Date: 2022-02-10 17:07:58
 * @LastEditTime: 2022-07-07 11:19:12
 * @LastEditors: ecstAsy
-->
<template>
  <el-upload
    ref="upload"
    class="moko-upload"
    :action="`${ENV.VITE_APP_API}/upload`"
    :headers="headers"
    :multiple="props.multiple"
    :limit="props.limit"
    :on-error="uploadError"
    :on-remove="uploadRemove"
    :on-success="uploadSuccess"
    :on-exceed="uploadExceed"
    :file-list="fileLists"
  >
    <slot name="content">
      <el-button
        :type="props.btnType"
      >
        {{ props.btnText }}
      </el-button>
    </slot>
    <template
      #tip
    >
      <div
        v-if="props.tipText"
        class="el-upload__tip"
      >
        {{ props.tipText }}
      </div>
    </template>
  </el-upload>
</template>

<script setup lang="ts">
import {
  reactive, ref, watch,
} from "vue";
import type { ButtonType } from "element-plus/es/components/button/src/button";
import type { UploadFile } from "element-plus";
import { ElMessage } from "element-plus";
import { LocalStorage } from "ecstasy-tools";

const ENV = import.meta.env;
const upload = ref();
const filtersFileList = (arr:any[]) => {
  if (!Array.isArray(arr)) return "";
  let values:any[] = [];
  arr.map((item) => {
    if (item.response) {
      values = [
        ...values,
        item.response.data,
      ];
    } else {
      values = [
        ...values,
        item,
      ];
    }
    return values;
  });
  return JSON.stringify(values);
};
interface RawFile {
  id: number
  name: string
  url: string
}
interface Props {
  value: Array<RawFile> | [] | string
  btnText?:string
  btnType?: ButtonType
  tipText?: string
  limit?: number
  multiple?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  btnText: "选择文件",
  btnType: "primary",
  tipText: "",
  limit: 1,
  multiple: false,
});

interface Emits {
  (e:"update:value", val: string): void
  (e:"validate"): void
}
const emit = defineEmits<Emits>();

const fileLists = ref<Array<any>>([]);
const headers = reactive<any>({
  Authorization: `Bearer ${LocalStorage.getItem("moko-token")}`,
});

watch(() => props.value, (val) => {
  if (!val) {
    fileLists.value = [];
  } else if (Array.isArray(val)) {
    fileLists.value = val;
  }
}, { deep: true, immediate: true });

watch(() => fileLists.value, (val) => {
  if (val.length) {
    emit("update:value", filtersFileList(val));
  } else {
    emit("update:value", "");
  }
  emit("validate");
}, { deep: true });

// success
const uploadSuccess = (res:any, file:UploadFile, fileList:Array<UploadFile>) => {
  fileLists.value = fileList;
};
// error
const uploadError = (err:any, file:UploadFile, fileList:Array<UploadFile>) => {
  ElMessage.error(err);
};
// remove
const uploadRemove = (file: UploadFile, fileList:Array<UploadFile>) => {
  fileLists.value = fileList;
};
const uploadExceed = (files:Array<UploadFile>) => {
  upload.value.clearFiles();
  upload.value.handleStart(files[0]);
  upload.value.submit();
};
</script>
<style lang="scss" scoped>
.moko-upload {
  :deep(.el-upload-list__item .el-upload-list__item-info) {
    width: 95%;
    margin: 0;
  }

  :deep(.el-upload-list__item-name) {
    white-space: pre-line;
    text-align: left;
  }
}
</style>
