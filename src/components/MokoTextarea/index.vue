<template>
  <div class="moko-textarea">
    <el-input
      v-model="inputValue"
      :placeholder="props.placeholder"
      type="textarea"
    />
    <moko-icon
      v-show="!!inputValue"
      class="close-icon"
      icon="CircleClose"
      @click="onClear"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import MokoIcon from "../MokoIcon/index.vue";

interface Props {
  value: string
  placeholder?: string
}
const props = withDefaults(defineProps<Props>(), {
  placeholder: "请输入",
});
interface Emits {
  (e:"update:value", value:string):void
}
const emit = defineEmits<Emits>();

const inputValue = computed({
  get: () => props.value,
  set: (v) => emit("update:value", v),
});
const onClear = () => emit("update:value", "");
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
.moko-textarea {
  position: relative;
  :deep(.el-textarea__inner) {
    padding:5px 24px;
  }
  .close-icon {
    position: absolute;
    right: 10px;
    top: 4px;
    @include f-s-c(16px, #a8abb2);
  }
}
</style>
