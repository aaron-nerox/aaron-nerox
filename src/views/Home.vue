<script setup>
import { ref, watchEffect } from 'vue';
import Button from '@/components/base/Button.vue';
import IconButton from '@/components/base/IconButton.vue';
import Skill from '@/components/base/Skill.vue';
import SplashScreen from '@/components/extended/SplashScreen.vue';
import Header from './home/Header.vue'

const splashScreen = ref(true)

watchEffect(()=>{
    setTimeout(()=>{
        splashScreen.value = false
    }, 1800)
})
</script>

<template>
    <div class="w-full h-screen max-h-screen overflow-y-auto">
        <!-- <SplashScreen v-if="splashScreen" /> -->
        <div class="w-full h-screen grid">
            <Header />
        </div>
    </div>
</template>