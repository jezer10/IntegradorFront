<template>
  <div class="h-full w-full px-12 sm:px-0 relative">
    <button
      @click="sendBackSplash"
      v-if="actualSplash != 1"
      class="back_button w-8 h-8 bg-white rounded-full p-1 fixed top-1/2 left-2"
    >
      <ChevronLeftIcon class="text-primary" />
    </button>
    <button
      @click="sendNextSplash"
      v-if="actualSplash != 2"
      class="
        back_button
        w-8
        h-8
        bg-white
        rounded-full
        p-1
        fixed
        top-1/2
        right-2
      "
    >
      <ChevronRightIcon class="text-primary" />
    </button>
    <MainFirstSplash v-if="actualSplash == 1" />
    <MainSecondSplash v-if="actualSplash == 2" />
  </div>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/solid";
import MainFirstSplash from "./MainFirstSplash.vue";
import MainSecondSplash from "./MainSecondSplash.vue";
export default {
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
    MainFirstSplash,
    MainSecondSplash,
  },

  data: () => ({
    actualSplash: 1,
  }),
  methods: {
    sendNextSplash() {
      this.actualSplash+=1;
    },
    sendBackSplash() {
      this.actualSplash-=1;
    },
  },
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
