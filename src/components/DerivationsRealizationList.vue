<template>
  <div class="h-full w-full overflow-auto space-y-4">
    <div class="default_msg flex justify-center items-center h-full w-full" v-if="specList.length===0">
      <span class="text-gray-400">No hay personal disponible</span>
    </div>
    <RealizationListCard
      v-for="(s, i) in specList"
      :key="s"
      v-bind:specialist="s"
      v-bind:isActive="i == selectedSpecialist ? true : false"
      v-on:my-event="doSomething(i)"
    />
  </div>
</template>
<script>
import RealizationListCard from "@/components/RealizationListCard.vue";
export default {
  components: { RealizationListCard },
  props:["specList"],

  data: () => ({
    selectedSpecialist: -1,
    specialistsList: [
      {
        name: "Jezer Gabriel Rázuri Pichén",
        dni: "12345678",
        academicDegree: "",
        phone: "123123123",
      },
      {
        name: "Jafet Joel Rázuri Pichén",
        dni: "12345678",
        academicDegree: "",
        phone: "123123123",
      },
      {
        name: "Jezer Gabriel Rázuri Pichén",
        dni: "12345678",
        academicDegree: "",
        phone: "123123123",
      },
      {
        name: "Jezer Gabriel Rázuri Pichén",
        dni: "12345678",
        academicDegree: "",
        phone: "123123123",
      },
    ],
  }),
  methods: {
    doSomething(val) {
      this.selectedSpecialist = val;
      this.$emit("specialistSelected",val)
    },
  },
  computed: {
   
  },
};
</script>
