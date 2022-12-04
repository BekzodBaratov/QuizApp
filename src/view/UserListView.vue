<template>
  <div class="my-12">
    <p class="text-center text-3xl font-bold text-gray-600 mb-6">Users Table</p>
    <div class="w-full px-3 sm:w-2/3 md:w-1/2 sm:px-0 mx-auto">
      <Table />
      <button
        type="button"
        @click="() => addStudent(store)"
        class="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Add User
      </button>
      <button
        @click="store.delBoolean = !store.delBoolean"
        v-if="!store.delBoolean"
        type="button"
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Delete User
      </button>
      <button
        @click="store.delBoolean = !store.delBoolean"
        v-else
        type="button"
        class="focus:outline-none text-white focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-blue-700 dark:focus:ring-blue-900"
      >
        Edit User
      </button>
    </div>
  </div>
  <div
    v-if="store.isActiveModal"
    class="popup absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white"
  >
    <div class="bg-white relative shadow-2xl rounded-md">
      <PopupCompVue />

      <div @click="() => closeStudentTable(store)" class="close-modal absolute top-0 right-0">
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

function addStudent(val) {
  val.isActiveModal = true;
  val.modalData.title = "Add Student";
}
function closeStudentTable(val) {
  val.isActiveModal = false;
  val.modalData = { title: "", data: {} };
}
</script>
