<script setup>
import { RouterView } from 'vue-router'
import DynamicLogo from './components/extended/DynamicLogo.vue';
</script>

<template>
  <!-- <RouterView /> -->
  <div class="w-full h-screen grid">
      <DynamicLogo class="w-[300px] h-[300px] m-auto"/>
  </div>
</template>
