<template>
  <div class="login_wrapper flex justify-center items-center h-full px-4 sm:px-0">
    <div class="login_container w-full sm:w-80 flex flex-col items-center">
      <div class="login_logo my-8 2xl:my-16 px-8">
        <img src="@/assets/images/logo_oido_amigo.png" alt="" srcset="" />
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

        <div class="form_actions text-white space-y-4 sm:py-8 2xl:py-16">
          <button
            class="login_button rounded-lg w-full py-2 text-lg font-medium"
            @click="logIn"
          >
            Iniciar Sesion
          </button>
          <button
          @click="routerToRegister"
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
  },
  methods:{
    logIn(){
      this.$router.push({
        name:"dashboard"
      })
    },
    routerToRegister(){
      this.$router.push({
        name:"specialistregister"
      })
    }
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
