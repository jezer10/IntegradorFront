<template>
  <section class="h-full px-16 py-8">
    <div class="derivations_title h-1/10 flex items-center">
      <span class="font-bold text-2xl">Derivaciones</span>
    </div>
    <div class="derivations_container h-9/10 px-8 py-8 space-x-64 flex">
      <div class="derivations_issues_container w-1/2 h-full">
        <div class="issues_title flex justify-center h-1/10">
          <span class="font-bold text-2xl">Pendientes</span>
        </div>
        <div class="issues_list_container h-9/10 overflow-y-auto">
          <div class="issues_list_wrapper space-y-8">
            <DerivationsInfoCard
              v-for="d in derivationsIssues"
              :key="d.id"
              :derivationInfo="d"
            />
          </div>
        </div>
      </div>
      <div class="derivations_completed_container w-1/2 h-full">
        <div class="completed_title flex justify-center h-1/10">
          <span class="font-bold text-2xl">Derivados</span>
        </div>
        <div class="completed_list_container h-9/10 overflow-y-auto">
          <div class="completed_list_wrapper space-y-8">
            <DerivationsInfoCard
              v-for="d in derivationsCompleted"
              :key="d.id"
              :derivationInfo="d"
            />
          </div>
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
