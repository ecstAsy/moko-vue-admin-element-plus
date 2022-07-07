<!--
 * @Author: ecstAsy
 * @Date: 2022-02-18 11:33:14
 * @LastEditTime: 2022-03-02 13:29:16
 * @LastEditors: ecstAsy
-->
<template>
  <router-link
    :to="link"
    class="tm-link"
  >
    <slot />
  </router-link>
</template>

<script setup lang="ts">
interface Props {
  link: any
}
defineProps<Props>();

</script>

<style lang="scss" scoped>
.tm-link {
  text-decoration: none;
}
</style>
