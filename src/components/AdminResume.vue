<template>
  <section class="h-full px-32 py-8">
    <div class="admin_daily_message flex flex-col h-1/10 justify-center">
      <span class="text-lg">Hola, Benjamin David</span>
      <span class="welcome_message font-bold text-lg">Bienvenido</span>
    </div>
    <div class="admin_contain flex h-9/10 py-8 space-x-32">
      <div class="register_petitions_card rounded-lg bg-white p-8 w-5/12">
        <div class="petitions_card_title h-1/10 text-xl font-medium">
          Petición de registro
        </div>
        <div class="card_content_list overflow-y-auto h-9/10 space-y-8">
          <div
            class="blank_banner flex justify-center items-center h-full"
            v-if="registerUsers.length == 0"
          >
            <span class="text-gray-500">No hay registros pendientes</span>
          </div>
          <RegisterUserCardVue
            v-on:updated="getPendientUsers"
            :key="r"
            v-for="r in registerUsers"
            :userData="r"
          />
        </div>
      </div>
      <div class="admin_options_container w-7/12 h-full">
        <div class="options_grid grid grid-cols-2 grid-rows-2 gap-4 h-full">
          <div
            class="option_card bg-white p-8 rounded-lg flex flex-col"
            @click="inqListRoute"
          >
            <div
              class="
                option_card__img_container
                h-9/10
                flex
                justify-center
                items-center
              "
            >
              <img src="@/assets/images/inq.png" alt="" class="h-5/6" />
            </div>
            <div class="option_card__title h-1/10">
              <span class="font-bold text-lg">Consultas</span>
            </div>
          </div>
          <div class="option_card bg-white p-8 rounded-lg flex flex-col" @click="psyListRoute">
            <div
              class="
                option_card__img_container
                h-9/10
                flex
                justify-center
                items-center
              "
            >
              <img src="@/assets/images/psy.png" alt="" class="h-5/6" />
            </div>
            <div class="option_card__title h-1/10">
              <span class="font-bold text-lg">Psicologos</span>
            </div>
          </div>
          <div
            class="option_card bg-white p-8 rounded-lg flex flex-col"
            @click="derivationsRoute"
          >
            <div
              class="
                option_card__img_container
                h-9/10
                flex
                justify-center
                items-center
              "
            >
              <img src="@/assets/images/derivations.png" alt="" class="h-5/6" />
            </div>
            <div class="option_card__title h-1/10">
              <span class="font-bold text-lg">Derivaciones</span>
            </div>
          </div>
          <div
            class="
              half_option_container
              h-full
              gap-4
              grid grid-cols-1 grid-rows-2
            "
          >
            <div class="option_card bg-white p-8 rounded-lg flex items-end">
              <div class="option_card__title w-1/2">
                <span class="font-bold text-lg">Reportes</span>
              </div>
              <div
                class="
                  option_card__img_container
                  w-1/2
                  h-full
                  flex
                  justify-center
                  items-center
                "
              >
                <img src="@/assets/images/reports.png" alt="" class="h-full" />
              </div>
            </div>
            <div class="option_card bg-white p-8 rounded-lg flex items-end">
              <div class="option_card__title w-1/2">
                <span class="font-bold text-lg">Soporte</span>
              </div>
              <div
                class="
                  option_card__img_container
                  w-1/2
                  h-full
                  flex
                  justify-center
                  items-center
                "
              >
                <img src="@/assets/images/support.png" alt="" class="h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RegisterUserCardVue from "./RegisterUserCard.vue";
import users from "../api/users.api.js";
export default {
  components: { RegisterUserCardVue },
  data: () => ({
    registerUsers: [],
    options: [1, 2, 3, 4],
  }),
  async mounted() {
    this.getPendientUsers();
    console.log(this.registerUsers);
  },
  methods: {
    async getPendientUsers() {
      this.registerUsers = await users.getPendientUsers();
    },
    derivationsRoute() {
      this.$router.push({
        name: "derivationslist",
      });
    },
    psyListRoute() {
      this.$router.push({
        name: "psylist",
      });
    },
    inqListRoute() {
      this.$router.push({
        name: "inqlist",
      });
    },
  },
};
</script>
<style scoped>
.welcome_message {
  color: #4447a5;
}

::-webkit-scrollbar {
  display: none;
}
</style>
