<template>
  <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="py-3 px-6">Name</th>
          <th scope="col" class="py-3 px-6">
            <div class="flex items-center">
              number
              <RouterLink to="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-1 w-3 h-3"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"
                  />
                </svg>
              </RouterLink>
            </div>
          </th>
          <th scope="col" class="py-3 px-6">
            <div class="flex items-center">
              Course
              <RouterLink to="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-1 w-3 h-3"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"
                  />
                </svg>
              </RouterLink>
            </div>
          </th>
          <td class="py-4 px-6"></td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(user, index) in storeForm.studentsTable"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ user.name }}
          </th>
          <td class="py-4 px-6">{{ user.number }}</td>
          <td class="py-4 px-6">{{ user.course }}</td>
          <td class="py-4 px-6">
            <a
              v-if="!storeForm.delBoolean"
              @click="() => EditStudent(user, index)"
              href="#"
              class="font-medium text-blue-500 hover:underline"
              >Edit</a
            >
            <a @click="() => deleteStudent(index)" v-else href="#" class="font-medium text-red-500 hover:underline"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useCounterStore } from "../store/index";
const storeForm = useCounterStore();

const userStore = [...storeForm.userList].sort((a, b) => {
  if (typeof a === String && typeof b === String) {
    const nameA = a.number.toUpperCase();
    const nameB = b.number.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;

    // names must be equal
    return 0;
  } else {
    return a - b;
  }
});

const EditStudent = (user, index) => {
  storeForm.isActiveModal = true;
  storeForm.modalData = { title: "Edit Student", data: user, index: index };
};
const deleteStudent = (index) => {
  storeForm.studentsTable.splice(index, 1);
};
console.log(userStore);
</script>
