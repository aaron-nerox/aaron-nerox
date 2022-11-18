<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
@keyframes slidup {
  from {
    transform: translateY(-40);
    opacity: 0.6;
  }
  to{
    transform: translateY(0);
    opacity: 1;
  }
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #0F0202;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #F75656;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #E82B2B;
}

.anim-once{
  animation-iteration-count: 1 !important;
}

* {
  scroll-behavior: smooth;
}
</style>
