<template>
  <div class="app_wrapper">
    <router-view></router-view>
  </div>
</template>
<script></script>
<style>
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #C4C4C4;
  border-radius: 25px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #6A6A6A;
  border-radius: 25px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
