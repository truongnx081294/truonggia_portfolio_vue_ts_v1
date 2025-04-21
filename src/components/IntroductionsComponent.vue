<script setup lang="ts">
import "../assets/css/Home.css";
import ContactIcons from "./ContactIconsComponent.vue";
import { motion } from "motion-v";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};
const items = {
  hidden: { opacity: 0, y: 90 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};
</script>

<template>
  <motion.div>
    <motion.section
      :variant="container"
      initial="hidden"
      animate="show"
      className="introduction"
    >
      <motion.h1 :variant="items">
        <span>Hey, My name is </span>
        <br />Nguyen Xuan Truong
      </motion.h1>

      <motion.p :variant="items" className="intro">
        I`m a <span>software developer</span> primarily focused on
        <span>frontend development</span> using web technology. Always open to
        learning new things and currently exploring the decentralised web and
        MERN stack web development.
      </motion.p>
      <motion.p :variant="items" className="available">
        <span>👇🏾</span> Currently open to opportunities
      </motion.p>

      <motion.div :variant="items" className="contact_intro">
        <ContactIcons />
      </motion.div>

      <a
        href="https://www.figma.com/proto/oyXzwXfyWaauPe3rxOO0r7/CV_NguyenXuanTruong?page-id=0%3A1&node-id=1-2&viewport=58%2C336%2C0.26&t=SADnWNetASy9vVIN-1&scaling=min-zoom&content-scaling=fixed"
        passHref
        target="blank"
      >
        <div className="content__item">
          <motion.button :variant="items" className="button button__bestia">
            <div className="button__bg"></div>
            <span>Check out my Resume</span>
          </motion.button>
        </div>
      </a>
    </motion.section>
  </motion.div>
</template>
