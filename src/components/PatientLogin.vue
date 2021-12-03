<template>
  <div class="patient_container w-full flex">
    <div class="login_slider_container w-1/2">
    
    </div>
    <div class="login_form_container w-1/2 flex justify-center">
      <div
        class="
          code_form
          flex flex-col
          justify-center
          items-center
          text-white
          space-y-24
        "
      >
        <div class="top_container px-8 flex flex-col items-center space-y-4">
          <span class="font-bold">Ingrese su código de atención</span>
          <div class="code_input_group space-x-2">
            <input
              type="text"
              class="cipt w-12 h-12 px-2 text-center rounded font-bold"
              maxlength="1"
            />
            <input
              type="text"
              class="cipt w-12 h-12 px-2 text-center rounded font-bold"
              maxlength="1"
            />
            <input
              type="text"
              class="cipt w-12 h-12 px-2 text-center rounded font-bold"
              maxlength="1"
            />
            <input
              type="text"
              class="cipt w-12 h-12 px-2 text-center rounded font-bold"
              maxlength="1"
            />
            <input
              type="text"
              class="cipt w-12 h-12 px-2 text-center rounded font-bold"
              maxlength="1"
            />
            <input
              type="text"
              class="cipt w-12 h-12 px-2 text-center rounded font-bold"
              maxlength="1"
            />
          </div>
        </div>
        <div class="submit_container  w-full">
          <button class="btn w-full rounded shadow py-3 font-medium text-xl">
            Ingresar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.cipt {
  outline: none;
  background-color: #6469ff;
}
.btn {
  background-color: #ed8b52;
}
</style>
