<script setup>
import Button from '@/components/base/Button.vue';
import mainLogoType from '@/assets/images/main_logo_type.svg'

</script>

<template>
    <div class="w-full h-screen grid">
        <img src="@/assets/images/header_background.png" 
            alt="header foreground"
            class="w-full h-screen grid-overlap pointer-events-none object-cover z-10">
        <kinesis-container class="w-full h-screen bg-dark flex flex-row items-center grid-overlap z-0">

            <div class="w-[65%] h-screen grid items-center justify-center  px-[10%]">
                <div>
                    <div class="w-4/5 mb-7">
                        <p class="font-bold text-5xl text-primary-light mb-5 leading-relaxed">
                            The mobile software engineer that you will not find anywhere else.
                        </p>

                        <p class="font-normal text-2xl text-primary-light">
                            I help individuals and companies build amazing apps for both web and android.
                        </p>
                    </div>

                    <a href="#about">
                        <Button class="text-xl">
                            Find out more
                        </Button>
                    </a>
                </div>
            </div>

            <div class="w-[35%] h-screen grid bg-black">
                <kinesis-element tag="img" :src="mainLogoType" :strength="7" type="translate"
                    class="w-[80%] grid-overlap m-auto z-10" />

                <img src="@/assets/images/self_image.jpg" alt="self image"
                    class="h-full w-full object-cover grid-overlap z-0">
            </div>

        </kinesis-container>
    </div>
</template>