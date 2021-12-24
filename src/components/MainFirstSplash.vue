<template>
  <div class="splashs_container w-full h-full">
    <div
      class="
        w-full
        sm:w-1/2
        h-full
        justify-center
        text-white
        flex flex-col
        space-y-16
        items-start
      "
    >
      <span class="font-bold text-5xl">Recibe atención psicologíca</span>
      <span class="font-bold"
        >Atención psicológica virtual gratuita como medida de afronte a la
        crisis de salud provocada por la pandemia de COVID – 19.</span
      >
      <button
        class="start_button font-bold rounded-full shadow px-16 py-2"
        @click="startActivity"
      >
        Empezar
      </button>
    </div>
    <div class="w-1/2 hidden sm:block"></div>
  </div>
</template>

<script>
export default {
  methods: {
    startActivity() {
      this.$router.push({
        name: "patientform",
      });
    },
  },
};
</script>
<style scoped>
.start_button {
  background-color: #6398ff;
}
</style>