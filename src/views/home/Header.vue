<script setup>
import Button from '../../components/base/Button.vue';
import AnimatedLogo from '../../components/extended/AnimatedLogo.vue';

</script>

<template>
    <div class="w-full h-screen flex 
        flex-col md:flex-row items-center justify-center relative">
        <div class="hidden lg:block w-full h-screen absolute z-20 
            pointer-events-none bg-hero bg-contain"></div>
        <kinesis-container class="w-full md:w-[61%] h-screen bg-dark
            md:px-[7%] flex flex-col items-center justify-center">
            
            <div class="flex md:block flex-col items-center">
                <kinesis-element
                    :strength="5"
                    type="translate"
                    class="select-none hidden md:block">
                    <AnimatedLogo class="w-full md:w-[35%] mb-3 animate-pulse anim-once"/>
                    <img src="../../assets/images/main_logo_type.svg" 
                        alt=""
                        class="w-1/2">
                </kinesis-element>
                <div class="w-full flex md:hidden flex-col items-center">
                    <AnimatedLogo class="w-[70%] md:w-[35%] mb-3 animate-pulse anim-once"/>
                    <img src="../../assets/images/main_logo_type.svg" 
                        alt=""
                        class="w-[70%]">
                </div>

                <p class="w-[80%] md:w-[70%] text-center md:text-start text-primary-light font-medium text-xl my-7">
                    The mobile software engineer that you will not find anywhere else.
                </p>
                
                <a href="#about">
                    <Button class="text-xl">
                        Find out why
                    </Button>
                </a>
            </div>
        </kinesis-container>
        <img src="../../assets/images/self_image.jpg" 
            alt=""
            class="w-0 md:w-[39%] h-0 md:min-h-screen md:h-screen md:max-h-screen object-cover">
        
    </div>
</template>