<script setup lang="ts">
import "../assets/css/Home.css";
import { ArchiveProjects } from "./data";
import Link from "next/link";
import { LazyMotion, m } from "framer-motion";

const loadFeatures = () => import("./features.js").then((res) => res.default);

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
  <div className="{styles.archive_container}">
    {ArchiveProjects?.map((project) => { return(
    <ProjectDiv key="{project.id}" project="{project}" />
    ) })}
  </div>
</template>
