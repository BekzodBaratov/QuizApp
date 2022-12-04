<template>
  <form>
    <div class="relative z-0 mb-6 w-full group">
      <input
        type="text"
        name="floating_first_name"
        id="floating_first_name"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        v-model="userForm.name"
        placeholder=" "
        required
      />
      <label
        for="floating_first_name"
        class="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Name</label
      >
    </div>
    <div class="grid md:grid-cols-2 md:gap-6">
      <div class="relative z-0 mb-6 w-full group">
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          name="floating_phone"
          id="floating_phone"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          v-model="userForm.number"
          placeholder=" "
          required
        />
        <label
          for="floating_phone"
          class="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Phone number (94-445-5537)</label
        >
      </div>
      <div class="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name="floating_company"
          id="passport"
          class="block py-2.5 px-0 w-full text-sm uppercase text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          v-model="userForm.passport"
          placeholder=" "
          required
        />
        <label
          for="passport"
          class="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Passport (Ex. AB1234567)</label
        >
      </div>
    </div>
    <div class="grid md:grid-cols-2 md:gap-6">
      <div class="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name="floating_phone"
          id="pinfl"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          v-model="userForm.pinfl"
          placeholder=" "
        />
        <label
          for="pinfl"
          class="peer-focus:font-medium uppercase absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >PINFL</label
        >
      </div>
      <div class="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name="floating_company"
          id="floating_company"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          v-model="userForm.birtDate"
          required
        />
        <label
          for="floating_company"
          pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}"
          class="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Birth Date (Ex. 24.11.2022)
        </label>
      </div>
    </div>
    <button
      type="submit"
      @click.prevent="formFunc"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:focus:ring-blue-800"
    >
      Submit
    </button>
  </form>
</template>

<script setup>
import { reactive } from "vue";
import { useCounterStore } from "../store";
const store = useCounterStore();

const userForm = reactive({
  name: store.user.name,
  number: store.user.number,
  passport: store.user.passport,
  birtDate: store.user.birtDate,
  pinfl: store.user.pinfl,
});

const formFunc = () => {
  function indexTop(store) {
    for (let i in store.userList) {
      if (store.userList[i].email === store.user.email) {
        store.userList[i] = { ...store.userList[i], ...userForm };
        store.user = { ...store.userList[i], ...userForm };

        console.log("sdsd");
      }
    }
  }

  indexTop(store);

  console.log(store.userList);
  console.log(store.user);
};
</script>
