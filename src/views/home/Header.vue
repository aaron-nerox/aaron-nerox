<script setup>
import Button from '@/components/base/Button.vue';
import AnimatedLogo from '@/components/extended/AnimatedLogo.vue';
import mainLogoType from '@/assets/images/main_logo_type.svg'

</script>

<template>
    <div class="w-full h-screen grid">

        <img src="@/assets/images/header_background.png" 
            alt="header foreground"
            class="w-full h-screen hidden md:block grid-overlap pointer-events-none object-cover z-10">

        <kinesis-container class="w-full h-screen bg-splash md:bg-none bg-no-repeat bg-cover
            bg-dark flex flex-row items-center grid-overlap z-0">

            <div class="w-full md:w-[65%] h-screen grid items-center justify-center  px-5 md:px-[10%]">
                <div class="flex md:block flex-col items-center text-center md:text-start">
                    <div class="w-[80%] mx-auto mb-7 grid md:hidden">
                        <img src="@/assets/images/logo_bg.png" 
                            alt="portfolio logo type"
                            class="w-full grid-overlap">
                        <div class="w-full inline-flex flex-col items-center grid-overlap">
                            <AnimatedLogo class="w-[80%]"/>
                            <img src="@/assets/images/main_logo_type.svg" 
                                alt="logo type"
                                class="w-[60%]">
                        </div>
                    </div>
                    <div class="w-full md:w-4/5 mb-7">
                        <p class="font-bold text-3xl md:text-4xl text-primary-light mb-5 leading-relaxed">
                            The mobile software engineer that you will not find anywhere else.
                        </p>

                        <p class="font-normal text-lg md:text-xl text-primary-light">
                            I help individuals and companies build amazing apps for both web and android.
                        </p>
                    </div>

                    <a href="#about">
                        <Button class="text-lg md:text-xl">
                            Find out more
                        </Button>
                    </a>
                </div>
            </div>

            <div class="w-[35%] h-screen hidden md:grid bg-black">
                <kinesis-element tag="img" :src="mainLogoType" :strength="7" type="translate"
                    class="w-[80%] grid-overlap m-auto z-10" />

                <img src="@/assets/images/self_image.jpg" 
                    alt="haroune kechaoui image"
                    class="h-screen w-full object-cover grid-overlap z-0">
            </div>

        </kinesis-container>
    </div>
</template>