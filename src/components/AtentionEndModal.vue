<template>
  <div
    class="
      modal_container
      h-screen
      w-screen
      fixed
      top-0
      left-0
      flex
      justify-center
      items-center
    "
  >
    <div
      class="
        modal_card
        w-full sm:w-1/3
        bg-primary-light
        px-4 py-16
        rounded-2xl
        text-white text-center
        space-y-16
      "
    >
      <div class="space-y-2 flex flex-col justify-center items-center">
        <span class="font-bold text-2xl">ESPERA...</span>
        <span class="text-lg"
          >Hola usuario, haz completado todas tus sesiones y ya no hay mas
          actividades por hacer, para finalizar tu consulta puedes evaluar la
          atención</span
        >
      </div>
      <div class="">
        <button class="bg-secondary py-3 w-1/2 rounded-lg font-medium text-xl"  @click="routeToRate">Finalizar</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    methods:{
        routeToRate(){
            this.$router.push({
                name:"ratesplash"
            })
        }
    }
}
</script>

<style scoped>
.modal_container {
  background-color: rgba(0, 0, 0, 0.43);
}
</style>