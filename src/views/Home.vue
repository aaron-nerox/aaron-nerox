<script setup>
import { ref, watchEffect } from 'vue';
import Button from '@/components/base/Button.vue';
import IconButton from '@/components/base/IconButton.vue';
import Skill from '@/components/base/Skill.vue';
import SplashScreen from '@/components/extended/SplashScreen.vue';
import Header from './home/Header.vue'
import About from './home/About.vue';

const splashScreen = ref(true)

watchEffect(()=>{
    setTimeout(()=>{
        splashScreen.value = false
    }, 1800)
})
</script>

<template>
    <Transition name="fade">
        
        <SplashScreen v-if="splashScreen" />
        <div v-else class="w-full h-screen max-h-screen grid md:overflow-y-auto snap-y snap-mandatory">
            <Header class="snap-center"/>
            <About class="snap-center"/>
        </div>
        
    </Transition>
</template>