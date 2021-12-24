<template>
  <div
    class="
      modal_container
      h-screen
      w-screen
      flex
      justify-center
      items-center
      fixed
      top-0
      left-0
      px-4
      sm:px-0
    "
  >
    <div class="modal_card bg-white rounded-lg p-8 shadow  w-full sm:w-1/2 space-y-8 sm:space-y-0">
      <div class="card_info sm:space-y-4">
        <div class="info_row grid grid-cols-1 sm:grid-cols-3 w-full">
          <div class="info_first_name flex flex-col">
            <span class="font-bold text-lg">Nombres</span>
            <span class="">{{ inquiryInfo.fullname }}</span>
          </div>
          <div class="info_last_name flex flex-col">
            <span class="font-bold text-lg">Apellidos</span>
            <span class="">Rázuri Pichén</span>
          </div>
          <div class="info_age flex flex-col">
            <span class="font-bold text-lg">Edad</span>
            <span class="">{{ inquiryInfo.age }}</span>
          </div>
        </div>
        <div class="info_row grid grid-cols-1 sm:grid-cols-3 w-full">
          <div class="info_phone flex flex-col">
            <span class="font-bold text-lg">Teléfono</span>
            <span class="">{{ inquiryInfo.phone }}</span>
          </div>
          <div class="info_mail flex flex-col">
            <span class="font-bold text-lg">Correo Electronico</span>
            <span class="">{{ inquiryInfo.mail }}</span>
          </div>
          <div class="info_location flex flex-col">
            <span class="font-bold text-lg">Ubicación</span>
            <span class="">{{ inquiryInfo.location }}</span>
          </div>
        </div>
        <div class="info_row grid grid-cols-1 sm:grid-cols-3 w-full">
          <div class="info_mail flex flex-col col-span-3">
            <span class="font-bold text-lg">Motivo de la consulta</span>
            <span class="">{{ inquiryInfo.atentiondescription }}</span>
          </div>
        </div>
        <div class="info_row grid grid-cols-3 w-full">
          <div class="info_mail flex flex-col col-span-3">
            <span class="font-bold text-lg">Preferencia de atención</span>
            <span class="">{{
              inquiryInfo.atentionpreference == "F" ? "Psicologa" : "Psicologo"
            }}</span>
          </div>
        </div>
      </div>
      <div class="card_actions w-full flex justify-center sm:justify-end">
        <button
          @click="hideModal"
          class="back_button rounded-lg text-white font-bold text-lg px-16 py-2"
        >
          Volver
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["inquiryInfo"],
  methods: {
    hideModal() {
      this.$emit("hide");
    },
  },
};
</script>
<style scoped>
.modal_container {
  background-color: rgba(0, 0, 0, 0.43);
}

.back_button {
  background-color: #6c63ff;
}
</style>
