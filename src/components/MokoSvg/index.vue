<!--
 * @Author: ecstAsy
 * @Date: 2021-12-04 21:25:29
 * @LastEditTime: 2021-12-04 22:38:30
 * @LastEditors: ecstAsy
-->
<template>
  <svg
    class="moko-svg"
    aria-hidden="true"
    :style="{
      marginLeft: `${left}px`,
      marginRight: `${right}px`,
      marginTop: `${top}px`,
      color: color
    }"
  >
    <use
      :xlink:href="symbolId"
      :fill="color"
    />
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  prefix: {
    type: String,
    default: "icon",
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "#333",
  },
  left: {
    type: Number,
    default: 0,
  },
  right: {
    type: Number,
    default: 0,
  },
  top: {
    type: Number,
    default: 0,
  },
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);

console.log(symbolId.value);

</script>

<style lang="scss" scoped>
.moko-svg {
  width: 1em;
  height: 1em;
  font-size: 18PX;
  // vertical-align: -0.18em;
  fill: currentColor;
  overflow: hidden;
}
</style>
