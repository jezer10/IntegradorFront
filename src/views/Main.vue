<template>
  <div class="main_wrapper py-12 px-16 h-screen">
    <MainHeader />
    <div class="main_content flex justify-center items-center h-9/10">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import MainHeader from "@/components/MainHeader.vue"

export default {
  components: { MainHeader },
};
</script>
<style scoped>
.main_wrapper {
  background-color: #575ce5;
}
.check_container {
  background-color: #6469ff;
}
.sucessfull_button {
  background-color: #ed8b52;
}
</style>
