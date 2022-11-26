<script setup>
import { ref } from 'vue';
import AnimatedLogo from '@/components/extended/AnimatedLogo.vue';


const sectionHover = ref(false)
</script>


<template>
    <section id="about" class="w-full min-h-screen flex flex-row items-center 
        bg-dark bg-about bg-no-repeat bg-cover"
        @mouseenter="sectionHover = true">

        <div :class="['h-screen hidden md:block bg-primary transition-all select-none'
            , sectionHover? 'w-[15%]' : 'w-0 opacity-0']">
            <img src="@/assets/images/about_banner.svg" 
                alt=""
                class="w-full h-full object-contain">
        </div>

        <div :class="['min-h-fit transition-all grid items-center',
            'justify-center', sectionHover? 'w-full md:w-[85%]' : 'w-full']">

            <div class="h-full md:h-[90%] inline-flex flex-col-reverse md:flex-row 
                items-center justify-center md:justify-between px-5 md:px-10">

                <div class="h-fit w-[95%] md:w-[58%] text-center cursor-pointer">
                    <p class="text-primary font-bold text-3xl md:text-4xl mb-5 md:mb-10">Who am i?</p>

                    <p class="text-primary-light hover:text-primary font-semibold text-xl md:text-2xl 
                        transition-all my-4 md:my-7">
                        Software engineer, with experience in software design, architecture and development.
                    </p>

                    <p class="text-primary-light hover:text-primary font-semibold text-xl md:text-2xl 
                        transition-all my-4 md:my-7">
                        Worked as an IT consultant specialized in fullstack web apps building.
                    </p>

                    <p class="text-primary-light hover:text-primary font-semibold text-xl md:text-2xl 
                        transition-all my-4 md:my-7">
                        Native android apps developer & freelancer for 4 years now.
                    </p>

                    <p class="text-primary-light hover:text-primary font-semibold text-xl md:text-2xl 
                        transition-all my-4 md:my-7">
                        Part time front end developer & UI/UX designer.
                    </p>

                    <p class="text-primary-light hover:text-primary font-semibold text-xl md:text-2xl 
                        transition-all my-4 md:my-7">
                        IoT and hardware communication enthusiast.
                    </p>

                </div>

                <div class="w-[230px] md:w-[40%] h-[230px] md:h-[80%] grid mb-2 md:mb-0">
                    <div class="w-[90%] m-auto grid">
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