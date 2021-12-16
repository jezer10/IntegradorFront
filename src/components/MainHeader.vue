<template>
  <header
    class="
      main_header
      sm:h-1/10
      fixed
      sm:static
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
        sm:hidden
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
        <button
          @click="routeMainPage"
          class="active:bg-primary rounded-full px-4 py-2"
          style="-webkit-tap-highlight-color: transparent"
        >
          <img src="@/assets/images/logo_oido_amigo.png" alt="" class="w-16" />
        </button>
      </div>
    </div>

    <div
      class="nav-items w-11/12 bg-purple-50 fixed sm:hidden"
      :class="isMenuOpen ? 'left-0' : '-left-full'"
    >
      <ul>
        <li class="bg-primary-dark flex py-2 px-4" v-for="r in rutas" :key="r">
          <router-link
            :to="{ name: r.path.name }"
            class="text-white font-bold"
            >{{ r.name }}</router-link
          >
        </li>
      </ul>
    </div>

    <div
      class="
        large_header_container
        hidden
        sm:flex sm:justify-between sm:items-center
        w-full
      "
    >
      <div class="header_logo">
        <button
          class="active:bg-primary-dark rounded-full px-4 py-2"
          @click="routeMainPage"
        >
          <img src="@/assets/images/logo_oido_amigo.png" alt="" class="w-24" />
        </button>
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
    routeMainPage() {
      this.$router.push({
        path: "/",
      });
    },
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
