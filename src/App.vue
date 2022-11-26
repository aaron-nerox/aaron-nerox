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

<style scoped>
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
</style>
