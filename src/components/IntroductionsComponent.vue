<script setup lang="ts">
import '../assets/css/Home.css';
import ContactIcons from './ContactIconsComponent.vue';
</script>

<template>
  <div>
    <section initial="hidden" animate="show" className="introduction">
      <h1>
        <span>Hey, My name is </span>
        <br />Nguyen Xuan Truong
      </h1>

      <p className="intro">
        I`m a <span>software developer</span> primarily focused on
        <span>frontend development</span> using web technology. Always open to learning new things
        and currently exploring the decentralised web and MERN stack web development.
      </p>
      <p className="available"><span>👇🏾</span> Currently open to opportunities</p>

      <div className="contact_intro">
        <ContactIcons />
      </div>

      <a
        href="https://www.figma.com/proto/oyXzwXfyWaauPe3rxOO0r7/CV_NguyenXuanTruong?page-id=0%3A1&node-id=1-2&viewport=58%2C336%2C0.26&t=SADnWNetASy9vVIN-1&scaling=min-zoom&content-scaling=fixed"
        passHref
        target="blank"
      >
        <div className="content__item">
          <button className="button button__bestia">
            <div className="button__bg"></div>
            <span>Check out my Resume</span>
          </button>
        </div>
      </a>
    </section>
  </div>
</template>
