<template>
  <AtentionEndModal/>
  <section class="h-full px-16 py-4">
    <section class="h-full grid grid-cols-2 gap-4">
      <section class="h-full grid grid-rows-2 gap-2">
        <div class="grid grid-rows-2 gap-2">
          <div
            class="white rounded-lg shadow bg-primary flex px-28 items-center"
          >
            <span class="font-bold text-xl text-white"
              >Bienvenido a tu panel de control</span
            >
            <img
              src="@/assets/images/patient_welcome.png"
              alt=""
              class="h-3/6"
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
          <div class="sessions_container px-8 py-4 space-y-4">
            <div
              v-for="(s, i) in sessions"
              @click="selectedSession = i"
              :key="s.idsesion"
              class="session_item flex justify-center space-x-4 rounded-lg p-2"
              :class="
                selectedSession == i
                  ? 'bg-primary'
                  : 'bg-gray-100 hover:bg-gray-200'
              "
            >
              <span class="font-medium text-sm">{{ `Sesion ${i + 1}` }}</span>
              <span class="font-light text-sm">{{ s.dateString }}</span>
            </div>
          </div>
        </div>
      </section>
      <section class="h-full grid grid-rows-2 grid-cols-2 gap-4">
        <div class="white rounded-lg shadow bg-white"></div>
        <div class="white rounded-lg shadow bg-white"></div>
        <div class="white rounded-lg shadow bg-white"></div>
        <div class="white rounded-lg shadow bg-white"></div>
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
</style>