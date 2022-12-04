<template>
  <nav class="container mx-auto text-white text-md my-2 flex items-center justify-between">
    <div>
      <RouterLink class="font-serif text-xl" to="/">Quiz App</RouterLink>
    </div>
    <div>
      <ul v-if="!storeForm.user.email" class="flex items-center gap-3 md:gap-6">
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
      <ul v-if="storeForm.user.email" class="flex items-center gap-3 md:gap-6">
        <li>
          <RouterLink
            class="relative py-2 before:duration-300 before:absolute before:left-0 before:w-0 hover:before:w-full before:bottom-0 before:border-b before:border-white"
            to="/usersList"
            >User List</RouterLink
          >
        </li>
        <li @click="isProfileShow = !isProfileShow" class="relative">
          <i class="fa-solid fa-circle-user p-2 text-xl rounded-full cursor-pointer"></i>

          <!-- Dropdown menu -->
          <div
            v-if="isProfileShow"
            id="userDropdown"
            class="absolute right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
              <div>{{ storeForm.user.name }}</div>
              <div class="font-medium truncate">{{ storeForm.user.email }}</div>
            </div>
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
              <li>
                <RouterLink
                  to="/editUser"
                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Edit Profile
                </RouterLink>
              </li>
              <li>
                <p
                  @click="() => logout()"
                  class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </p>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </nav>
  <RouterView />
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from "../store/index";
import { RouterLink, RouterView } from "vue-router";

const storeForm = useCounterStore();
const isProfileShow = ref(false);

const logout = () => (storeForm.user = {});
</script>
