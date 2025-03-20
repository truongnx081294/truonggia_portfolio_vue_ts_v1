<script setup lang="ts">
import "./assets/css/Home.css";
import ContactIcons from "@/components/ContactIconsComponent.vue";
import Intro from "@/components/IntroductionsComponent.vue";
import About from "@/components/AboutComponent.vue";
import Projects from "@/components/ProjectsComponent.vue";
</script>

<template>
  <div className="{styles.container}">
    <main className="{styles.main}">
      <div className="{styles.left}">
        <div>
          <ContactIcons />
        </div>

        <div></div>
      </div>

      <div className="{styles.content}">
        <Intro />
        <About />
        <Projects />

        <section className="{styles.contact}">
          <div>
            <h1>03.</h1>
            <p>Feel free to reach out!</p>
            <ContactIcons />
          </div>
        </section>
      </div>

      <div className="{styles.right}">
        <div>
          <Link href="mailto:phyf3script@gmail.com" target="blank">
            Truongnx081294@gmail.com
          </Link>
        </div>
      </div>
    </main>

    <footer>
      <p>
        Inspired by
        <span
          ><Link href="https://brittanychiang.com"
            >brittanychiang.com</Link
          ></span
        >
      </p>
    </footer>
  </div>
</template>

<style scoped></style>
