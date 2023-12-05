<script setup>
import { watchEffect } from "vue";
import LottieAnimation from "../../components/extended/LottieAnimation.vue"
import infinityAnimation from "@/assets/animations/infinity_animation.json"
import { useRouter } from "vue-router"
import Button from '../../components/base/Button.vue'


let router = useRouter()

// watchEffect(() => {
//     setTimeout(() => {
//         router.replace('/home')
//     }, 3000)
// })
</script>


<template>
    <div class="w-full h-screen inline-flex items-center justify-center bg-light">
        <img src="@/assets/images/background_overlay_bottom_start.svg" alt="background element"
            class="md:w-1/4 w-1/2 absolute bottom-0 left-0" />
        <img src="@/assets/images/background_overlay_top_end.svg" alt="background element"
            class="md:w-1/4 w-1/2 absolute top-0 right-0" />
        <LottieAnimation :animationData="infinityAnimation" :isLooping="true" :autoPlay="true"
            class="md:w-[420px] w-[256px] h-[420px]" />
    </div>
</template>