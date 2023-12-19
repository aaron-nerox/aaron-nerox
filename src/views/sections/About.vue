<script setup>
import { reactive } from 'vue'

import AnimatedLogo from "@/components/extended/AnimatedLogo.vue"
import Button from "@/components/base/Button.vue"
import TextBox from "../../components/base/TextBox.vue"
import TopRight from '@/assets/images/background_overlay_top_end.vue'


const profileInfo = reactive({
    profileFacts : [
        "Software engineer, with experience in software design, architecture and development.",
        "Native android apps developer & freelancer for 5 years now and counting.",
        "Worked as an IT consultant specialized in building Fullstack web apps.",
        "IoT and hardware communication enthusiast."
    ]
})

</script>


<template>
    <section id="about" class="w-full h-screen bg-light relative">
        <TopRight class="w-1/5 h-fit absolute top-0 right-0" />

        <div class="w-full h-full inline-flex flex-row items-center">
            <div class="h-full w-1/3 grid grid-cols-1 grid-rows-1 items-center justify-items-center">
                <img 
                src="@/assets/images/self_image.svg" 
                alt="" 
                class="w-full h-full object-cover pos-1" />

                <div class="w-4/5 pos-1">
                    <div class="w-[90%] m-auto grid">
                        <img src="@/assets/images/logo_bg.png" 
                            alt=""
                            class="w-full grid-overlap">

                        <div class="w-full inline-flex flex-col items-center grid-overlap">
                            <AnimatedLogo class="w-[80%]"/>
                            <img src="@/assets/images/main_logo_type.svg" 
                                alt="main portfolio logo"
                                class="w-[60%]">
                        </div>
                    </div>
                </div>
            </div>

            <div class="h-full w-2/3 px-[5%] py-10 inline-flex flex-col items-start justify-evenly">
                <div class="w-full mb-5">
                    <TextBox
                        class="w-[250px] !h-[64px] text-3xl font-bold">
                        About Me
                    </TextBox>
                </div>

                <div class="w-full h-fit inline-flex flex-col items-start justify-center">
                    <TextBox
                        v-for="fact in profileInfo.profileFacts"
                        alignment="start"
                        class="w-[85%] min-h-[72px] text-lg font-regular my-5">
                        {{ fact }}
                    </TextBox>
                </div>
                

                <Button class="w-fit" :isLightMode="false" @click="">
                    My Technical Skills
                </Button>
            </div>
        </div>
    </section>
</template>