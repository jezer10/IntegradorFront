<template>
  <div class="h-full w-full"></div>
</template>

<script>
export default {
  mounted() {
    this.$emit("headerUpdate", [
      { path: {}, name: "Mas Información", type: "none" },
      { path: {}, name: "Contacto", type: "none" },
      { path: { name: "patientform" }, name: "Soy Paciente", type: "dark" },
      {
        path: { name: "specialistlogin" },
        name: "Soy Psicologo",
        type: "secondary",
      },
    ]);
  },
};
</script>
