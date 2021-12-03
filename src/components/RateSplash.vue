<template>
  <div class="rate_container w-2/6 px-16">
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
      class="rate_description w-full focus:outline-none resize-none rounded p-4"
      placeholder="¿Como califica la atención de su consulta?"
    ></textarea>
    <div
      class="
        punctuation_container

        text-white
        px-16
        py-8
        space-y-4
      "
    >
      <div class="punctuation_hint text-center">
        <span class="text-sm">Califique la atención</span>
      </div>
      <div class="punctiation_stars_container flex space-x-2 justify-center">
        <StarIcon class="w-8" v-for="s in stars" :key="s" @mouseover="starEvent"/>
      </div>
    </div>
  </div>
</template>

<script>
import { StarIcon } from "@heroicons/vue/outline";
export default {
  components: { StarIcon },
  data:()=>({
      stars:[1,2,3,4,5]
  }),
  methods:{
      starEvent(){
          console.log("ola")
      }
  }
};
</script>

<style scoped>
.rate_description {
  background-color: #6469ff;
}
</style>
