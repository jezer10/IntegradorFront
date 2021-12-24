<template>
  <AtentionEndModal v-if="endedSession" />
  <section
    class="
      h-full
      px-4
      py-4
      sm:px-16 sm:py-4
      2xl:px-32 2xl:py-16
      overflow-y-auto
    "
  >
    <section class="sm:h-full grid grid-cols-1 sm:grid-cols-2 gap-4">
      <section class="sm:h-full grid grid-rows-2 gap-4">
        <div class="grid grid-cols-1 sm:grid-rows-2 gap-4">
          <div
            class="
              white
              rounded-lg
              shadow
              bg-primary
              flex
              px-4
              sm:px-28
              items-center
            "
          >
            <span class="font-bold text-xl text-white"
              >Bienvenido a tu panel de control</span
            >
            <img
              src="@/assets/images/patient_welcome.png"
              alt=""
              class="h-2/6 sm:h-3/6"
            />
          </div>
          <div class="white rounded-lg shadow bg-white p-4">
            <div
              class="
                blank__container
                h-full
                w-full
                flex
                justify-center
                items-center
              "
              v-if="selectedSession === -1"
            >
              <span class="text-sm text-gray-500">Seleccione una reunion</span>
            </div>
            <div class="card_container flex" v-if="selectedSession !== -1">
              <div class="platform_info flex flex-col w-1/2">
                <span class="font-medium text-lg">Plataforma</span>
                <span>Zoom</span>
              </div>
              <div class="platform_action w-1/2 flex items-center">
                <button
                  class="
                    platform_button
                    text-white
                    rounded-lg
                    shadow
                    font-medium
                    py-2
                    w-full
                  "
                >
                  Entrar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="white rounded-lg shadow bg-white p-4">
          <span class="font-medium text-lg">Fecha de las sesiones</span>
          <div class="sessions_container sm:px-8 py-4 space-y-4">
            <div
              v-for="(s, i) in sessions"
              @click="selectedSession = i"
              :key="s.idsesion"
              class="
                session_item
                flex
                justify-center
                space-x-4
                rounded-lg
                p-2
                text-sm
                2xl:text-xl
              "
              :class="
                selectedSession == i
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              "
            >
              <span class="font-medium">{{ `Sesion ${i + 1}` }}</span>
              <span class="font-light">{{ s.dateString }}</span>
            </div>
          </div>
        </div>
      </section>
      <section
        class="sm:h-full grid grid-cols-1 sm:grid-rows-2 sm:grid-cols-2 gap-4"
      >
        <div class="white rounded-lg shadow bg-white"></div>
        <div class="white rounded-lg shadow bg-secondary p-8 text-white">
          <div class="card_title">
            <span class="font-bold text-lg ">Consejos</span>
          </div>
        </div>
        <div class="white rounded-lg shadow bg-white"></div>
        <div class="rpsp_container white rounded-lg shadow p-8 text-white">
          <div class="card_title">
            <span class="font-bold text-lg ">Reavivados por su palabra</span>
          </div>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
import AtentionEndModal from "@/components/AtentionEndModal.vue";
export default {
  components: { AtentionEndModal },
  data: () => ({
    selectedSession: -1,
    endedSession: false,
    sessions: [
      {
        idsesion: "1",
        dateString: "01/11/2021 15:00 - 15:40",
      },
      {
        idsesion: "1",
        dateString: "01/11/2021 15:00 - 15:40",
      },
      {
        idsesion: "1",
        dateString: "01/11/2021 15:00 - 15:40",
      },
    ],
  }),
};
</script>

<style scoped>
.platform_button {
  background-color: #63b4ff;
}
.rpsp_container {
  background-color: #6398ff;
}
</style>
