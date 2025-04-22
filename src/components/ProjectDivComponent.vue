<script setup lang="ts">
defineProps(["project"]);

// const controls = useAnimation()
// const [ref, inView] = useInView({
//     threshold:0.3
// })
const container = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};
// const items = {
//   hidden: { opacity: 0, x: 50 },
//   show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
// };

// useEffect(() => {
//     if(inView) {
//         controls.start('show')
//     }
// }, [controls, inView])
</script>

<template>
  <section
    className="{styles.archive}"
    animate="show"
    initial="hidden"
    :variants="container"
  >
    <div>
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
        <a
          v-if="project?.gitlink?.href"
          :href="`${project?.gitlink?.href}`"
          target="blank"
        >
          <img
            src="../assets/images/github.svg"
            alt="github"
            :width="20"
            :height="20"
          />
        </a>
        <a
          v-if="project?.livelink?.href"
          :href="`${project?.livelink?.href}`"
          target="blank"
        >
          <img
            src="../assets/images/share.svg"
            alt="github"
            layout="fill"
            className="share"
          />
        </a>
      </div>
    </div>
  </section>
</template>
