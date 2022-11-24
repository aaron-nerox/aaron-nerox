<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition name="fade">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style>
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

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.anim-once{
  animation-iteration-count: 1 !important;
}

* {
  scroll-behavior: smooth;
}

/* Additional self made tailwind rules */
.grid-overlap{
    grid-row : 1;
    grid-column: 1;
}
</style>
