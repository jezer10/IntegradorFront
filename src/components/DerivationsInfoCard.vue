<template>
  <div class="issue_card w-full p-4 sm:p-8 bg-white rounded-lg shadow sm:space-y-8">
    <div class="info_row grid grid-cols-1 sm:grid-cols-3 w-full">
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
    <div class="info_row grid grid-cols-1 sm:grid-cols-2 w-full">
      <div class="info_first_name flex flex-col items-center">
        <span class="font-bold text-lg">Psicólogo</span>
        <span class="">{{
          derivationInfo.personalfullname != " "
            ? derivationInfo.personalfullname
            : "Sin Asignar"
        }}</span>
      </div>
      <div class="info_last_name flex flex-col items-center">
        <span class="font-bold text-lg">Grado Académico</span>
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
          >{{ severyBackName() }}</span
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
import atentions from "@/api/atentions.api.js";
export default {
  props: ["derivationInfo", "derivationAction"],
  data: () => ({}),
  computed: {},
  methods: {
    severyBackName() {
      switch (this.derivationInfo.situationsevery) {
        case "1":
          return "Leve";
        case "2":
          return "Moderado";
        case "3":
          return "Grave";
        default:
          return "Sin Asignar";
      }
    },
    routeDerivations() {
      this.$router.push({
        name: "realization",
        params: { id: this.derivationInfo.idatention },
      });
    },
    cancelDerivation() {
      const response = atentions.cancelDerivation(
        this.derivationInfo.idatention
      );

      if (response) {
        this.$notify({
          title: "Derivacion Cancelada",
          type: "success",
        });
        this.$emit("derivationChanged")
      } else {
        this.$notify({
          title: "Derivacion Cancelada",
          type: "error",
        });
      }
    },
    severyBackClass(val) {
      switch (val) {
        case "1":
          return "bg-success ";
        case "2":
          return "bg-warning";
        case "3":
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
