<template>
  <form class="px-2 py-2 md:px-4 md:py-4 rounded-sm md:rounded-lg min-w-[18rem]">
    <p class="text-center font-bold text-gray-600">{{ store.modalData.title }}</p>
    <div class="relative z-0 mb-6 w-full group">
      <input
        type="text"
        name="floating_first_name"
        id="floating_first_name"
        v-model="form.name"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        for="floating_first_name"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Name</label
      >
    </div>
    <div class="relative z-0 mb-6 w-full group">
      <input
        type="tel"
        name="floating_phone"
        id="floating_phone"
        v-model="form.number"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        for="floating_phone"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Phone number (944455537)</label
      >
    </div>
    <div class="relative z-0 mb-6 w-full group">
      <input
        type="text"
        name="floating_company"
        v-model="form.course"
        id="floating_company"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        for="floating_company"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Course</label
      >
    </div>
    <button
      type="submit"
      @click.prevent.submit="modalSubmit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Submit
    </button>
  </form>
</template>
<script setup>
import { reactive } from "vue";
import { useCounterStore } from "../store/index";
const store = useCounterStore();
let form;

if (store.modalData.data) {
  form = reactive({
    name: store.modalData.data.name,
    number: store.modalData.data.number,
    course: store.modalData.data.course,
  });
} else {
  form = reactive({
    name: "",
    number: "",
    course: "",
  });
}

const modalSubmit = () => {
  if (form.name !== "" && !form.number !== "" && !form.course !== "") {
    if (store.modalData.data.number) {
      store.studentsTable[store.modalData.index] = form;
      store.isActiveModal = false;
      store.modalData = { title: "", data: {} };
    } else {
      store.studentsTable.push(form);
      store.isActiveModal = false;
    }
  } else {
    alert("Something went wrong");
  }
};
</script>
