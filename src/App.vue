<template>
  <notifications position="bottom right" :max="1" :ignoreDuplicates="true"/>

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
  background: #c4c4c4;
  border-radius: 25px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #6a6a6a;
  border-radius: 25px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
