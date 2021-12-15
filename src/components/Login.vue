<template>
  <div class="login_wrapper flex justify-center items-center h-full">
    <div class="login_container w-80 flex flex-col items-center">
      <div class="login_logo my-16 px-8">
        <img src="@/assets/images/oilogo.png" alt="" srcset="" />
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

        <div class="pass_options flex justify-between">
          <div class="remindme_checkbox space-x-2 flex items-center">
            <input
              type="checkbox"
              name=""
              id=""
              class="
                rounded
                outline-none
                appearance-none
                cursor-pointer
                w-4
                h-4
                bg-white
                checked:bg-red-600
              "
            />
            <label class="text-white text-sm">Recordarme</label>
          </div>
          <div class="pass_recuperation">
            <a class="text-white text-sm">¿Olvidaste la contraseña?</a>
          </div>
        </div>

        <div class="form_actions text-white space-y-4 py-16">
          <button
            class="login_button rounded-lg w-full py-2 text-lg font-medium"
          >
            Iniciar Sesion
          </button>
          <button
            class="register_button rounded-lg w-full py-2 text-lg font-medium"
          >
            Registrarse
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { UserIcon, LockClosedIcon } from "@heroicons/vue/solid";
export default {
  data: () => ({}),
  components: {
    UserIcon,
    LockClosedIcon,
  },
  mounted(){
    this.$emit("headerUpdate",false)
  }
};
</script>

<style scoped>
.user_input,
.pass_input {
  background-color: #6469ff;
}

.login_button {
  background-color: #ed8b52;
}
.register_button {
  background-color: #4447a5;
}
</style>
