<template>
  <div class="rate_container  2xl:w-1/4 w-full px-4">
    <div class="staff_info px-16 py-8 space-y-2 text-white">
      <div class="info_hint"><span class="text-sm">Tu psícologo:</span></div>
      <div class="info_name">
        <span class="font-medium text-lg">Luis Antonio Prado Castillo</span>
      </div>
    </div>

    <textarea
      name=""
      id=""
      rows="4"
      class="rate_description w-full focus:outline-none resize-none rounded p-4 text-white"
      placeholder="¿Como califica la atención de su consulta?"
    ></textarea>
    <div class="punctuation_container text-white px-16 py-8 space-y-4">
      <div class="punctuation_hint text-center">
        <span class="text-sm">Califique la atención</span>
      </div>
      <div class="punctiation_stars_container flex space-x-2 justify-center">
        <FillStar class="w-8" v-for="i in punctuation" :key="i" @click="savePunctuation = punctuation" @mouseleave="resetPunctuation" />
        <NullStar
          class="w-8"
          v-for="(s, i) in (5-punctuation)"
          :key="s"
          @mouseenter="starEvent(i)"
        />
      </div>
    </div>
    <button
      class="w-full bg-secondary text-white text-xl font-medium rounded-lg py-2 active:opacity-80 focus:outline-none"
    >
      Siguiente
    </button>
  </div>
</template>

<script>
import { StarIcon as NullStar } from "@heroicons/vue/outline";
import { StarIcon as FillStar } from "@heroicons/vue/solid";
export default {
  components: { FillStar, NullStar },
  data: () => ({
    punctuation:0,
    savePunctuation:0
  }),
  methods: {
    starEvent(val) {
      this.punctuation = val+this.punctuation+1
      console.log("ola", val);
    },
    resetPunctuation(){
      this.punctuation=0
    }
  },
};
</script>

<style scoped>
.rate_description {
  background-color: #6469ff;
}
</style>
