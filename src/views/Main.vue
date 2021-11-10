<template>
  <div class="main_wrapper py-12 px-16 h-screen">
    <div class="login_wrapper flex justify-center items-center h-full">
      <div class="login_container w-80 flex flex-col items-center">
        <div class="login_logo my-8">
          <Logo class="w-full" />
        </div>
        <div class="login_form space-y-4 w-full">
          <div class="user_form_control flex items-center relative w-full">
            <input
              class="
                text-lg
                user_input
                outline-none
                placeholder-white
                px-4
                py-2
                rounded-lg
                w-full
                pr-12
                text-white
              "
              type="text"
              placeholder="Usuario"
            />
            <UserIcon class="mr-3 w-6 text-white absolute right-0" />
          </div>
          <div class="pass_form_control flex items-center relative w-full">
            <input
              class="
                text-lg
                pass_input
                outline-none
                placeholder-white
                px-4
                py-2
                rounded-lg
                w-full
                pr-12
                text-white
              "
              type="text"
              placeholder="Contraseña"
            />
            <LockClosedIcon class="mr-3 w-6 text-white absolute right-0" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from "@/assets/images/logo.svg";

import { UserIcon, LockClosedIcon } from "@heroicons/vue/solid";
export default {
  data: () => ({}),
  components: {
    UserIcon,
    LockClosedIcon,
    Logo,
  },
};
</script>
<style scoped>
.main_wrapper {
  background-color: #575ce5;
}
.user_input,
.pass_input {
  background-color: #6469ff;
}
</style>
