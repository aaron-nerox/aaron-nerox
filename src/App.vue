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

.anim-once{
  animation-iteration-count: 1 !important;
}
</style>
