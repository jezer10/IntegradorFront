<template>
  <header class="main_header h-1/10 flex justify-between items-center">
    <div class="header_logo">
      <img src="@/assets/images/oilogo.png" alt="" class="w-32" />
    </div>
    <nav class="header_navigation space-x-6 font-roboto flex items-center">
      <router-link to="/" class="white text-white">Mas Información</router-link>
      <router-link to="/" class="white text-white">Contacto</router-link>
      <button class="btn_register text-white px-8 py-2 rounded-full">
        Registrarse
      </button>
      <button class="btn_login text-white px-8 py-2 rounded-full">
        Iniciar Sesión
      </button>
    </nav>
  </header>
</template>
<script>
export default {
};
</script>
<style scoped>
.btn_register {
  background-color: #4447a5;
}
.btn_login {
  background-color: #ed8b52;
}
</style>
