<template>
  <section class="h-full px-32 py-8">
    <div class="admin_daily_message flex flex-col h-1/10 justify-center">
      <span class="text-lg">Hola, Benjamin David</span>
      <span class="welcome_message font-bold text-lg">Bienvenido</span>
    </div>
    <div class="admin_contain flex h-9/10 py-8 space-x-32">
      <div class="register_petitions_card rounded-lg bg-white p-8 w-5/12">
        <div class="card_content_list overflow-y-auto h-full space-y-8 pr-8">
          <RegisterUserCardVue :key="r" v-for="r in registerUsers" />
        </div>
      </div>
      <div class="admin_options_container w-7/12 h-full">
        <div class="options_grid grid grid-cols-2 gap-4 h-full">
          <div
            class="option_card bg-white p-8 rounded-lg flex flex-col"
            v-for="o in options"
            :key="o"
          >
            <div class="option_card__img_container h-9/10 flex justify-center items-center">
              <img src="@/assets/images/check.png" alt="" class="h-full" />
            </div>
            <div class="option_card__title h-1/10">
              <span class="font-bold text-lg">Consultas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RegisterUserCardVue from "./RegisterUserCard.vue";

export default {
  components: { RegisterUserCardVue },
  data: () => ({
    registerUsers: [1, 2, 3, 4, 5],
    options: [1, 2, 3, 4],
  }),
};
</script>
<style scoped>
.welcome_message {
  color: #4447a5;
}
</style>
