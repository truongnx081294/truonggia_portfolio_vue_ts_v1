<template>
  <div className="container">
    <main className="main">
      <div className="left">
        <div>
          <ContactIcons />
        </div>

        <div></div>
      </div>

      <div className="content">
        <Intro />
        <About />
        <Projects />

        <section className="contact">
          <div>
            <h1>03.</h1>
            <p>Feel free to reach out!</p>
            <ContactIcons />
          </div>
        </section>
      </div>

      <div className="right">
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
<script setup lang="ts">
import ContactIcons from "@/components/ContactIconsComponent.vue";
import Intro from "@/components/IntroductionsComponent.vue";
import About from "@/components/AboutComponent.vue";
import Projects from "@/components/ProjectsComponent.vue";
</script>
