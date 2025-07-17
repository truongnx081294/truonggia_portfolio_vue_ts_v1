<script setup lang="ts">
defineProps(['project']);
</script>

<template>
  <section className="card" animate="show" initial="hidden">
    <span>{{ project.type }}</span>
    <h3 v-if="project.livelink">
      <a :href="`${project?.livelink?.href}`" target="blank">
        {{ project.name }}
      </a>
    </h3>
    <h3 v-else>
      <a :href="`${project?.gitlink?.href}`" target="blank">
        {{ project.name }}
      </a>
    </h3>
    <p>{{ project.description }}</p>
    <div className="icon">
      <a v-if="project?.gitlink?.href" :href="`${project?.gitlink?.href}`" target="blank">
        <img src="../images/github.svg" alt="github" :width="20" :height="20" />
      </a>
    </div>
  </section>
</template>
