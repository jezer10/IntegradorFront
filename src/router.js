import { createRouter, createWebHistory } from "vue-router";

import Main from "@/views/Main.vue";
import Dash from "@/views/Dash.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "", component: Main },
    { path: "/dashboard", component: Dash },
  ],
});

export default router;
