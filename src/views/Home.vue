<!-- src/views/Home.vue -->
<template>
  <div>
    <section id="section-home">
      <HelloFolk />
    </section>

    <section id="section-about">
      <AboutMe />
    </section>

    <section id="section-service">
      <MyService />
    </section>

    <section id="section-case">
      <MyCase />
    </section>

    <section id="section-works">
      <MyWorks />
    </section>

    <section id="section-skill">
      <MySkill />
    </section>

    <section id="section-contact">
      <ConnectMe />
    </section>
  </div>
</template>

<script setup>
import HelloFolk from "@/components/home/HelloFolk.vue";
import AboutMe from "@/components/home/AboutMe.vue";
import MyService from "@/components/home/MyServices.vue";
import MyCase from "@/components/home/MyCase.vue";
import MyWorks from "@/components/home/MyWorks.vue";
import MySkill from "@/components/home/MySkill.vue";
import ConnectMe from "@/components/home/ConnectMe.vue";
</script>
