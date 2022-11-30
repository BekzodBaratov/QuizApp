<template>
  <HeaderCompVue />

  {{ storeForm.user }}
</template>

<script setup>
import { useCounterStore } from "../store/index";
import HeaderCompVue from "../components/HeaderComp.vue";

const storeForm = useCounterStore();
</script>
