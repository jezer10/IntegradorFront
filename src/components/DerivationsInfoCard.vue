<template>
  <div class="issue_card w-full p-8 bg-white rounded-lg shadow space-y-8">
    <div class="info_row grid grid-cols-3 w-full">
      <div class="info_first_name flex flex-col items-center">
        <span class="font-bold text-lg">Paciente</span>
        <span class="text-center">{{ derivationInfo.patientfullname }}</span>
      </div>
      <div class="info_last_name flex flex-col items-center">
        <span class="font-bold text-lg">Telefono</span>
        <span class="text-center">{{ derivationInfo.phone }}</span>
      </div>
      <div class="info_age flex flex-col items-center">
        <span class="font-bold text-lg">Correo</span>
        <span class="text-center">{{ derivationInfo.mail }}</span>
      </div>
    </div>
    <div class="info_row grid grid-cols-2 w-full">
      <div class="info_first_name flex flex-col items-center">
        <span class="font-bold text-lg">Psicólogo</span>
        <span class="">{{
          derivationInfo.personalfullname
            ? derivationInfo.personalfullname
            : "Sin Asignar"
        }}</span>
      </div>
      <div class="info_last_name flex flex-col items-center">
        <span class="font-bold text-lg ">Grado Académico</span>
        <span class="text-center">{{
          derivationInfo.academicdegree
            ? derivationInfo.academicdegree
            : "Sin Asignar"
        }}</span>
      </div>
    </div>
    <div class="info_row grid w-full">
      <div class="info_first_name flex items-center space-x-4">
        <span class="font-bold text-lg">Grado de la consulta:</span>
        <span
          class="py-1 px-4 rounded-lg text-white"
          :class="severyBackClass(derivationInfo.situationsevery)"
          >{{
            derivationInfo.situationsevery
              ? derivationInfo.situationsevery
              : "Sin asignar"
          }}</span
        ><span
          v-if="derivationInfo.quickdiagnosis"
          class="py-1 px-4 rounded-lg text-white bg-primary"
          >{{ derivationInfo.quickdiagnosis }}</span
        >
      </div>
    </div>

    <button
      @click="derivationAction ? routeDerivations() : cancelDerivation()"
      class="issues_action w-full font-bold text-lg rounded-lg text-white py-4"
      :class="derivationAction ? 'bg-primary' : 'bg-danger-dark'"
    >
      {{ derivationAction ? "Derivar" : "Cancelar" }}
    </button>
  </div>
</template>

<script>
export default {
  props: ["derivationInfo", "derivationAction"],
  data: () => ({}),
  methods: {
    routeDerivations() {
      this.$router.push({name:"realization"})
      console.log("hola");
    },
    cancelDerivation() {
      console.log("adios");
    },
    severyBackClass(val) {
      switch (val) {
        case "Leve":
          return "bg-success ";
        case "Moderada":
          return "bg-warning";
        case "Grave":
          return "bg-danger-dark";
        default:
          return "bg-gray-500 ";
      }
    },
  },
  computed: {},
};
</script>

<style scoped></style>
