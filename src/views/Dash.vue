<template>
  <div class="dash_wrapper h-screen">
    <DashHeader />
    <div class="dash_content h-9/10">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import DashHeader from "@/components/DashHeader.vue";
export default {
  components: { DashHeader },
};
</script>

<style scoped>
.dash_wrapper {
  background-color: #f4f7ff;
}
</style>
