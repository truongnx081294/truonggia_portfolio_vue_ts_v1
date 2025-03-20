<script setup lang="ts">
import "../assets/css/Home.css";
import ProjectCard from "./ProjectCardsComponent.vue";
</script>
<template>
  <section id="projects" className="{styles.projects}">
    <h1><span>02.</span> <span> Some things I`ve built</span></h1>

    <div className="{styles.cards}">
      <ProjectCard />
    </div>

    <div className="{styles.more}">
      <h2>If you`d like to see more</h2>

      <div className="{styles.more__links}">
        <span><Link href="/archive"> View Archive.</Link> </span>
      </div>
    </div>
  </section>
</template>
