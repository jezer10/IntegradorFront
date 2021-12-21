<template>
  <div class="h-full w-full overflow-auto space-y-4">
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
  mounted(){
    console.log("hola")
    console.log(this.specList)
  },
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
      console.log(this.selectedSpecialist);
      this.$emit("specialistSelected",val)
    },
  },
  computed: {
   
  },
};
</script>
