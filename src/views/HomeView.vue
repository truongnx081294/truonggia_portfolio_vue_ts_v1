<template>
  <NavbarComponent />
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
          <a href="mailto:truongnx081294@gmail.com" target="blank"> truongnx081294@gmail.com </a>
        </div>
      </div>
    </main>

    <footer>
      <p>
        Powered by
        <span><a href="https://tonytruong.id.vn">tonytruong.id.vn</a></span>
      </p>
    </footer>
  </div>
</template>
<script setup lang="ts">
import About from '@/components/AboutComponent.vue';
import Intro from '@/components/IntroductionsComponent.vue';
import ContactIcons from '@/components/ContactIconsComponent.vue';
import Projects from '@/components/ProjectsComponent.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';
</script>
