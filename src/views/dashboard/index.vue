<!--
 * @Author: ecstAsy
 * @Date: 2021-12-02 15:58:33
 * @LastEditTime: 2022-07-07 10:55:10
 * @LastEditors: ecstAsy
-->
<template>
  <page-wraper>
    <div class="dashboard">
      <row-card />
      <bar-card />
    </div>
  </page-wraper>
</template>

<script setup lang="ts">
import { PageWraper } from "@/components";
import { RowCard, BarCard } from "./components";
</script>
