<script setup lang="ts">
import { computed } from "vue";
import "./assets/css/Home.css";
import { RouterView, useRoute } from "vue-router";

const route = useRoute();
const layout = computed(() => {
  return route.meta.layout || "dashboard-layout";
});
</script>

<template>
  <component :is="layout">
    <RouterView></RouterView>
  </component>
</template>

<style scoped></style>
