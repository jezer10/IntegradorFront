<template>
  <div class="main_wrapper py-12 px-16 h-screen">
    <div><MainHeader /></div>
  </div>
</template>
<script>
import MainHeader from "@/components/MainHeader.vue";
export default {
  components: { MainHeader },
};
</script>
<style scoped>
.main_wrapper {
  background-color: #575ce5;
}
</style>
