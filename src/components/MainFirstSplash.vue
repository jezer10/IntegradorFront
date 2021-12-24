<template>
  <div class="splashs_container w-full h-full flex">
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
      <span class="font-bold text-5xl sm:text-6xl">Recibe atención psicologíca</span>
      <span class="font-normal text-lg"
        >Atención psicológica virtual gratuita como medida de afronte a la
        crisis de salud provocada por la pandemia de COVID – 19.</span
      >
      <button
        class="start_button font-bold text-lg px-16 py-3 rounded-full shadow "
        @click="startActivity"
      >
        Empezar
      </button>
    </div>
    <div class="w-1/2 hidden  sm:flex justify-center items-center">
    <img src="@/assets/images/splash_one.png" alt="">
    </div>
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