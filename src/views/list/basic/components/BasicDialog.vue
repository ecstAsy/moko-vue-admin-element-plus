<template>
  <moko-dialog
    v-model:visible="visible"
    :loading="props.loading"
    title="创建规则"
    width="600px"
    @open="onOpen"
    @cancel="props.cancel()"
    @confirm="onConfirm(basicFormRef)"
    @closed="onClosed(basicFormRef)"
  >
    <el-form
      ref="basicFormRef"
      :model="State.basicForm"
      :rules="State.rules"
      label-width="160px"
    >
      <el-form-item
        label="名称"
        prop="name"
      >
        <el-input
          v-model="State.basicForm.name"
          placeholder="please input Name"
          class="form-item-220"
        />
      </el-form-item>
      <el-form-item
        label="类型"
        prop="type"
      >
        <el-select
          v-model="State.basicForm.type"
          placeholder="please input Name"
          class="form-item-220"
        >
          <el-option
            label="Vue"
            value="vue"
          />
          <el-option
            label="React"
            value="react"
          />
          <el-option
            label="Angular"
            value="angular"
          />
        </el-select>
      </el-form-item>
      <el-form-item
        label="附件"
        prop="attchs"
      >
        <moko-upload v-model:value="State.basicForm.attchs" />
      </el-form-item>
    </el-form>
  </moko-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import type { ElForm } from "element-plus";
import { MokoDialog, MokoUpload } from "@/components";

type FormInstance = InstanceType<typeof ElForm>
interface Props {
  visible: boolean
  loading: boolean
  confirm: (e:any)=> void
  cancel: ()=> void
}
const props = defineProps<Props>();
interface Emits {
  (e:"update:visible", val:boolean): void
}
const emit = defineEmits<Emits>();
const visible = computed({
  get: () => props.visible,
  set: (val) => emit("update:visible", val),
});
const basicFormRef = ref<FormInstance>();
const State = reactive({
  basicForm: {
    name: undefined,
    type: undefined,
    attchs: [],
  },
  rules: {
    name: [{ required: true, message: "name is must String!", trigger: "blur" }],
    type: [{ required: true, message: "type is must String!", trigger: "change" }],
  },
});
const onOpen = () => {
  console.log("before dialog open");
};
const onClosed = (formEl: FormInstance | undefined) => {
  console.log("after dialog open");
  return formEl!.resetFields();
};
const onConfirm = async (formEl: FormInstance | undefined) => {
  console.log("clicked confirm");
  try {
    await formEl!.validate();
    return props.confirm(State.basicForm);
  } catch (error) {
    return false;
  }
};
</script>
