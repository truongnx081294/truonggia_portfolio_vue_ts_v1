<script setup lang="ts">
import { Featured } from "./data";
import "../assets/css/Home.css";
import ProjectDivComponent from "@/components/ProjectDivComponent.vue";
import { request } from "@/api/axiosInstance";
import { ref } from "vue";

const listProject = ref();
getListProject();

function getListProject() {
  request({
    method: "GET",
    url: "/projects",
  })
    .then((res) => {
      if (res.status === 200) {
        listProject.value = res.data;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
</script>

<template>
  <div className="container">
    <!-- <ProjectDivComponent
      v-for="(project, index) in listProject"
      :key="index"
      :project="project"
    /> -->
  </div>
</template>
