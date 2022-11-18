<script setup>
import Button from '../../components/base/Button.vue';
import AnimatedLogo from '../../components/extended/AnimatedLogo.vue';

</script>

<template>
    <div class="w-full h-screen flex 
        flex-col md:flex-row items-center justify-center relative">
        <div class="hidden lg:block w-full h-screen absolute z-20 
            pointer-events-none bg-hero bg-contain"></div>
        <div class="w-full md:w-[61%] h-screen bg-dark
            md:px-[7%] flex flex-col items-center justify-center">
            
            <div class="flex md:block flex-col items-center">
                <div class="w-full flex md:hidden flex-col items-center">
                    <AnimatedLogo class="w-[70%] md:w-[35%] mb-3 animate-pulse anim-once"/>
                    <img src="../../assets/images/main_logo_type.svg" 
                        alt=""
                        class="w-[70%]">
                </div>

                <p class="w-[80%] md:w-[70%] text-center md:text-start text-primary-light 
                    font-medium text-xl md:text-4xl  md:leading-relaxed my-7">
                    The mobile software engineer that you will not find anywhere else.
                </p>
                
                <a href="#about">
                    <Button class="text-xl">
                        Find out why
                    </Button>
                </a>
            </div>
        </div>
        <kinesis-container class="w-0 md:w-[39%] md:max-w-[39%] overflow-hidden h-0 md:min-h-screen md:h-screen 
            md:max-h-screen grid">

            <img src="../../assets/images/self_image.jpg" 
                alt=""
                class="min-w-full h-full object-cover object-center grid-overlap">

            <div class="w-full h-screen grid grid-overlap">

                <kinesis-element
                    :strength="5"
                    type="translate"
                    class="w-[80%] m-auto select-none hidden md:block">
                    <img src="../../assets/images/main_logo_type.svg" 
                        alt=""
                        class="">
                </kinesis-element>
            </div>
        </kinesis-container>
        
    </div>
</template>