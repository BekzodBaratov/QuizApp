<template>
  <HeaderCompVue />

  {{ storeForm.user }}
  <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";
import { useCounterStore } from "../store/index";
import HeaderCompVue from "../components/HeaderComp.vue";

const storeForm = useCounterStore();
</script>
