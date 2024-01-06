<script setup>
/** vue imports */
import { watchEffect } from "vue"
import { useRouter } from "vue-router"

/** component imports */
import LottieAnimation from "@/components/extended/LottieAnimation.vue"
import infinityAnimation from "@/assets/animations/infinity_animation.json"

/** assets imports */
import BottomStartOverlay from '@/assets/images/background_overlay_bottom_start.vue'
import TopEnd from '@/assets/images/background_overlay_top_end.vue'

let router = useRouter()

watchEffect(() => {
    setTimeout(() => {
        router.replace('/home')
    }, 3000)
})
</script>


<template>
    <div class="w-full h-screen inline-flex items-center justify-center bg-light relative">

        <BottomStartOverlay class="md:w-1/4 w-1/2 h-fit absolute bottom-0 left-0" />

        <TopEnd class="md:w-1/4 w-1/2 h-fit absolute top-0 right-0" />

        <LottieAnimation :animationData="infinityAnimation" :isLooping="true" :autoPlay="true"
            class="md:w-[420px] w-[256px] h-[420px]" />

    </div>
</template>