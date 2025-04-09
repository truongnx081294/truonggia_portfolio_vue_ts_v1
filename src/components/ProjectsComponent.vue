<script setup lang="ts">
import "../assets/css/Home.css";
import ProjectCard from "./ProjectCardsComponent.vue";
</script>
<template>
  <section id="projects" className="projects">
    <h1><span>02.</span> <span> Some things I`ve built</span></h1>

    <div className="cards">
      <ProjectCard />
    </div>

    <div className="more">
      <h2>If you`d like to see more</h2>

      <div className="more__links">
        <span><a href="/archive"> View Archive.</a> </span>
      </div>
    </div>
  </section>
</template>
