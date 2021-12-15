<template>
  <div class="register_wrapper w-full px-96">
    <div class="register_form__title py-8">
      <span class="text-white font-bold text-4xl">Registro</span>
    </div>
    <div class="register_form grid grid-cols-2 gap-4">
      <input
        v-model="registerFormData.username"
        placeholder="Nombre de usuario"
        type="text"
        class="
          register_input
          rounded-lg
          px-4
          py-2
          outline-none
          placeholder-gray-300
          text-white
        "
      />
      <input
        v-model="registerFormData.firstname"
        placeholder="Nombres"
        type="text"
        class="
          register_input
          rounded-lg
          px-4
          py-2
          outline-none
          placeholder-gray-300
          text-white
        "
      />
      <input
        v-model="registerFormData.password"
        placeholder="Contraseña"
        type="text"
        class="
          register_input
          rounded-lg
          px-4
          py-2
          outline-none
          placeholder-gray-300
          text-white
        "
      />
      <input
        v-model="registerFormData.lastname"
        placeholder="Apellidos"
        type="text"
        class="
          register_input
          rounded-lg
          px-4
          py-2
          outline-none
          placeholder-gray-300
          text-white
        "
      />
      <input
        v-model="registerFormData.dni"
        placeholder="DNI"
        type="text"
        class="
          register_input
          rounded-lg
          px-4
          py-2
          outline-none
          placeholder-gray-300
          text-white
        "
      />
      <input
        v-model="registerFormData.phone"
        placeholder="Número de teléfono"
        type="text"
        class="
          register_input
          rounded-lg
          px-4
          py-2
          outline-none
          placeholder-gray-300
          text-white
        "
      />
      <select
        placeholder="Selecciona un genero"
        v-model="registerFormData.gender"
        class="
          register_input
          rounded-lg
          px-4
          py-2
          outline-none
          placeholder-gray-300
          text-white
        "
      >
        <option selected value="" hidden>Seleccionar genero</option>

        <option value="M" class="bg-primary-dark">Masculino</option>
        <option value="F" class="bg-primary-dark">Femenino</option>
      </select>
      <input
        v-model="registerFormData.mail"
        placeholder="Correo electronico"
        type="text"
        class="
          register_input
          rounded-lg
          px-4
          py-2
          outline-none
          placeholder-gray-300
          text-white
        "
      />
      <select
        v-model="registerFormData.academicDegree"
        class="
          register_input
          rounded-lg
          px-4
          py-2
          outline-none
          placeholder-gray-300
          text-white
        "
      >
        <option selected value="" hidden>Seleccionar Grado Academico</option>
        <option
          :value="a"
          class="bg-primary-dark checked:bg-black"
          v-for="a in academicDegreeOptions"
          :key="a"
        >
          {{ a }}
        </option>
      </select>
      <input
        @change="changeFile($event)"
        placeholder="Carnet Universitario"
        type="file"
        class="
          register_input
          rounded-lg
          px-4
          py-2
          outline-none
          placeholder-gray-300
          text-white
        "
      />
    </div>
    <div class="register_action flex justify-center py-16">
      <button
        @click="uploadData"
        class="bg-secondary font-medium text-xl text-white w-80 py-3 rounded-lg"
      >
        Registrarse
      </button>
    </div>
  </div>
</template>
<script>
import users from "../api/users.api";
export default {
  data: () => ({
    academicDegreeOptions: ["3er Año", "4to Año", "5to Año", "Bachiller"],
    registerFormData: { gender: "", academicDegree: "" },
    formFile: "",
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
  },
};
</script>
<style>
.register_input {
  background-color: #6469ff;
}
</style>
