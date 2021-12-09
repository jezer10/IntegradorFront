<template>
  <div
    class="
      modal_container
      h-screen
      w-screen
      flex
      justify-center
      items-center
      fixed
      top-0
      left-0
    "
  >
    <div class="modal_card bg-white rounded-lg p-8 shadow w-1/2 space-y-12">
      <div class="card_body space-y-12">
        <div class="info_row grid grid-cols-5">
          <div class="info_fullname flex flex-col col-span-2">
            <span class="font-bold">Nombres</span>
            <span class="">Jezer Gabriel Rázuri Pichen</span>
          </div>
          <div class="info_dni flex flex-col">
            <span class="font-bold">DNI</span>
            <span class="">12345678</span>
          </div>
          <div class="info_degree flex flex-col">
            <span class="font-bold">Grado Academico</span>
            <span class="">5 año</span>
          </div>
          <div class="info_sub flex flex-col">
            <span class="font-bold">Filial</span>
            <span class="">Lima</span>
          </div>
        </div>
        <div class="info_row grid grid-cols-4">
          <div class="info_phone flex flex-col">
            <span class="font-bold">Telefono</span>
            <span class="">912312122</span>
          </div>
          <div class="info_mail flex flex-col">
            <span class="font-bold">Correo</span>
            <span class="">jezerrazuri@upeu.edu.pe</span>
          </div>
          <div class="info_gender flex flex-col">
            <span class="font-bold">Género</span>
            <span class="">Hombre</span>
          </div>
          <div class="info_ver flex flex-col">
            <span class="font-bold">Verificación</span>
            <div class="ver_action w-full">
              <button class="active:bg-gray-400 flex items-center space-x-2"><EyeIcon class="h-4 text-primary" /> <span>evidencia.png</span></button>
            </div>
          </div>
        </div>
      </div>
      <div class="card_actions w-full">
        <button
          class="
            save_button
            rounded-lg
            bg-primary
            text-white
            font-bold
            text-lg
            py-2
            w-full
          "
        >
          Guardar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { EyeIcon } from "@heroicons/vue/solid";
export default {
  components: { EyeIcon },
};
</script>

<style scoped>
.modal_container {
  background-color: rgba(0, 0, 0, 0.43);
}
</style>
