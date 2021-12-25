<template>
  <div
    class="
      register_wrapper
      w-full
      2xl:px-80
      sm:flex sm:flex-col sm:justify-center
      h-full
      px-4
      overflow-scroll
    "
  >
    <div
      class="
        register_form__title
        py-4
        sm:py-8
        flex
        justify-center
        sm:justify-start
        items-center
      "
    >
      <span class="text-white font-bold text-3xl sm:text-4xl">Registro</span>
    </div>
    <div class="register_form_container">
      <form action="post" @submit="submitRegister">
        <div class="register_form grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            v-model="registerFormData.username"
            placeholder="Nombre de usuario"
            type="text"
            class="form_input"
            :class="v$.registerFormData.username.$error ? 'is_required' : ''"
          />

          <input
            v-model="registerFormData.firstname"
            placeholder="Nombres"
            type="text"
            class="form_input"
            :class="v$.registerFormData.firstname.$error ? 'is_required' : ''"
          />
          <div class="pass_container relative flex items-center">
            <input
              v-model="registerFormData.password"
              placeholder="Contraseña"
              class="form_input w-full"
              :class="v$.registerFormData.password.$error ? 'is_required' : ''"
              :type="isVisiblePass ? 'text' : 'password'"
            />
            <button
              type="button"
              @click="isVisiblePass = !isVisiblePass"
              class="
                absolute
                right-2
                rounded-full
                w-8
                h-8
                p-1
                hover:bg-primary-dark
                text-white
              "
            >
              <LockClosedIcon v-if="!isVisiblePass" />
              <LockOpenIcon v-if="isVisiblePass" />
            </button>
          </div>
          <input
            v-model="registerFormData.lastname"
            placeholder="Apellidos"
            type="text"
            class="form_input"
            :class="v$.registerFormData.lastname.$error ? 'is_required' : ''"
          />
          <input
            v-model="registerFormData.dni"
            placeholder="DNI"
            type="text"
            class="form_input"
            :class="v$.registerFormData.dni.$error ? 'is_required' : ''"
          />
          <input
            v-model="registerFormData.phone"
            placeholder="Número de teléfono"
            type="text"
            class="form_input"
            :class="v$.registerFormData.phone.$error ? 'is_required' : ''"
          />
          <select
            placeholder="Selecciona un genero"
            v-model="registerFormData.gender"
            class="form_input"
            :class="v$.registerFormData.gender.$error ? 'is_required' : ''"
          >
            <option selected value="" hidden>Seleccionar genero</option>

            <option v-for="g in genderOptions" :key="g.id" :value="g.id">
              {{ g.name }}
            </option>
          </select>
          <input
            v-model="registerFormData.mail"
            placeholder="Correo electronico"
            type="text"
            class="form_input"
            :class="v$.registerFormData.mail.$error ? 'is_required' : ''"
          />
          <select
            v-model="registerFormData.academicDegree"
            class="form_input"
            :class="
              v$.registerFormData.academicDegree.$error ? 'is_required' : ''
            "
          >
            <option selected value="" hidden>
              Seleccionar Grado Academico
            </option>
            <option :value="a" v-for="a in academicDegreeOptions" :key="a">
              {{ a }}
            </option>
          </select>
          <input
            @change="changeFile($event)"
            placeholder="Carnet Universitario"
            type="file"
            class="form_file"
            accept="image/*"
            :class="v$.formFile.$error ? 'is_required_file' : ''"
          />
        </div>
        <div class="register_action flex justify-center py-4 sm:py-16">
          <div class="submit_container w-full sm:w-1/2">
            <button type="submit" class="btn_secondary">Registrarse</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import users from "../api/users.api";
import { useVuelidate } from "@vuelidate/core";
import { required, email, numeric, alphaNum } from "@vuelidate/validators";
import { LockClosedIcon, LockOpenIcon } from "@heroicons/vue/solid";

export default {
  components: { LockClosedIcon, LockOpenIcon },
  data: () => ({
    isVisiblePass: false,
    v$: useVuelidate() ? useVuelidate() : registerFormData,
    academicDegreeOptions: ["3er Año", "4to Año", "5to Año", "Bachiller"],
    genderOptions: [
      { id: "M", name: "Masculino" },
      { id: "F", name: "Femenino" },
    ],
    registerFormData: {
      username: "",
      firstname: "",
      lastname: "",
      password: "",
      dni: "",
      phone: "",
      mail: "",
      gender: "",
      academicDegree: "",
    },
    formFile: "",
  }),
  validations: () => ({
    registerFormData: {
      username: { required, alphaNum },
      firstname: { required },
      lastname: { required },
      password: { required },
      dni: { required, numeric },
      phone: { required },
      mail: { required, email },
      gender: { required },
      academicDegree: { required },
    },
    formFile: { required },
  }),
  mounted() {
    this.$emit("headerUpdate", [
      {
        path: { name: "specialistlogin" },
        name: "Ya tengo una cuenta",
        type: "secondary",
      },
    ]);
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
        case "alphaNum":
          return "El campo debe contener solo letras y numeros";
        default:
          return "error";
      }
    },
    async uploadData() {
      console.log(this.registerFormData);
      const response = await users.registerUser(
        this.formFile,
        this.registerFormData
      );

      if (response) {
        this.$notify({
          title: "Registro Satisfactorio",
          type: "success",
        });
        this.$router.push({
          path: "/",
        });
      } else {
        this.$notify({
          title: "Ocurrio un error",
          type: "error",
        });
      }
    },
    changeFile(e) {
      this.formFile = e.target.files[0];
      console.log(this.formFile);
    },
    submitRegister(e) {
      e.preventDefault();
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("hola");
      } else {
        this.$notify({
          type: "warn",
          title: this.returnErrorMessage(this.v$.$errors[0].$validator),
        });
      }
    },
  },
};
</script>
<style>
::-webkit-scrollbar {
  display: none;
}
</style>
