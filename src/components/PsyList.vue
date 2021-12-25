<template>
  <PsyInfoModal v-show="isActiveModel"
      v-on:hide="isActiveModel = false"/>
  <section class="h-full px-4 sm:px-32">
    <div class="list_title h-1/10 flex items-center">
      <span class="font-bold text-2xl">Psicólogos</span>
    </div>
    <div class="list_container h-9/10">
      <div class="list_header h-1/10 grid grid-cols-12">
        <div
          class="
            header_card
            h-full
            bg-white
            rounded-lg
            shadow
            col-span-10
            grid grid-cols-12
            font-bold
          "
        >
          <div
            class="
              header_name
              col-span-3
              flex
              justify-center
              items-center
              border-r
            "
          >
            Nombre
          </div>
          <div
            class="
              header_name
              col-span-3
              flex
              justify-center
              items-center
              border-r border-l
            "
          >
            Correo
          </div>
          <div
            class="
              header_name
              col-span-1
              flex
              justify-center
              items-center
              border-r border-l
            "
          >
            Estado
          </div>
          <div
            class="
              header_name
              col-span-2
              flex
              justify-center
              items-center
              border-r border-l
            "
          >
            Rol
          </div>
          <div
            class="
              header_name
              col-span-2
              flex
              justify-center
              items-center
              border-r border-l
            "
          >
            Grado Academico
          </div>
          <div
            class="
              header_name
              col-span-1
              flex
              justify-center
              items-center
              border-l
            "
          >
            Filial
          </div>
        </div>
      </div>

      <div class="list_wrapper h-9/10 py-4">
        <div class="list_slider h-full overflow-y-auto space-y-4">
          <PsyCard v-for="p in psyList" :key="p" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { PencilIcon, TrashIcon } from "@heroicons/vue/solid";
import PsyCard from "./PsyCard.vue";
import PsyInfoModal from "./PsyInfoModal.vue";

export default {
  components: { PsyCard, PsyInfoModal },
  
  data: () => ({
    psyList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    isActiveModel:false
  }),
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
