<template>
  <div
    class="py-2 list_card w-full bg-white rounded-lg shadow grid grid-cols-12"
  >
    <div class="info_wrapper col-span-10 h-full grid grid-cols-12">
      <div class="info_name col-span-3 flex justify-center items-center">
        Jezer Gabriel Rázuri Pichén
      </div>
      <div class="info_mail col-span-3 flex justify-center items-center">
        jezerrazuri@upeu.edu.pe
      </div>
      <div class="info_status col-span-1 flex justify-center items-center">
        Activo
      </div>
      <div class="info_role col-span-2 flex justify-center items-center">
        Estudiante
      </div>
      <div class="info_degree col-span-2 flex justify-center items-center">
        4 año
      </div>
      <div class="info_sub col-span-1 flex justify-center items-center">
        Lima
      </div>
    </div>
    <div class="card_actions col-span-2 grid grid-cols-2">
      <div class="edit_action_container flex justify-center items-center">
        <button
          class="
            btn-primary
            w-12
            h-12
            text-primary-light
            active:bg-primary-light active:text-white
            rounded-full
            p-2
          "
        >
          <PencilIcon class="" />
        </button>
      </div>
      <div class="delete_action_container flex justify-center items-center">
        <button
          class="
            btn-danger
            w-12
            h-12
            text-danger
            active:bg-danger active:text-white
            rounded-full
            p-2
          "
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { PencilIcon, TrashIcon } from "@heroicons/vue/solid";

export default {
  components: { PencilIcon, TrashIcon },
};
</script>
