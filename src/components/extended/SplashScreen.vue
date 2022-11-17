<script setup>
import LottieAnimation from './LottieAnimation.vue';
import animation from '@/assets/animations/splash_animation.json'

</script>

<template>
    <div class="w-full h-screen bg-splash md:bg-none bg-cover bg-no-repeat bg-black grid relative overflow-hidden">
        <LottieAnimation 
            :animationData="animation"
            :isLooping="true"
            :autoPlay="true"
            class="w-full absolute rotate-90 md:rotate-0 hidden md:block bottom-0 z-20" />
        <img 
            src="../../assets/images/splash_background.png" 
            alt=""
            class="w-full h-screen rotate-90 md:rotate-0 hidden md:block absolute top-0 z-10">
        <img 
            src="../../assets/images/main_logo_mark.png" 
            alt=""
            class="w-[350px] h-[350px] m-auto z-30">
    </div>
</template>