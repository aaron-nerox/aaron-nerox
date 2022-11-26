<script setup>
import { ref } from 'vue';
import AnimatedLogo from '@/components/extended/AnimatedLogo.vue';


const sectionHover = ref(false)
</script>


<template>
    <section id="about" class="w-full h-screen flex flex-row items-center 
        bg-dark bg-about bg-no-repeat bg-cover"
        @mouseenter="sectionHover = true">

        <div :class="['h-screen bg-primary transition-all select-none'
            , sectionHover? 'w-[15%]' : 'w-0 opacity-0']">
            <img src="@/assets/images/about_banner.svg" 
                alt=""
                class="w-full h-full object-contain">
        </div>

        <div :class="['h-screen transition-all grid items-center',
            'justify-center', sectionHover? 'w-[85%]' : 'w-full']">

            <div class="inline-flex flex-row items-center justify-between px-10">
                <div class="h-full w-[50%] text-center cursor-pointer">
                    <p class="text-primary font-bold text-4xl mb-10">Who am i?</p>

                    <p class="text-primary-light hover:text-primary font-semibold text-2xl 
                        transition-all my-7">
                        Software engineer, with experience in software design, architecture and development.
                    </p>

                    <p class="text-primary-light hover:text-primary font-semibold text-2xl 
                        transition-all my-7">
                        Worked as an IT consultant specialized in fullstack web apps building.
                    </p>

                    <p class="text-primary-light hover:text-primary font-semibold text-2xl 
                        transition-all my-7">
                        Native android apps developer & freelancer for 4 years now.
                    </p>

                    <p class="text-primary-light hover:text-primary font-semibold text-2xl 
                        transition-all my-7">
                        Part time front end developer & UI/UX designer.
                    </p>

                    <p class="text-primary-light hover:text-primary font-semibold text-2xl 
                        transition-all my-7">
                        IoT and hardware communication enthusiast.
                    </p>

                </div>

                <div class="w-[50%] grid">
                    <div class="w-[70%] m-auto grid">
                        <img src="@/assets/images/logo_bg.png" 
                            alt=""
                            class="w-full grid-overlap">
                        <div class="w-full inline-flex flex-col items-center grid-overlap">
                            <AnimatedLogo class="w-[80%]"/>
                            <img src="@/assets/images/main_logo_type.svg" 
                                alt=""
                                class="w-[60%]">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>