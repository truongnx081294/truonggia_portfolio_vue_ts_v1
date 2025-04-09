<script setup lang="ts">
import { Featured } from "./data";
import "../assets/css/Home.css";
import ProjectDivComponent from "@/components/ProjectDivComponent.vue";
</script>

<template>
  <div className="container">
    <ProjectDivComponent
      v-for="(project, index) in Featured"
      :key="index"
      :project="project"
    />
  </div>
</template>
