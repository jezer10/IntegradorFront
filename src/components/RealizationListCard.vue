<template>
  <div
    @click="activeListItem"
    class="psy_card w-full bg-white  rounded-lg h-1/2 2xl:h-1/3 flex"
    :class="isActive ? '' : 'hover:opacity-80 hover:shadow-none'"
  >
    <div
      class="
        w-10/12
        border
        h-full
        rounded-l-lg
        flex flex-col
        justify-between
        p-4
        text-xs 2xl:text-base
      "
    >
      <div class="info_row flex space-x-2 ">
        <span class="font-bold">Nombre: </span>
        <span class="">{{ specialist.firstname }} {{specialist.lastname}}</span>
      </div>
      <div class="info_row flex space-x-2">
        <span class="font-bold">DNI: </span>
        <span class="">{{ specialist.dni }}</span>
      </div>
      <div class="info_row flex space-x-2">
        <span class="font-bold">Grado Academico: </span>
        <span class="">{{ specialist.academicDegree }}</span>
      </div>
      <div class="info_row flex space-x-2">
        <span class="font-bold">Teléfono: </span>
        <span class="">{{ specialist.phone }}</span>
      </div>
    </div>
    <div
      class="w-2/12  rounded-r-lg flex justify-center p-2"
      :class="isActive ? 'bg-green-400' : 'bg-gray-200'"
    >
      <CheckIcon :class="isActive ? 'text-white' : 'text-black'" />
    </div>
  </div>
</template>

<script>
import { CheckIcon } from "@heroicons/vue/solid";

export default {
  components: { CheckIcon },
  props: ["specialist", "isActive"],
  data: () => ({}),
  methods: {
    activeListItem() {
      this.$emit("myEvent");
    },
  },
};
</script>
