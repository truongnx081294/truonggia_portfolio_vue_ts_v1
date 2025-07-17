<script setup lang="ts">
import { onMounted, ref } from 'vue';
import '../assets/css/Home.css';
import { request } from '@/api/axiosInstance';
import { TYPE_SKILL } from '@/helper/constant';

const listSkill = ref();

onMounted(() => {
  getListSkill();
});

function getListSkill() {
  request({
    method: 'GET',
    url: '/skills/list',
  })
    .then((res) => {
      if (res.status === 200) {
        listSkill.value = res.data.data;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
</script>
<template>
  <section id="about" className="about">
    <h1><span>01.</span> <span> My skills</span></h1>

    <div className="technologies">
      <div>
        <h3>Core Technologies</h3>
        <ul>
          <li :key="index" v-for="(skill, index) in listSkill">
            <template v-if="skill.type === TYPE_SKILL.CORE_TECHNOLOGY">
              {{ skill.name }}
            </template>
          </li>
        </ul>
      </div>

      <div>
        <h3>Familiar With</h3>
        <ul>
          <li :key="index" v-for="(skill, index) in listSkill">
            <template v-if="skill.type === TYPE_SKILL.FAMILIAR">
              {{ skill.name }}
            </template>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
