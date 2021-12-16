<template>
  <header
    class="
      main_header
      sm:h-1/10
      fixed
      w-full
      top-0
      l-0
      bg-primary-dark
      sm:bg-transparent
    "
  >
    <div
      class="
        small_header_container
        h-16
        w-full
        flex
        items-center
        justify-between
        px-2
        focus:outline-none
      "
    >
      <button
        @click="changeMenuState"
        class="
          header_button
          w-12
          h-12
          active:bg-indigo-400
          p-2
          hover:backdrop-blur-xl
          rounded-full
        "
        style="-webkit-tap-highlight-color: transparent"
      >
        <MenuIcon class="text-white" />
      </button>
      <div class="header_logo px-4">
        <img src="@/assets/images/oilogo.png" alt="" class="w-16" />
      </div>
    </div>

    <div
      class="nav-items w-11/12 bg-purple-50 fixed"
      :class="isMenuOpen ? 'left-0' : '-left-full'"
    >
      <ul>
        <li class="bg-primary-dark flex py-2 px-4" v-for="r in routes" :key="r">
          <router-link
            :to="{ name: r.path.name }"
            class="text-white font-bold"
            >{{ r.name }}</router-link
          >
        </li>
      </ul>
    </div>

    <div
      class="large_header_container hidden sm:flex justify-between items-center"
    >
      <div class="header_logo">
        <img src="@/assets/images/oilogo.png" alt="" class="w-32" />
      </div>
      <nav class="header_navigation space-x-6 font-roboto flex items-center">
        <router-link
          :to="r.path"
          class="white text-white"
          v-for="r in rutas"
          :key="r"
          :class="getRouteButtonClass(r.type)"
          >{{ r.name }}</router-link
        >
      </nav>
    </div>
  </header>
</template>
<script>
import { MenuIcon } from "@heroicons/vue/solid";
export default {
  props: ["rutas"],
  components: { MenuIcon },
  data: () => ({
    isMenuOpen: false,
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
  methods: {
    changeMenuState() {
      console.log("hola");
      this.isMenuOpen = !this.isMenuOpen;
    },
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
