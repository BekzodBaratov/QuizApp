import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      isAuthenticated: false,
      user: {},
      userList: [
        { name: "Bekzod", email: "bek@gmail.com", password: "bekzod8888" },
        { name: "Valisher", email: "valisher@gmail.com", password: "valisher8888" },
        { name: "Eldor", email: "eldor@gmail.com", password: "eldor8888" },
        { name: "Aziz", email: "aziz@gmail.com", password: "aziz8888" },
      ],
      studentsTable: [
        { name: "Bekzod", number: "944455537", course: "web development" },
        { name: "Eldor", number: "887471447", course: "Tourism" },
        { name: "Siroj", number: "933456543", course: "Tecnikal Enginering" },
        { name: "Aziz", number: "900090669", course: "Avia serce" },
      ],
      isActiveModal: false,
      modalData: { title: "", data: {} },
      delBoolean: false,
    };
  },
  persist: true,
});
