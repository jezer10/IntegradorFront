<template>
  <section class="h-full px-16 py-8">
    <div class="derivations_title h-1/10 flex items-center">
      <span class="font-bold text-2xl">Derivaciones</span>
    </div>
    <div class="derivations_container h-9/10 px-8 py-8 flex space-x-8">
      <div class="derivations_info_container w-8/12 h-full">
        <div
          class="
            info_card
            p-8
            w-full
            bg-white
            rounded-lg
            shadow
            h-8/10
            flex flex-col
            justify-between
          "
        >
          <div class="info_row grid grid-cols-3 w-full">
            <div class="info_first_name flex flex-col">
              <span class="font-bold text-lg">Nombres</span>
              <span class="">Jezer Gabriel</span>
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
          <div class="info_row grid grid-cols-3 w-full">
            <div class="info_first_name flex flex-col">
              <span class="font-bold text-lg">Telefono</span>
              <span class="">Jezer Gabriel Rázuri Pichén</span>
            </div>
            <div class="info_last_name flex flex-col">
              <span class="font-bold text-lg">Correo</span>
              <span class="">Rázuri Pichén</span>
            </div>
            <div class="info_age flex flex-col">
              <span class="font-bold text-lg">Ubicación</span>
              <span class="">33 Años</span>
            </div>
          </div>
          <div class="info_row w-full">
            <div class="info_first_name flex flex-col">
              <span class="font-bold text-lg">Motivo de la consulta</span>
              <span class="">Jezer Gabriel Rázuri Pichén</span>
            </div>
          </div>
          <div class="info_row grid grid-cols-3 w-full">
            <div class="info_first_name flex flex-col">
              <span class="font-bold text-lg">Preferencia de atencion</span>
              <span class="">Psicologo</span>
            </div>
          </div>
        </div>
        <div
          class="
            risk_option_container
            w-full
            h-2/10
            grid grid-cols-2
            items-center
            gap-16
          "
        >
          <select
            name=""
            id=""
            class="
              rounded
              shadow
              py-2
              px-4
              bg-green-400
              focus:outline-none
              text-white text-lg
            "
          >
            <option value="i.id" class="" v-for="i in inqEstado" :key="i.id">
              Leve
            </option>
          </select>
          <select
            name=""
            id=""
            class="rounded shadow py-2 px-4 focus:outline-none text-lg"
          >
            <option value="i.id" class="" v-for="i in inqDiagnosis" :key="i.id">
              {{ i.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="derivations_options_container w-4/12 h-full">
        <div
          class="
            derivation_options_card
            h-8/10
            w-full
            bg-white
            rounded-lg
            shadow
            p-8
          "
        >
          <router-view></router-view>
        </div>
        <div class="derivation_action h-2/10 flex items-center">
          <button
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
            disabled
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
export default {
  components: { DerivationsInfoCard, ConfirmModal },
  data: () => ({
    derivationsIssues: [1, 2, 3, 4, 5],
    derivationsCompleted: [{ state: "hola" }, { state: "hola" }],
    inqEstado: [
      { id: "1", name: "Leve" },
      { id: "2", name: "Moderado" },
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
