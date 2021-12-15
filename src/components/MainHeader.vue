<template>
  <header class="main_header h-1/10 flex justify-between items-center">
    <div class="header_logo">
      <img src="@/assets/images/oilogo.png" alt="" class="w-32" />
    </div>
    <nav class="header_navigation space-x-6 font-roboto flex items-center">
      <router-link
        :to="r.path"
        class="white text-white"
        v-for="r in  rutas"
        :key="r"
        :class="getRouteButtonClass(r.type)"
        >{{ r.name }}</router-link
      >
    </nav>
  </header>
</template>
<script>
export default {
  props: ["rutas"],
  data: () => ({
    routes: [
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
  mounted() {
    console.log(this.rutas);
  },
  updated() {
    console.log(this.rutas);
  },
  methods: {
    getRouteButtonClass(type) {
      switch (type) {
        case "none":
          return "";
        case "dark":
          return "bg-primary-dark px-8 py-2 rounded-full";
        case "secondary":
          return "bg-secondary px-8 py-2 rounded-full";
        default:
          return "";
      }
    },
  },
};
</script>
<style scoped></style>
