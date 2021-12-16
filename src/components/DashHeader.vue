<template>
  <header class="dash_header flex justify-between items-center px-8 h-1/10">
    <div class="header_logo">
      <button
        class="active:bg-primary-dark rounded-full px-4 py-2"
        @click="routeMainDash"
      >
        <img src="@/assets/images/logo_oido_amigo.png" alt="" class="w-24" />
      </button>
    </div>
    <div class="header_options flex space-x-8">
      <div class="text-white flex space-x-8">
        <button class="w-8 hover:bg-gray-900 rounded-full p-1">
          <MailIcon />
        </button>
        <button class="w-8 hover:bg-gray-900 rounded-full p-1">
          <BellIcon />
        </button>
        <button class="w-8 hover:bg-gray-900 rounded-full p-1" @click="Logout">
          <LogoutIcon />
        </button>
      </div>

      <!-- <SwitchGroup>
        <div class="invisible_switch flex items-center">
          <SwitchLabel class="mr-4 text-white text-sm font-semibold"
            >Modo Invisible</SwitchLabel
          >
          <Switch
            v-model="enabled"
            :class="enabled ? 'bg-white' : 'bg-white'"
            class="relative inline-flex items-center h-6 rounded-full w-11"
          >
            <span class="sr-only">Enable notifications</span>
            <span
              :class="enabled ? 'translate-x-6' : 'translate-x-1'"
              class="
                switch_span
                inline-block
                w-4
                h-4
                transform
                bg-white
                rounded-full
              "
            />
          </Switch>
        </div>
      </SwitchGroup> -->
    </div>
  </header>
</template>

<script>
import {
  MailIcon,
  BellIcon,
  StarIcon,
  UserIcon,
  LogoutIcon,
} from "@heroicons/vue/solid";
import { Switch, SwitchLabel, SwitchGroup } from "@headlessui/vue";
export default {
  components: {
    Switch,
    MailIcon,
    BellIcon,
    StarIcon,
    SwitchLabel,
    SwitchGroup,
    LogoutIcon,
  },
  data: () => ({
    enabled: false,
  }),
  methods: {
    routeMainDash() {
      this.$router.push({
        name: "dashboard",
      });
    },
    Logout() {
      this.$router.push({
        name: "specialistlogin",
      });
    },
  },
};
</script>
<style scoped>
.dash_header {
  background-color: #575ce5;
}

.switch_span {
  background-color: #575ce5;
}
</style>
