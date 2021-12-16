<template>
  <div class="w-full h-full flex justify-center items-center px-4">
    <div class="center_container w-full sm:w-1/5 space-y-4">
      <div class="container_title">
        <span class="w-full flex justify-center font-bold text-lg text-white"
          >¿Quien deseas que te escuche?</span
        >
      </div>
      <div class="container_body space-y-16">
        <div class="container_options space-y-4">
          <div class="row flex space-x-4">
            <div
              @click="selectedPreference = 'M'"
              class="
                male_container
                w-1/2
                flex
                justify-center
                rounded-lg
                hover:opacity-80
              "
              :class="
                selectedPreference == 'M'
                  ? 'ring ring-primary-light ring-offset-4 ring-offset-primary hover:opacity-100'
                  : ''
              "
            >
              <img src="@/assets/images/male.png" alt="" class="" />
            </div>
            <div
              @click="selectedPreference = 'F'"
              :class="
                selectedPreference == 'F'
                  ? 'ring ring-primary-light ring-offset-4 ring-offset-primary hover:opacity-100'
                  : ''
              "
              class="
                female_container
                w-1/2
                flex
                justify-center
                rounded-lg
                bg-white
                hover:opacity-80
              "
            >
              <img src="@/assets/images/female.png" alt="" class="" />
            </div>
          </div>
          <div class="row">
            <button
              @click="selectedPreference = 'R'"
              :class="
                selectedPreference == 'R'
                  ? 'ring ring-primary-light ring-offset-4 ring-offset-primary hover:opacity-100'
                  : ''
              "
              class="
                w-full
                bg-primary-light
                rounded-lg
                py-2
                font-bold
                text-white text-lg
                hover:opacity-80
              "
            >
              Aleatorio
            </button>
          </div>
        </div>
        <div class="container_actions space-y-4">
          <button
            @click="registerInquiryData"
            class="
              bg-secondary
              font-bold
              text-white text-lg
              py-2
              w-full
              rounded-lg
            "
          >
            Registrar Consulta
          </button>
          <button
            @click="goBack"
            class="
              bg-primary-dark
              font-bold
              text-white text-lg
              py-2
              w-full
              rounded-lg
            "
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import atentions from "../api/atentions.api";
export default {
  data: () => ({
    selectedPreference: "",
    registerModel: {},
  }),

  mounted() {
    this.$emit("headerUpdate", [
      { path: {}, name: "Mas Información", type: "none" },
      { path: {}, name: "Contacto", type: "none" },
      {
        path: { name: "specialistlogin" },
        name: "¿Tienes una consulta?",
        type: "secondary",
      },
    ]);

    const object = this.$route.query;
    console.log(object);
    if (Object.keys(object).length === 0) {
      this.$router.push({
        name: "patientform",
      });
    } else {
      this.registerModel = object;
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    async registerInquiryData() {
      if (!this.selectedPreference) {
        this.$notify({
          type: "warning",
          title: "Selecciona una opcion",
        });
        return;
      }
      const registerData = {
        ...this.registerModel,
        atentionPreference: this.selectedPreference,
      };

      const response = await atentions.createAtention({
        atention: registerData,
      });
      if (response) {
        this.$router.push({
          name: "successregister",
          query: { code: response.trackingcode },
        });
      } else {
        this.$notify({
          type: "error",
          title: "Ocurrio un error mientras se registraba la consulta",
        });
      }
    },
  },
};
</script>

<style scoped>
.male_container {
  background-color: #b4b1b1;
}
</style>
