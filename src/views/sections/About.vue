<script setup>
import { computed } from 'vue'

import AnimatedLogo from "@/components/extended/AnimatedLogo.vue"
import Button from "@/components/base/Button.vue"
import TextBox from "@/components/base/TextBox.vue"
import TopRight from '@/assets/images/background_overlay_top_end.vue'
import { useNetwork } from '@/stores/network'
import { useRouter } from 'vue-router'

const network = useNetwork()
const router = useRouter()


const profileInfo = computed(() => network.displayDescription)

const goToSkills = () => {
    router.push({ path : '/skills'})
}

</script>


<template>
    <section id="about" class="w-full h-screen bg-light relative">
        <TopRight class="w-1/2 md:w-1/5 h-fit absolute top-0 right-0" />

        <div class="w-full h-full inline-flex flex-col md:flex-row items-center md:items-start">
            <div class="h-full w-[30%] 2xl:w-[33%] hidden md:grid items-center">
                <img 
                src="@/assets/images/self_image.jpg" 
                alt="" 
                class="w-full h-full object-cover grid-overlap flex-shrink-0" />

                <div class="w-4/5 grid-overlap m-auto">
                    <div class="w-[90%] grid">
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

            <div class="h-full w-full md:w-2/3 px-10 md:px-[5%] inline-flex flex-col items-center md:items-start justify-center">
                <TextBox
                    class="w-[200px] md:w-[250px] !h-[55px] md:!h-[64px] text-xl md:text-3xl font-semibold md:font-bold">
                    About Me
                </TextBox>
                

                <div class="w-full h-fit inline-flex flex-col items-start justify-center my-6">
                    <TextBox
                        v-for="fact in profileInfo.profileFacts"
                        alignment="start"
                        class="w-full md:w-[90%] 2xl:w-[45%] min-h-[72px] text-sm md:text-lg font-regular my-3">
                        {{ fact }}
                    </TextBox>
                </div>
                

                <Button class="w-fit" :isLightMode="false" @click="goToSkills">
                    My Technical Skills
                </Button>
            </div>
        </div>
    </section>
</template>