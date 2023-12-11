<script setup>
import Button from '@/components/base/Button.vue';
</script>

<template>
    <div class="w-full h-screen flex flex-col items-center justify-center 
        bg-light text-dark text-center ">

        <img src="@/assets/images/background_overlay_bottom_start.svg" alt="background element"
            class="md:w-1/4 w-1/2 absolute bottom-0 left-0" />

        <img src="@/assets/images/background_overlay_top_end.svg" alt="background element"
            class="md:w-1/4 w-1/2 absolute top-0 right-0" />

        <img 
            src="@/assets/icons/chromanion.svg" 
            alt="portfolio not found illustration"
            class="w-[70%] md:w-[20%]">

        <p class="text-4xl font-bold my-6">404 Page not found</p>
        <p class="md:w-1/3 px-10 md:px-0 text-xl font-medium">The page you're looking for was not found, please verify if the link is correct adn try again later.</p>
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