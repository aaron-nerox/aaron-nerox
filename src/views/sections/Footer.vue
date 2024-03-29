<script setup>
import { computed } from 'vue'

import IconButton from '@/components/base/IconButton.vue'
import AnimatedLogo from '@/components/extended/AnimatedLogo.vue'
import RedirectLink from '@/components/base/RedirectLink.vue'
import bgOverlay from '@/assets/images/background_overlay_top_end.vue'
import elementBg from '@/assets/images/element_bg.vue'
import { useNetwork } from '../../stores/network'

const network = useNetwork()

const socialLinks = computed(() => network.socialLinks.links)
const footerLinks = computed(() => network.socialLinks.sections)

const redirect = (link)=>{
    window.open(link, "_blank")
}
</script>

<template>
    <footer 
        id="footer" 
        class="w-full h-[110vh] md:h-screen xl:h-[80vh] 2xl:h-fit bg-dark text-center relative inline-flex flex-col items-center justify-center" >
        
        <bgOverlay class="stroke-light md:w-1/5 w-1/2 h-fit absolute top-0 end-0"/>

        <elementBg class="absolute bottom-0 start-7 hidden md:block" />
        
        <div class="w-[70%] md:w-full my-1 md:my-6">
            <p class="font-medium text-xl text-light">
                "Creativity is intelligence having fun."
            </p>
            <p class="font-medium text-xl text-light mt-3">
                - Albert Einstein -
            </p>
        </div>

        <div class="w-full h-fit md:h-3/5 inline-flex flex-col md:flex-row items-center justify-center">

            <div class="w-3/5 md:w-1/4 2xl:w-1/5 my-10 md:my-0">
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

            <div class="w-20 2xl:w-40 hidden md:block"></div>

            <div class="w-full md:w-3/5 h-fit md:h-3/5 inline-flex flex-col items-center md:items-start justify-center gap-y-5 md:gap-y-7">

                <div class="w-[90%] md:w-full grid grid-cols-2 md:inline-flex md:flex-row md:items-start gap-x-5 md:gap-x-20 gap-y-5 md:gap-y-0 text-white">
                    <div 
                        v-for="footerSection in footerLinks"
                        class="inline-flex flex-col items-start">

                        <p class="font-medium md:font-semibold text-lg md:text-2xl mb-1 md:mb-3">{{ footerSection.title }}</p>
                        
                        <RedirectLink 
                            v-for="link in footerSection.links"
                            :name="link.name" 
                            :href="link.link"/>

                    </div>
                </div>

                <div class="inline-flex flex-row items-center gap-x-4 md:gap-x-7">
                    <IconButton 
                        v-for="social in socialLinks"
                        class="bg-diamond transition duration-200 hover:-translate-y-2 ease-in-out "
                        :src="social.icon"
                        @click="redirect(social.link)"
                    />
                </div>
            </div>
        </div>

        <p class="w-[90%] md:w-full font-medium text-md text-white mx-auto mt-5 md:mt-0">
            Forged by aaron from love &#10084;&#65039; and monochrome ☯ 
        </p>

        <div class="bg-primary h-[3px] w-[90%] mx-auto my-5"></div>

        <p class="w-fit font-medium text-md text-white mx-auto">
            Explore Older versions 
        </p>

        <div class="w-full h-fit inline-flex flex-row items-center justify-center">
            <a href="https://v1.aaronx.dev" 
                class="font-normal text-sm text-white hover:text-primary my-2">
                Version 1
            </a>
            <div class="w-2 h-2 bg-primary rounded-full mx-4"></div>
            <a href="https://v2.aaronx.dev" 
                class="font-normal text-sm text-white hover:text-primary my-2">
                Version 2
            </a>
        </div>
    </footer>
</template>