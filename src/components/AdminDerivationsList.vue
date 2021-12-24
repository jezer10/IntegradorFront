<template>
  <section class="h-full px-4 sm:px-16 sm:py-8">
    <div class="derivations_title sm:h-1/10 flex items-center">
      <span class="font-bold text-2xl">Derivaciones</span>
    </div>
    <div
      class="
        derivations_container
        sm:h-9/10
        sm:p-8
        sm:space-x-4
        2xl:space-x-64
        flex  flex-col sm:flex-row
      "
    >
      <div class="derivations_issues_container w-full sm:w-1/2 h-full">
        <div class="issues_title flex justify-center h-1/10">
          <span class="font-bold text-2xl">Pendientes</span>
        </div>
        <div class="issues_list_container h-9/10 overflow-y-auto">
          <div class="issues_list_wrapper space-y-8 h-full">
            <div
              class="blank_banner flex justify-center items-center h-full"
              v-if="derivationsIssues.length == 0"
            >
              <span class="text-gray-500">No hay Derivaciones</span>
            </div>
            <DerivationsInfoCard
              v-for="d in derivationsIssues"
              :key="d.id"
              :derivationInfo="d"
              :derivationAction="true"
            />
          </div>
        </div>
      </div>
      <div class="derivations_completed_container w-full sm:w-1/2 h-full">
        <div class="completed_title flex justify-center h-1/10">
          <span class="font-bold text-2xl">Derivados</span>
        </div>
        <div class="completed_list_container h-9/10 overflow-y-auto">
          <div class="completed_list_wrapper space-y-8 h-full">
            <div
              class="blank_banner flex justify-center items-center h-full"
              v-if="derivationsCompleted.length == 0"
            >
              <span class="text-gray-500">No hay Derivaciones</span>
            </div>
            <DerivationsInfoCard
              v-on:derivationChanged="getAtentions"
              :derivationAction="false"
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
import atentions from "../api/atentions.api";
import DerivationsInfoCard from "./DerivationsInfoCard.vue";
export default {
  components: { DerivationsInfoCard },
  data: () => ({
    derivationsIssues: [],
    derivationsCompleted: [],
  }),

  async mounted() {
    this.getAtentions();
  },
  methods: {
    async getAtentions() {
      this.getPendientAtentions();
      this.getDerivedAtentions();
    },
    async getPendientAtentions() {
      const response = await atentions.getPendientAtentions();
      this.derivationsIssues = response;
    },
    async getDerivedAtentions() {
      const response = await atentions.getDerivedAtentions();
      this.derivationsCompleted = response;
    },
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
