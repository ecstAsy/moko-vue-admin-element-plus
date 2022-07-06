<!--
 * @Author: ecstAsy
 * @Date: 2021-12-21 13:34:08
 * @LastEditTime: 2022-07-06 17:59:49
 * @LastEditors: ecstAsy
-->
<template>
  <el-dialog
    v-model="dialogVisible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :destroy-on-close="props.destroyOnClose"
    :title="props.title"
    :width="props.width"
    :append-to-body="props.appendToBody"
    @closed="emit('closed')"
    @close="emit('cancel')"
    @open="emit('open')"
  >
    <div v-loading="loading">
      <slot />
    </div>
    <template
      v-if="props.showFooter"
      #footer
    >
      <span
        class="moko-dialog-footer"
      >
        <slot name="footer">
          <el-button @click="emit('cancel')">{{ props.cancelText }}</el-button>
          <el-button
            :loading="loading"
            type="primary"
            @click="emit('confirm')"
          >
            {{ props.confirmText }}
          </el-button>
        </slot>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts" >
import { computed } from "vue";

interface Props {
  visible: boolean
  loading?: boolean
  title: string,
  width?: string | number,
  appendToBody?: boolean,
  confirmText?: string,
  cancelText?: string
  destroyOnClose?: boolean
  showFooter?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  visible: false,
  loading: false,
  title: "名称",
  appendToBody: false,
  width: "700px",
  confirmText: "确认",
  cancelText: "取消",
  destroyOnClose: false,
  showFooter: true,
});
interface Emits {
  (e:"open"): void
  (e:"closed"): void
  (e: "cancel"): void
  (e:"confirm"): void
  (e:"update:visible", val: boolean): void
}
const emit = defineEmits<Emits>();
const dialogVisible = computed({
  get: () => props.visible,
  set: (val) => emit("update:visible", val),
});
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
.moko-dialog-footer {
  @include flex-row();
  justify-content: center;
}
</style>
