<template>
  <div
    class="inq_container w-full 2xl:py-16 px-4 sm:px-0 2xl:px-32 flex h-full"
  >
    <div
      class="
        hidden
        inq_description_container
        sm:flex
        flex-col
        text-white
        space-y-8
        w-1/2
        h-full
        justify-center
      "
    >
      <span class="font-bold text-6xl">Oído Amigo</span>
      <span class="text-2xl"
        >Hola, bienvenido a <strong>OÍDO AMIGO</strong>, realiza tus consultas y
        recibe ayuda de especialistas
      </span>
      <span class="text-2xl">Estamos para escucharte</span>
    </div>
    <div
      class="
        inq_form_container
        w-full
        sm:w-1/2
        flex flex-col
        sm:flex-row sm:justify-end
        h-full
        items-center
        2xl:px-16
      "
    >
      <div class="inq_form_title py-2 sm:hidden">
        <span class="text-white font-bold">Registrar Consulta</span>
      </div>
      <div class="inq_form w-full">
        <form method="POST" @submit="validateInput">
          <div
            class="
              inputs_container
              grid grid-cols-1
              sm:grid-cols-2
              2xl:grid-cols-1
              gap-2
            "
          >
            <input
              class="form_input"
              type="text"
              placeholder="Nombres"
              v-model="registerModel.firstname"
              @blur="v$.registerModel.firstname.$validate()"
              :class="
                v$.registerModel.firstname.$error
                  ? 'border border-dashed border-red-500'
                  : ''
              "
            />
            <input
              class="form_input"
              type="text"
              placeholder="Apellidos"
              v-model="registerModel.lastname"
              @blur="v$.registerModel.lastname.$validate()"
              :class="
                v$.registerModel.lastname.$error
                  ? 'border border-dashed border-red-500'
                  : ''
              "
            />
            <input
              class="form_input"
              type="text"
              placeholder="Edad"
              v-model="registerModel.age"
              @blur="v$.registerModel.age.$validate()"
              :class="
                v$.registerModel.age.$error
                  ? 'border border-dashed border-red-500'
                  : ''
              "
            />
            <input
              class="form_input"
              type="text"
              placeholder="Número de telefono"
              v-model="registerModel.phone"
              @blur="v$.registerModel.phone.$validate()"
              :class="
                v$.registerModel.phone.$error
                  ? 'border border-dashed border-red-500'
                  : ''
              "
            />
            <input
              class="form_input"
              type="text"
              placeholder="Correo Electrónico"
              v-model="registerModel.mail"
              @blur="v$.registerModel.mail.$validate()"
              :class="
                v$.registerModel.mail.$error
                  ? 'border border-dashed border-red-500'
                  : ''
              "
            />
            <input
              class="form_input"
              type="text"
              placeholder="País o ciudad"
              v-model="registerModel.location"
              @blur="v$.registerModel.location.$validate()"
              :class="
                v$.registerModel.location.$error
                  ? 'border border-dashed border-red-500'
                  : ''
              "
            />
            <div class="form_control sm:col-span-2 2xl:col-span-1 relative">
              <label
                class="absolute bottom-4 right-4 text-xs"
                :class="
                  registerModel.atentionDescription.length === 250
                    ? 'text-red-500'
                    : registerModel.atentionDescription.length === 0
                    ? 'text-yellow-600'
                    : 'text-green-500'
                "
                >{{ registerModel.atentionDescription.length }}/250</label
              >
              <textarea
                maxlength="250"
                class="form_input w-full resize-none"
                rows="4"
                placeholder="Motivo de consulta"
                @blur="v$.registerModel.atentionDescription.$validate()"
                v-model="registerModel.atentionDescription"
                :class="
                  v$.registerModel.atentionDescription.$error
                    ? 'border border-dashed border-red-500'
                    : ''
                "
              ></textarea>
            </div>
          </div>
          <div class="accept_terms_container flex items-center space-x-2 py-2">
            <input type="checkbox" class="" v-model="isAccepted" />
            <span class="text-white text-sm"
              >Acepto las políticas de privacidad y uso de datos</span
            >
          </div>
          <div class="submit_container py-2">
            <button type="submit" class="btn_secondary">Siguiente</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { email, required, numeric } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
export default {
  data: () => ({
    v$: useVuelidate() ? useVuelidate() : registerModel,

    registerModel: {
      firstname: "",
      lastname: "",
      age: "",
      location: "",
      atentionDescription: "",
      phone: "",
      mail: "",
    },
    isAccepted: false,
  }),
  mounted() {
    this.$emit("headerUpdate", [
      { path: {}, name: "Mas Información", type: "none" },
      { path: {}, name: "Contacto", type: "none" },
      {
        path: { name: "patientlogin" },
        name: "¿Ya tienes consulta?",
        type: "secondary",
      },
    ]);
  },

  validations() {
    return {
      registerModel: {
        firstname: { required },
        lastname: { required },
        age: { required, numeric },
        location: { required },
        atentionDescription: { required },
        phone: { required },
        mail: { required, email },
      },
    };
  },
  methods: {
    returnErrorMessage(val) {
      switch (val) {
        case "required":
          return "Campos requeridos vacios";
        case "numeric":
          return "Campos Numericos";
        case "email":
          return "Formato de correo incorrecto";
        default:
          return "error";
      }
    },
    validateInput(e) {
      e.preventDefault();
      this.v$.registerModel.$validate();
      if (!this.v$.registerModel.$error) {
        if (this.isAccepted) {
          this.registerInquiry();
        } else {
          this.$notify({
            type: "warn",
            text: "Es necesario Aceptar los terminos y condiciones para continuar",
          });
        }
      } else {
        this.$notify({
          type: "warn",
          text: this.returnErrorMessage(
            this.v$.registerModel.$errors[0].$validator
          ),
        });
      }
    },
    registerInquiry() {
      console.log(this.registerModel);
      this.$router.push({
        name: "preferences",
        query: this.registerModel,
      });
    },
  },
};
</script>

<style scoped></style>
