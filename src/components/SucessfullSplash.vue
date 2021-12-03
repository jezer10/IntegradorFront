<template>
  <div
    class="
      sucessfull_container
      w-full
      2xl:w-1/3
      flex flex-col
      items-center
      space-y-16
    "
  >
    <div
      class="
        check_container
        p-16
        rounded-lg
        flex flex-col
        items-center
        text-center
        space-y-2
      "
    >
      <img src="@/assets/images/check.png" alt="" class="w-32" />
      <span class="text-white font-bold text-2xl"
        >Se ha registrado tu consulta</span
      >
      <span class="text-white font-normal text-sm"
        >Espere a que se le asigne un psícologo, y si ya tiene uno ingrese con
        su codigo de atención</span
      >
    </div>
    <button
      class="
        sucessfull_button
        font-medium
        text-xl text-white
        rounded-lg
        py-3
        px-12
        shadow
      "
    >
      Ya tengo mi codigo
    </button>
  </div>
</template>
