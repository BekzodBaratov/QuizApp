import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      isAuthenticated: false,
      user: { name: "", password: "", email: "" },
      userList: [],
    };
  },
  persist: true,
});
