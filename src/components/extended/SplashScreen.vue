<script setup>
import LottieAnimation from './LottieAnimation.vue';
import animation from '@/assets/animations/splash_animation.json'

</script>

<template>
    <div class="w-full h-screen bg-black grid relative overflow-hidden">
        <LottieAnimation 
            :animationData="animation"
            :isLooping="true"
            :autoPlay="true"
            class="w-full absolute bottom-0 z-20" />
        <img 
            src="../../assets/images/splash_background.png" 
            alt=""
            class="w-full h-screen absolute top-0 z-10">
        <img 
            src="../../assets/images/main_logo_mark.png" 
            alt=""
            class="w-[350px] h-[350px] m-auto z-30">
    </div>
</template>