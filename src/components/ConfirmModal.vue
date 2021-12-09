<template>
  <div
    class="
      modal_container
      h-screen
      w-screen
      flex
      justify-center
      items-center
      fixed
      top-0
      left-0
    "
  >
    <div class="modal_card bg-white rounded-lg p-8 shadow w-1/4 space-y-12">
      <div class="card_body space-y-4">
        <div class="card_title font-bold text-2xl">Cancelar Derivación</div>
        <div class="card_description text-lg">
          ¿Seguro que quieres cancelar derivación?
        </div>
      </div>
      <div class="card_actions w-full grid gap-8 grid-cols-2">
        <button
          class="disallow_button rounded-lg text-white font-bold text-lg  py-2"

        >
          No
        </button>
        <button
          class="allow_button rounded-lg text-white font-bold text-lg  py-2"
        >
          Si
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal_container {
  background-color: rgba(0, 0, 0, 0.43);
}

.allow_button {
  background-color: #6c63ff;
}
.disallow_button {
  background-color: #e45a5a;
}
</style>
