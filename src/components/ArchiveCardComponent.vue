<script setup lang="ts">
import "../assets/css/Home.css";
import { ArchiveProjects } from "./data";
import ProjectDivComponent from "./ProjectDivComponent.vue";

// const loadFeatures = () => import("./features.js").then((res) => res.default);

interface IArchive {
  category?: string;
  name: string;
  details?: string;
  id: number;
  gitlink?: URL;
  livelink?: URL;
}
</script>

<template>
  <div className="archive_container">
    <ProjectDivComponent
      v-for="project in ArchiveProjects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>
