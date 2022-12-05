<template>
  <HeaderCompVue />
  <!-- {{ storeForm.user }} -->
  <HeadingCompVue v-if="!Boolean(storeForm.user.name)" />
  <QuizzAppCompVue v-else />

  <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";
import { useCounterStore } from "../store/index";
import HeaderCompVue from "../components/HeaderComp.vue";
import HeadingCompVue from "../components/HeadingComp.vue";
import QuizzAppCompVue from "../components/QuizzAppComp.vue";

const storeForm = useCounterStore();
</script>
