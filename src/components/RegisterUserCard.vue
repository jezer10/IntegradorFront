<template>
  <div class="register_card rounded-lg bg-white shadow w-full border">
    <div class="registar_card_info p-8">
      <div class="info_name">
        <strong class="font-bold text-lg">Nombre: </strong>
        <span class="text-lg"
          >{{ userData.firstname }} {{ userData.lastname }}</span
        >
      </div>
      <div class="info_dni">
        <strong class="font-bold text-lg">DNI: </strong>
        <span class="text-lg">{{ userData.dni }}</span>
      </div>
      <div class="info_degree">
        <strong class="font-bold text-lg">Grado: </strong>
        <span class="text-lg">{{ userData.academicdegree }}</span>
      </div>
      <div class="info_phone">
        <strong class="font-bold text-lg">Teléfono: </strong>
        <span class="text-lg">{{ userData.phone }}</span>
      </div>
    </div>
    <div class="register_card_actions w-full rounded-b-lg">
      <button
        @click="acceptRegister(userData.idpersona)"
        class="w-1/2 bg-indigo-600 rounded-bl-lg text-white font-bold py-2"
      >
        Aceptar
      </button>

      <button
        @click="denegateRegister(userData.idpersona)"
        class="w-1/2 bg-red-600 rounded-br-lg text-white font-bold py-2"
      >
        Rechazar
      </button>
    </div>
  </div>
</template>

<script>
import users from "../api/users.api";
export default {
  props: ["userData"],
  methods: {
    async denegateRegister(val) {
      const response = await users.denegateUser(val);
      if (response) {
        this.$notify({
          type: "success",
          title: "Rechazo Satisfactorio",
        });
        this.$emit("updated");
        return
      }
      this.$notify({
        type: "error",
        title: "Ocurrio un error",
      });
    },
    async acceptRegister(val) {
      const response = await users.activateUser(val);
      if (response) {
        this.$notify({
          type: "success",
          title: "Registro Satisfactorio",
        });
        this.$emit("updated");

        return;
      }
      this.$notify({
        type: "error",
        title: "Ocurrio un error",
      });
    },
  },
};
</script>
