<template>
  <nav class="container mx-auto text-white text-md my-2 flex items-center justify-between">
    <div>
      <RouterLink class="font-serif text-xl" to="/">Quiz App</RouterLink>
    </div>
    <div>
      <ul class="flex items-center gap-3 md:gap-6">
        <li>
          <RouterLink
            class="relative py-2 before:duration-300 before:absolute before:left-0 before:w-0 hover:before:w-full before:bottom-0 before:border-b before:border-white"
            to=""
            >User List</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="relative py-2 before:duration-300 before:absolute before:left-0 before:w-0 hover:before:w-full before:bottom-0 before:border-b before:border-white"
            to="/login"
            >login</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="relative py-2 before:duration-300 before:absolute before:left-0 before:w-0 hover:before:w-full before:bottom-0 before:border-b before:border-white"
            to="/Register"
            >Register</RouterLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
