<template>
  <section class="h-full px-4 sm:px-16 sm:py-8 overflow-y-auto">
    <div class="derivations_title py-4 sm:py-0 sm:h-1/10 flex items-center">
      <span class="font-bold text-2xl">Derivaciones</span>
    </div>
    <div
      class="
        derivations_container
        sm:h-9/10 sm:px-8 sm:py-8
        flex flex-col
        sm:flex-row sm:space-x-8
      "
    >
      <div class="derivations_info_container w-full sm:w-8/12 h-full">
        <div
          class="
            info_card
            p-4
            sm:p-8
            w-full
            bg-white
            rounded-lg
            shadow
            h-8/10
            flex flex-col
            justify-between
          "
        >
          <div class="info_row grid grid-cols-12 w-full">
            <div class="info_first_name flex flex-col col-span-6">
              <span class="font-bold text-lg">Nombres</span>
              <span class="">{{ inqInfo.patientfirstname }}</span>
            </div>
            <div class="info_last_name flex flex-col col-span-6">
              <span class="font-bold text-lg">Apellidos</span>
              <span class="">{{ inqInfo.patientlastname }}</span>
            </div>
            <div class="info_age flex flex-col col-span-3">
              <span class="font-bold text-lg">Edad</span>
              <span class="">{{ inqInfo.age }}</span>
            </div>
            <div class="info_first_name flex flex-col col-span-5">
              <span class="font-bold text-lg">Telefono</span>
              <span class="">{{ inqInfo.phone }}</span>
            </div>

            <div class="info_age flex flex-col col-span-4">
              <span class="font-bold text-lg">Ubicación</span>
              <span class="">{{ inqInfo.location }}</span>
            </div>
            <div class="info_last_name flex flex-col col-span-12">
              <span class="font-bold text-lg">Correo</span>
              <span class="">{{ inqInfo.mail }}</span>
            </div>
            <div class="info_first_name flex flex-col col-span-12">
              <span class="font-bold text-lg">Motivo de la consulta</span>
              <span class="">{{ inqInfo.atentiondescription }}</span>
            </div>
            <div class="info_first_name flex flex-col col-span-12">
              <span class="font-bold text-lg">Preferencia de atencion</span>
              <span class="">{{
                inqInfo.atentionpreference == "F" ? "Psicologa" : "Psicologo"
              }}</span>
            </div>
          </div>
        </div>
        <div
          class="
            risk_option_container
            w-full
            h-2/10
            grid grid-cols-1
            sm:grid-cols-2
            items-center
            gap-4
            py-4
            sm:py-0
          "
        >
          <select
            class="
              rounded
              shadow
              py-2
              px-4
              focus:outline-none
              text-white text-lg
            "
            :class="severyBackClass(inqModel.situationSevery)"
            v-model="inqModel.situationSevery"
            @change="derivateIsDisabled"
          >
            <option :value="i.id" class="" v-for="i in inqEstado" :key="i.id">
              {{ i.name }}
            </option>
          </select>
          <select
            name=""
            id=""
            class="rounded shadow py-2 px-4 focus:outline-none text-lg"
            v-model="inqModel.quickDiagnosis"
            @change="derivateIsDisabled"
          >
            <option
              :value="i.id"
              class=""
              v-for="i in inqDiagnosis"
              :key="i.id"
            >
              {{ i.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="derivations_options_container w-full sm:w-4/12 h-full">
        <div
          class="
            derivation_options_card
            h-8/10
            w-full
            bg-white
            rounded-lg
            shadow
            p-4
            sm:p-8
          "
        >
          <router-view
            :specList="specList"
            v-on:specialistSelected="specialistSelected($event)"
          ></router-view>
        </div>
        <div class="derivation_action h-2/10 flex items-center py-4 sm:py-0">
          <button
            @click="sendInquiryUpdate"
            class="
              w-full
              bg-indigo-500
              rounded-lg
              text-white
              py-4
              text-lg
              font-bold
              disabled:opacity-60
            "
            :disabled="derivateDisabled"
          >
            Derivar
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import DerivationsInfoCard from "./DerivationsInfoCard.vue";
import ConfirmModal from "./ConfirmModal.vue";
import atentions from "@/api/atentions.api.js";
import users from "@/api/users.api.js";

export default {
  components: { DerivationsInfoCard, ConfirmModal },
  mounted() {
    this.getDerivationInfo();
  },
  methods: {
    async sendInquiryUpdate() {
      console.log(this.inqModel);
      const response = await atentions.deriveAtention(
        this.$route.params.id,
        this.inqModel
      );
      if (response) {
        this.$notify({
          title: "Derivacion Correcta",
          type: "success",
        });
        this.$router.push({
          name: "derivationslist",
        });
      }else{
        this.$notify({
          title:"Ocurrio un error realizando la derivación",
          type:"error"
        })
      }
      console.log(response);
    },
    async getDerivationInfo() {
      const response = await atentions.getAtentionById(this.$route.params.id);
      this.inqInfo = response;
      this.getSpecList(this.inqInfo.atentionpreference)
    },
    async getSpecList(val) {
      const response = await users.getUsersByGender(val);
      console.log(response);
      this.specList = response;
    },
    derivateIsDisabled() {
      if (
        !this.inqModel.quickDiagnosis ||
        !this.inqModel.situationSevery ||
        !this.inqModel.iduser
      ) {
        return (this.derivateDisabled = true);
      }
      return (this.derivateDisabled = false);
    },
    specialistSelected(e) {
      this.inqModel.iduser = this.specList[e].idpersona;
      this.derivateIsDisabled()
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
  data: () => ({
    derivationsIssues: [1, 2, 3, 4, 5],
    derivationsCompleted: [{ state: "hola" }, { state: "hola" }],
    inqModel: {},
    inqInfo: {},
    specList: [],
    derivateDisabled: true,
    inqEstado: [
      { id: "1", name: "Leve" },
      { id: "2", name: "Moderada" },
      { id: "3", name: "Grave" },
    ],
    inqDiagnosis: [
      { id: "1", name: "Ansiedad" },
      { id: "2", name: "Depresion" },
      { id: "3", name: "Estres" },
    ],
  }),
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
