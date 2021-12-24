<template>
  <div class="h-full w-full px-12 sm:px-0 relative">
    <button
      @click="sendBackSplash"
      v-if="actualSplash != 1"
      class="
        back_button
        w-8
        h-8
        sm:h-16 sm:w-16
        bg-white
        rounded-full
        p-1
        fixed
        top-1/2
        left-2 sm:left-16
      "
    >
      <ChevronLeftIcon class="text-primary" />
    </button>
    <button
      @click="sendNextSplash"
      v-if="actualSplash != 2"
      class="
        back_button
        sm:h-16 sm:w-16
        w-8
        h-8
        bg-white
        rounded-full
        p-1
        fixed
        top-1/2
        right-2
        sm:right-16
      "
    >
      <ChevronRightIcon class="text-primary" />
    </button>
    <div class="splash_container w-full h-full sm:px-32">
      <MainFirstSplash v-if="actualSplash == 1" />
      <MainSecondSplash v-if="actualSplash == 2" />
    </div>
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
      this.actualSplash += 1;
    },
    sendBackSplash() {
      this.actualSplash -= 1;
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
