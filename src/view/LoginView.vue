<template>
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="bg-white p-6 w-96 shadow-lg rounded-sm">
      <form>
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
          <input
            type="email"
            id="email"
            v-model="emailRef"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@flowbite.com"
            required
          />
          <span v-if="emailError" class="text-red-500 text-xs">{{ emailError }}*</span>
        </div>
        <div class="mb-6">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Your password</label>
          <input
            type="password"
            id="password"
            v-model="passwordRef"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
          <span v-if="passwordError" class="text-red-500 text-xs">{{ passwordError }}*</span>
        </div>
        <button
          type="submit"
          @click.prevent="() => handleForm()"
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
import { useRouter } from "vue-router";
import { useCounterStore } from "../store/index";
const storeForm = useCounterStore();

const router = useRouter();

const emailRef = ref("");
const emailError = ref("");
const passwordRef = ref("");
const passwordError = ref("");

const handleForm = () => {
  if (passwordRef.value.length < 8) {
    return (passwordError.value = "password must contain at least 8 characters.");
  }
  if (!emailRef.value.split("").find((val) => val === "@")) {
    return (emailError.value = "Email tayping error.");
  }

  storeForm.userList.map((val) => {
    if (val.email === emailRef.value && val.password === passwordRef.value) {
      storeForm.user = val;
      router.push("/");
    } else {
    }
  });
};
</script>
