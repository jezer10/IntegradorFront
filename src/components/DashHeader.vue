<template>
  <header class="dash_header p-8 flex justify-between">
    <div class="header_logo">
      <img src="@/assets/images/oilogo.png" alt="" class="w-32" />
    </div>
    <div class="header_options flex space-x-8">
      <div class="text-white flex space-x-8">
        <button class="w-8 hover:bg-gray-900 rounded-full p-1">
          <MailIcon />
        </button>
        <button class="w-8 hover:bg-gray-900 rounded-full p-1">
          <BellIcon />
        </button>
      </div>
      <SwitchGroup>
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
      </SwitchGroup>
    </div>
  </header>
</template>

<script>
import { MailIcon, BellIcon, StarIcon, UserIcon } from "@heroicons/vue/solid";
import { Switch, SwitchLabel, SwitchGroup } from "@headlessui/vue";
export default {
  components: {
    Switch,
    MailIcon,
    BellIcon,
    StarIcon,
    SwitchLabel,
    SwitchGroup,
  },
  data: () => ({
    enabled: false,
  }),
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
