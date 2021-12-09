<template>
  <div
    @click="activeListItem"
    class="psy_card w-full bg-white shadow rounded-lg h-1/3 flex"
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
      "
    >
      <div class="info_row flex space-x-2">
        <span class="font-bold">Nombre: </span>
        <span class="">{{ specialist.name }}</span>
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
      class="w-2/12 h-full rounded-r-lg flex justify-center p-4"
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
      console.log(this.isActive);
      this.$emit("myEvent");
    },
  },
};
</script>
