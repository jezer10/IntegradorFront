<template>
  <section class="h-full px-16 py-8">
    <InqInfoModal
      v-show="isActiveModel"
      v-on:hide="isActiveModel = false"
      :inquiryInfo="currentInq"
    />
    <div class="inqlist_title h-1/10 flex items-center">
      <span class="font-bold text-2xl">Consultas</span>
    </div>
    <div class="inqlist_container h-9/10 px-16 py-8">
      <div class="inqList_wrapper overflow-y-auto h-full space-y-2">
        <div
          class="
            inq_card
            bg-white
            p-8
            w-full
            shadow
            rounded-lg
            flex
            justify-between
            items-center
            h-1/4
          "
          v-for="i in inqList"
          :key="i"
        >
          <div class="inq_card_info"></div>
          <div class="inq_card_options space-x-4 text-white">
            <button
              @click="showModal(i)"
              class="inq_details_action w-8 h-8 rounded-full p-2 bg-red-600"
            >
              <EyeIcon />
            </button>
            <button class="w-8 h-8 rounded-full p-2 bg-red-600">
              <TrashIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { EyeIcon, TrashIcon } from "@heroicons/vue/solid";
import InqInfoModal from "./InqInfoModal.vue";

export default {
  components: { EyeIcon, TrashIcon, InqInfoModal },
  methods: {
    showModal(inq) {
      this.currentInq = inq;
      this.isActiveModel = true;
    },
  },

  data: () => ({
    inqList: [
      { name: "stay at home" },
      { name: "stay at house" },
      { name: "stay at meudeus" },
    ],
    isActiveModel: true,
    currentInq: { name: "stay at home" },
  }),
};
</script>

<style scoped>
.inq_details_action {
  background-color: #6c63ff;
}
</style>
