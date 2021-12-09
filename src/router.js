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
import DerivationsRealizationOption from "@/components/DerivationsRealizationOption.vue";
import DerivationsRealizationList from "@/components/DerivationsRealizationList.vue";
import PsyList from "@/components/PsyList.vue";
import Login from "@/components/Login.vue";
import SelectProfessional from "@/components/SelectProfessional.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: "/test", component: InqInfoModal },

    {
      path: "/",
      component: Main,
      children: [
        { path: "specialist/login", component: Login },
        { path: "specialist/register", component: Register },
        {
          path: "patient/register",
          component: InqRegister,
          name: "patientform",
        },
        {
          path: "patient/register/preference",
          component: SelectProfessional,
          name: "preferences",
        },
        { path: "patient/rate", component: RateSplash },
        {
          path: "patient/register/success",
          component: SucessfullSplash,
          name: "successregister",
        },
        {
          path: "patient/login",
          component: PatientLogin,
          name: "patientlogin",
        },
      ],
    },
    {
      path: "/admin",
      component: Dash,
      children: [
        { path: "psylist", component: PsyList },
        { path: "resume", component: AdminResume },
        { path: "inqlist", component: AdminInqList },
        { path: "derivationslist", component: AdminDerivationsList },
        {
          path: "derivationsrealization",
          component: AdminDerivationsRealization,
          children: [
            { path: "", component: DerivationsRealizationOption },
            { path: "list", component: DerivationsRealizationList },
          ],
        },
      ],
    },
  ],
});

export default router;
