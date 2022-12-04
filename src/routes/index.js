import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../view/HomeView.vue"),
    },
    {
      path: "/usersList",
      name: "usersList",
      component: () => import("../view/UserListView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../view/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../view/RegisterView.vue"),
    },
    {
      path: "/editUser",
      name: "Edit",
      component: () => import("../view/EditView.vue"),
    },
  ],
});

export default router;
