<template>
  <div class="issue_card w-full p-8 bg-white rounded-lg shadow space-y-8">
    <div class="info_row grid grid-cols-3 w-full">
      <div class="info_first_name flex flex-col">
        <span class="font-bold text-lg">Paciente</span>
        <span class="">Jezer Gabriel Rázuri Pichén</span>
      </div>
      <div class="info_last_name flex flex-col">
        <span class="font-bold text-lg">Telefono</span>
        <span class="">976387055</span>
      </div>
      <div class="info_age flex flex-col">
        <span class="font-bold text-lg">Correo</span>
        <span class="">jezerrazuri@upeu.edu.pe</span>
      </div>
    </div>
    <div class="info_row grid grid-cols-2 w-full">
      <div class="info_first_name flex flex-col">
        <span class="font-bold text-lg">Psicólogo</span>
        <span class="">Sin Asignar</span>
      </div>
      <div class="info_last_name flex flex-col">
        <span class="font-bold text-lg">Grado Académico</span>
        <span class="">Sin Grado</span>
      </div>
    </div>
    <div class="info_row grid w-full">
      <div class="info_first_name flex items-center space-x-4">
        <span class="font-bold text-lg">Grado de la consulta:</span>
        <span class="bg-gray-500 py-1 px-4 rounded-lg">Sin Asignar</span>
      </div>
    </div>

    <button
      class="issues_action w-full font-bold text-lg rounded-lg text-white py-4"
      :class="derivationInfo.state ? 'btn-danger' : 'btn-primary'"
    >
      {{ derivationInfo.state ? "Cancelar" : "Derivar" }}
    </button>
  </div>
</template>

<script>
export default {
  props: ["derivationInfo"],
  data: () => ({}),
};
</script>

<style scoped>
.btn-danger {
  background-color: #fa5959;
}
.btn-primary {
  background-color: #6c63ff;
}
</style>
