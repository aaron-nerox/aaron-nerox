<script setup>
import LottieAnimation from './LottieAnimation.vue';
import animation from '@/assets/animations/splash_animation.json'
import foreground from '@/assets/images/splash_foreground.png'
import { IntersectingCirclesSpinner } from 'epic-spinners'
</script>

<template>
    <kinesis-container class="w-full h-screen bg-splash md:bg-none bg-cover 
        bg-no-repeat bg-dark grid relative overflow-hidden">
        
        <LottieAnimation 
            :animationData="animation"
            :isLooping="true"
            :autoPlay="true"
            class="w-full absolute rotate-90 md:rotate-0 hidden md:block bottom-0 z-20" />

        <img 
            src="../../assets/images/splash_background.png" 
            alt=""
            class="w-full h-screen rotate-90 md:rotate-0 hidden md:block absolute top-0 z-10">
            
        <IntersectingCirclesSpinner
            :animation-duration="1200"
            :size="120"
            color="#F75656"
            class=" m-auto z-30"
        />

        <kinesis-element 
            tag="img"
            :src="foreground"
            :strength="7"
            type="translate"
            class="w-full h-screen hidden md:block absolute top-0 z-10" />
        
    </kinesis-container>
</template>