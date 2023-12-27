<script setup>
import Button from '@/components/base/Button.vue'
import BottomStartOverlay from '@/assets/images/background_overlay_bottom_start.vue'
import TopEnd from '@/assets/images/background_overlay_top_end.vue'
</script>

<template>
    <div class="w-full h-screen flex flex-col items-center justify-center 
        bg-light text-dark text-center relative">

        <BottomStartOverlay class="md:w-1/4 w-1/2 h-fit absolute bottom-0 left-0" />

        <TopEnd class="md:w-1/4 w-1/2 h-fit absolute top-0 right-0" />

        <img 
            src="@/assets/icons/svg/chromanion.svg" 
            alt="portfolio not found illustration"
            class="w-[65%] md:w-[20%]">

        <p class="text-3xl md:text-4xl font-bold my-6">404 Page not found</p>
        <p class="w-full md:w-1/3 px-10 md:px-0 md:text-xl text-lg font-medium">The page you're looking for was not found, please verify if the link is correct adn try again later.</p>
        <Button 
        class="my-6"
            :isLightMode="false"
            icon="arrow_right"
            iconTint="fill-none stroke-light"
            @click="$router.replace('/')">
            Explore portfolio
        </Button>

    </div>
</template>