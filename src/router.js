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
import BlankMain from "@/components/BlankMain.vue";
import PatientResume from "@/components/PatientResume.vue";
const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      component: Main,
      redirect: { name: "foobar" },
      children: [
        { path: "options", component: BlankMain, name: "foobar" },
        {
          path: "specialist/login",
          component: Login,
          props: { navbar: false },
          name: "specialistlogin",
        },
        {
          path: "specialist/register",
          component: Register,
          name: "specialistregister",
        },
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
        { path: "patient/rate", component: RateSplash,name:"ratesplash" },
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
      name: "dashboard",
      redirect: { name: "resume" },
      children: [
        { path: "patient", component: PatientResume ,name:"patient"},
        { path: "psylist", component: PsyList, name: "psylist" },
        { path: "resume", component: AdminResume, name: "resume" },
        { path: "inqlist", component: AdminInqList, name: "inqlist" },
        {
          path: "derivationslist",
          component: AdminDerivationsList,
          name: "derivationslist",
        },
        {
          path: "derivationsrealization/:id",
          name: "realization",
          component: AdminDerivationsRealization,
          redirect: { name: "realizationoptions" },
          children: [
            {
              path: "options",
              component: DerivationsRealizationOption,
              name: "realizationoptions",
            },
            {
              path: "list",
              component: DerivationsRealizationList,
              name: "realizationlist",
            },
          ],
        },
      ],
    },
  ],
});

export default router;
