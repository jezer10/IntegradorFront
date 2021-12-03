<template>
  <section class="h-full px-16 py-8">
    <div class="derivations_title h-1/10 flex items-center">
      <span class="font-bold text-2xl">Derivaciones</span>
    </div>
    <div class="derivations_container h-9/10 px-8 py-8 flex space-x-8">
      <div class="derivations_info_container w-8/12 h-full">
        <div class="info_card p-8 w-full bg-white rounded-lg shadow h-8/10">
          <div class="info_row grid grid-cols-3 w-full">
            <div class="info_first_name flex flex-col">
              <span class="font-bold text-lg">Nombres</span>
              <span class="">Jezer Gabriel Rázuri Pichén</span>
            </div>
            <div class="info_last_name flex flex-col">
              <span class="font-bold text-lg">Apellidos</span>
              <span class="">Rázuri Pichén</span>
            </div>
            <div class="info_age flex flex-col">
              <span class="font-bold text-lg">Edad</span>
              <span class="">33 Años</span>
            </div>
          </div>
        </div>
        <div class="risk_option_container w-full h-2/10 flex items-center">
            <span class="text-lg w-1/2">Califique el riesgo de consulta: </span>
            <select name="" id="" class="w-1/2 rounded shadow py-2 px-4 bg-green-400 focus:outline-none text-white text-lg">
                <option value="" class="">Leve</option>
            </select>
        </div>
      </div>
      <div class="derivations_options_container w-4/12 h-full">
        <div class="derivation_options_card h-8/10 p-8 w-full bg-white rounded-lg shadow">
            
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import DerivationsInfoCard from "./DerivationsInfoCard.vue";
export default {
  components: { DerivationsInfoCard },
  data: () => ({
    derivationsIssues: [1, 2, 3, 4, 5],
    derivationsCompleted: [{ state: "hola" }, { state: "hola" }],
  }),
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
