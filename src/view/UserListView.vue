<template>
  <div class="my-12">
    <p class="text-center text-3xl font-bold text-gray-600 mb-6">Users Table</p>
    <div class="w-2/3 mx-auto">
      <Table />
      <button
        type="button"
        @click="store.studentsTablePopup = !store.studentsTablePopup"
        class="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Add User
      </button>
      <button
        @click="store.delBoolean = !store.delBoolean"
        type="button"
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Delete User
      </button>
    </div>
  </div>
  <div class="popup absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white">
    <div v-if="store.studentsTablePopup" class="bg-white relative">
      <PopupCompVue />
      <div @click="store.studentsTablePopup = !store.studentsTablePopup" class="absolute top-0 right-0">
        <span class="text-xl p-2 cursor-pointer">x</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Table from "../components/UserListTable.vue";
import PopupCompVue from "../components/PopupComp.vue";
import { useCounterStore } from "../store/index";
const store = useCounterStore();
</script>
