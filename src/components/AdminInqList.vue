<template>
  <section class="h-full py-2 px-4 sm:px-16 sm:py-8">
    <InqInfoModal
      v-show="isActiveModel"
      v-on:hide="isActiveModel = false"
      :inquiryInfo="currentInq"
    />
    <div class="inqlist_title sm:h-1/10 flex items-center">
      <span class="font-bold text-2xl">Consultas</span>
    </div>
    <div class="inqlist_container py-2 sm:h-9/10 sm:py-8">
      <div class="inqList_wrapper overflow-y-auto sm:h-full space-y-2 ">
        <div
          class="
            inq_card
            bg-white
            p-4
            sm:w-full
            shadow
            rounded-lg
            inline-block
            sm:flex
            justify-between
            items-center
          "
          v-for="(i, j) in inqList"
          :key="i"
        >
          <div class="inq_card_info flex flex-col sm:w-11/12">
            <span class="text-primary font-bold text-lg"
              >Atencion {{ j + 1 }}
            </span>
            <div class="info_row flex  sm:grid sm:grid-cols-12 text-center">
              <span class="sm:col-span-3">{{i.patientfullname}}</span>
              <span class="sm:col-span-1">{{i.age}} años</span>
              <span class="sm:col-span-1">{{i.location}}</span>
              <span class="sm:col-span-2">{{i.phone}}</span>
              <span class="sm:col-span-3">{{i.mail}}</span>
              <span class="sm:col-span-2">{{i.atentionpreference=="F" ?'Psicologa':'Psicologo'}}</span>
            </div>
          </div>
          <div
            class="
              inq_card_options
              flex
              items-center
              justify-between
              text-white
              sm:w-1/12
            "
          >
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
import atentions from "@/api/atentions.api.js";

export default {
  components: { EyeIcon, TrashIcon, InqInfoModal },
  methods: {
    showModal(inq) {
      this.currentInq = inq;
      this.isActiveModel = true;
    },
    async getinquiries() {
      const response = await atentions.getAtentions();
      console.log(response);
      this.inqList = response;
    },
  },
  mounted() {
    this.getinquiries();
  },

  data: () => ({
    inqList: [
      { name: "stay at home" },
      { name: "stay at house" },
      { name: "stay at meudeus" },
    ],
    isActiveModel: false,
    currentInq: { name: "stay at home" },
  }),
};
</script>

<style scoped>
.inq_details_action {
  background-color: #6c63ff;
}
</style>
