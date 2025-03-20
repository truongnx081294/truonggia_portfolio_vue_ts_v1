<script setup lang="ts">
import Image from "next/image";
import { Featured } from "./data";
import "../assets/css/Home.css";

interface IProject {
  category: string;
  name: string;
  details: string;
  id: number;
  gitlink?: URL;
  livelink?: URL;
}
</script>

<template>
  <div className="container">
    {Featured.map((project) => { return
    <ProjectDiv key="{project.id}" project="{project}" />; })}
  </div>
</template>
