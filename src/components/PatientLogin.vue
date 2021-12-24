<template>
  <div class="patient_container w-full flex h-full px-4 sm:px-0">
    <div
      class="
        login_slider_container
        w-1/2
        sm:flex sm:flex-col
        sm:items-center´
        hidden
        px-32
        2xl:px-64
        space-y-12
      "
    >
      <div class="splash_img w-full">
        <img src="@/assets/images/codesplash.png" alt="" class="w-full" />
      </div>
      <div class="splash_info w-full flex flex-col text-white space-y-2">
        <span class="font-bold text-2xl">Bienvenido</span>
        <span class="text-xl font-thin"
          >Ingrese con el codigo que le envió su psicologo</span
        >
      </div>
      <div class="slider_dots flex justify-center space-x-4 items-center">
        <div class="dot rounded-full w-2 h-2 2xl:w-3 2xl:h-3 bg-primary-dark"></div>
        <div class="dot rounded-full w-3 h-3 2xl:w-4 2xl:h-4 bg-white"></div>
        <div class="dot rounded-full w-3 h-3 2xl:w-4 2xl:h-4 bg-white"></div>
      </div>
    </div>
    <div class="login_form_container w-full sm:w-1/2 flex justify-center h-full">
      <div
        class="
          code_form
          flex flex-col
          justify-center
          items-center
          text-white
          space-y-8 sm:space-y-24
        "
      >
        <div class="top_container sm:px-8 flex flex-col items-center space-y-4">
          <span class="font-bold">Ingrese su código de atención</span>
          <div class="code_input_group space-x-2">
            <input
              type="text"
              class="cipt w-12 h-12 px-2 text-center rounded font-bold"
              maxlength="1"
              v-model="accessKey[0]"
            />
            <input
              type="text"
              class="cipt w-12 h-12 px-2 text-center rounded font-bold"
              maxlength="1"
              v-model="accessKey[1]"
            />
            <input
              type="text"
              class="cipt w-12 h-12 px-2 text-center rounded font-bold"
              maxlength="1"
              v-model="accessKey[2]"
            />
            <input
              type="text"
              class="cipt w-12 h-12 px-2 text-center rounded font-bold"
              maxlength="1"
              v-model="accessKey[3]"
            />
            <input
              type="text"
              class="cipt w-12 h-12 px-2 text-center rounded font-bold"
              maxlength="1"
              v-model="accessKey[4]"
            />
            <input
              type="text"
              class="cipt w-12 h-12 px-2 text-center rounded font-bold"
              maxlength="1"
              v-model="accessKey[5]"
            />
          </div>
        </div>
        <div class="submit_container w-full">
          <button
            @click="tryLogin"
            class="
              btn
              w-full
              rounded
              shadow
              py-3
              font-medium
              text-xl
              active:opacity-80
              focus:outline-none
            "
          >
            Ingresar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    accessKey: ["", "", "", "", "", ""],
  }),
  mounted() {
    this.$emit("headerUpdate", [
      { path: {}, name: "Mas Información", type: "none" },
      { path: {}, name: "Contacto", type: "none" },
      {
        path: { name: "patientform" },
        name: "¿No tienes consulta?",
        type: "secondary",
      },
    ]);
  },
  methods: {
    tryLogin() {
      console.log(this.accessKey.join(""));
      this.$router.push({
        name:"patient"
      })
    },
  },
};
</script>
<style scoped>
.cipt {
  outline: none;
  background-color: #6469ff;
}
.btn {
  background-color: #ed8b52;
}
</style>
