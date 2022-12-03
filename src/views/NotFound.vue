<script setup>
import Button from '@/components/base/Button.vue';
</script>

<template>
    <div class="w-full h-screen flex flex-col items-center justify-center 
        bg-dark text-primary-light bg-splash md:bg-not-found bg-no-repeat bg-cover 
        bg-center text-center ">

        <img 
            src="@/assets/images/chromanion.svg" 
            alt="portfolio not found illustration"
            class="w-[70%] md:w-[25%] mb-5">

        <p class="text-3xl font-bold mb-4">404 Page not found</p>
        <p class=" px-10 md:px-0 text-xl font-medium mb-4">The page you're looking for is not found</p>
        <Button class="text-xl"
            @click="$router.replace('/')">
            Go home
        </Button>

    </div>
</template>


<style>

.bg-error{
    background-image: url('../assets/images/not_found_bg.png');
}
</style>