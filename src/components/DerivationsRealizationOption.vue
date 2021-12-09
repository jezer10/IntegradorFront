<template>
  <div class="h-full w-full grid grid-cols-1 gap-8">
    <div class="option_psy_card p-8 w-full rounded-lg shadow flex">
      <div class="card_title_container w-1/2 h-full flex items-end">
        <span class="text-2xl font-medium">Psicologos</span>
      </div>
      <div class="card_img_container w-1/2 h-full"></div>
    </div>
    <div class="option_expert_card p-8 w-full rounded-lg shadow">
      <div class="card_title_container w-1/2 h-full flex items-end">
        <span class="text-2xl font-medium">Especialistas</span>
      </div>
      <div class="card_img_container w-1/2 h-full"></div>
    </div>
  </div>
</template>

<style scoped>
.option_psy_card {
  background-color: #6c63ff;
  color: white;
}
.option_expert_card {
  background-color: white;
  color: #6c63ff;
}
</style>
