<script setup>
import { ref, watchEffect } from 'vue';
import SplashScreen from '../components/extended/SplashScreen.vue';

const splashScreen = ref(true)

watchEffect(()=>{
    setTimeout(()=>{
        splashScreen.value = false
    }, 2800)
})
</script>

<template>
    <div class="w-full max-h-screen overflow-y-auto">
        <SplashScreen v-if="splashScreen" />
        <div v-else>
            home
        </div>
    </div>
</template>