<script setup>
import { ref, watchEffect } from 'vue';
import Button from '../components/base/Button.vue';
import Skill from '../components/base/Skill.vue';
import SplashScreen from '../components/extended/SplashScreen.vue';

const splashScreen = ref(true)

watchEffect(()=>{
    setTimeout(()=>{
        splashScreen.value = false
    }, 2800)
})
</script>

<template>
    <div class="w-full h-screen max-h-screen overflow-y-auto">
        <SplashScreen v-if="splashScreen" />
        <div v-else class="w-full h-screen bg-black grid">
            <Skill class="m-auto">
                Jetpack compose
            </Skill>
        </div>
    </div>
</template>