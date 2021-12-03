import { createRouter, createWebHistory } from "vue-router";

import Main from "@/views/Main.vue";
import Dash from "@/views/Dash.vue";
import PatientLogin from "@/components/PatientLogin.vue";
import Register from "@/components/Register.vue";
import InqRegister from "@/components/InqRegister.vue";
import RateSplash from "@/components/RateSplash.vue";
import SucessfullSplash from "@/components/SucessfullSplash.vue";
import AdminResume from "@/components/AdminResume.vue";
import AdminInqList from "@/components/AdminInqList.vue";
import InqInfoModal from "@/components/InqInfoModal.vue";
import AdminDerivationsList from "@/components/AdminDerivationsList.vue";
import AdminDerivationsRealization from "@/components/AdminDerivationsRealization.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: "/test", component: InqInfoModal },

    {
      path: "/",
      component: Main,
      children: [
        { path: "login", component: PatientLogin },
        { path: "register", component: Register },
        { path: "inq", component: InqRegister },
        { path: "rate", component: RateSplash },
        { path: "success", component: SucessfullSplash },
      ],
    },
    {
      path: "/admin",
      component: Dash,
      children: [
        { path: "resume", component: AdminResume },
        { path: "inqlist", component: AdminInqList },
        { path: "derivationslist", component: AdminDerivationsList },
        { path: "derivationsrealization", component: AdminDerivationsRealization },

      ],
    },
  ],
});

export default router;
