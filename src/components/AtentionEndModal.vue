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
        w-1/2
        bg-primary-light
        p-8
        rounded-lg
        text-white text-center
      "
    >
      <div class="space-y-4 flex flex-col justify-center items-center">
        <span class="font-bold text-2xl">ESPERA...</span>
        <span
          >Hola usuario, haz completado todas tus sesiones y ya no hay mas
          actividades por hacer, para finalizar tu consulta puedes evaluar la
          atención</span
        >
      </div>
      <div class="py-8">
        <button class="bg-secondary py-2 w-1/2 rounded-lg" @click="routeToRate">Finalizar</button>
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