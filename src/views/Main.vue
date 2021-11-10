<template>
  <div class="main_wrapper py-12 px-16 h-screen">
    <header class="main_header flex justify-between">
      <div class="header_logo ">
        <Logo class="" />
      </div>
      <nav class="header_navigation space-x-6 font-roboto">
        <router-link to="/" class="white text-white"
          >Mas Información</router-link
        >
        <router-link to="/" class="white text-white">Contacto</router-link>
        <button class="btn_register text-white px-8 py-2 rounded-full">
          Registrarse
        </button>
        <button class="btn_login text-white px-8 py-2 rounded-full">
          Iniciar Sesión
        </button>
      </nav>
    </header>
  </div>
</template>
<script>
import Logo from "@/assets/images/logo.svg";
export default {
  components: { Logo },
};
</script>
<style scoped>
.main_wrapper {
  background-color: #575ce5;
}
.btn_register {
  background-color: #4447a5;
}
.btn_login{
    background-color: #ED8B52;
}
</style>
