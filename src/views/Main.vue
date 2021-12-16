<template>
  <div class="main_wrapper py-4 sm:py-12  sm:px-16 h-screen">
    <MainHeader v-if="showHeader" :rutas="rutas" />
    <div
      class="main_content flex justify-center items-center mt-12 sm:m-0"
      :class="showHeader ? 'h-9/10' : 'h-full'"
    >
      <router-view v-on:headerUpdate="headerMethod($event)"></router-view>
    </div>
  </div>
</template>
<script>
import MainHeader from "@/components/MainHeader.vue";

export default {
  components: { MainHeader },
  data: () => ({
    showHeader: true,
    rutas: [
      { path: {}, name: "Mas Información", type: "none" },
      { path: {}, name: "Contacto", type: "none" },
      { path: { name: "patientform" }, name: "Soy Paciente", type: "dark" },
      {
        path: { name: "specialistlogin" },
        name: "Soy Psicologo",
        type: "secondary",
      },
    ],
  }),
  mounted() {},
  methods: {
    headerMethod(e) {
      console.log(e);
      if (!e) {
        return (this.showHeader = false);
      }

      this.showHeader = true;
      this.rutas = e;
    },
  },
};
</script>
<style scoped>
.main_wrapper {
  background-color: #575ce5;
}
.check_container {
  background-color: #6469ff;
}
.sucessfull_button {
  background-color: #ed8b52;
}
</style>
