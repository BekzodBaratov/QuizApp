<template>
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="bg-white p-6 w-96 shadow-lg rounded-sm">
      <form>
        <div class="mb-4">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Your name</label>
          <input
            type="text"
            id="name"
            v-model="nameRef"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Create email</label>
          <input
            type="email"
            id="email"
            v-model="emailRef"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Create password</label>
          <div
            class="relative border border-gray-300 text-gray-900 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 block w-full"
          >
            <input
              class="w-full h-full inline-block p-2.5 bg-gray-50 rounded-lg"
              :type="isPasswordRefShow ? 'text' : 'password'"
              v-model="passwordRef"
              required
            />
            <i
              @click="isPasswordRefShow = !isPasswordRefShow"
              v-if="!isPasswordRefShow"
              class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 fa-solid fa-eye-slash"
            ></i>
            <i
              @click="isPasswordRefShow = !isPasswordRefShow"
              v-if="isPasswordRefShow"
              class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 fa-solid fa-eye"
            ></i>
          </div>
        </div>
        <div class="mb-4">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
          <div
            class="relative border border-gray-300 text-gray-900 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 block w-full"
          >
            <input
              class="w-full h-full inline-block p-2.5 bg-gray-50 rounded-lg"
              :type="isConfirmRefShow ? 'text' : 'password'"
              v-model="confirmRef"
              required
            />
            <i
              @click="isConfirmRefShow = !isConfirmRefShow"
              v-if="!isConfirmRefShow"
              class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 fa-solid fa-eye-slash"
            ></i>
            <i
              @click="isConfirmRefShow = !isConfirmRefShow"
              v-if="isConfirmRefShow"
              class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 fa-solid fa-eye"
            ></i>
          </div>
        </div>
        <button
          type="submit"
          @click.prevent="handleForm"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

import { useCounterStore } from "../store/index";
const storeForm = useCounterStore();

const router = useRouter();
const route = useRoute();

const nameRef = ref("");
const nameError = ref("");
const emailRef = ref("");
const emailError = ref("");
const passwordRef = ref("");
const passwordError = ref("");
const isPasswordRefShow = ref(false);
const confirmRef = ref("");
const confirmError = ref("");
const isConfirmRefShow = ref(false);

const handleForm = () => {
  window.user = emailRef.value;
  const redirectPath = route.query.redirect || "/";
  router.push(redirectPath);

  storeForm.user = {
    name: nameRef.value,
    email: emailRef.value,
    password: passwordRef.value,
  };

  storeForm.userList.push(storeForm.user);
};
</script>
