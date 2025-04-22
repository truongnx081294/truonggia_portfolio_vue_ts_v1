<script setup lang="ts">
import { request } from "@/api/axiosInstance";
import { ref } from "vue";
import "../assets/css/Home.css";

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
    <ProjectDivComponent
      v-for="(project, index) in listProject"
      :key="index"
      :project="project"
    />
  </div>
</template>
