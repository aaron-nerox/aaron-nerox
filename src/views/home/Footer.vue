<script setup>
import { reactive } from 'vue'
import CopyInput from '@/components/base/CopyInput.vue'
import Button from '@/components/base/Button.vue'
import IconButton from '@/components/base/IconButton.vue'
import AnimatedLogo from '@/components/extended/AnimatedLogo.vue'
import RedirectLink from '@/components/base/RedirectLink.vue'
import Link from '@/assets/icons/link.vue'
import bgOverlay from '@/assets/images/background_overlay_top_end.vue'
import elementBg from '@/assets/images/element_bg.vue'


const socialLinks = reactive({
    links : [
        {
            icon : "github",
            link: "https://github.com/aaron-nerox"
        },
        {
            icon : "behance",
            link: "https://www.behance.net/aaron_nerox"
        },
        {
            icon : "Linkedin",
            link: "https://www.linkedin.com/in/haroune-kechaoui-833137179"
        },
        {
            icon : "instagram",
            link: "https://www.instagram.com/aaron.nerox"
        },
        {
            icon : "twitter",
            link: "https://twitter.com/aaron_nerox"
        }
    ]
})

const footerLinks = reactive({
    sections : [
        {
            title : "Emerald design",
            links : [
                {
                    name : "Npm Registry",
                    link : "https://www.npmjs.com/package/emerald-react"
                },
                {
                    name : "Repository",
                    link : "https://github.com/aaron-nerox/Emerald-react-lib"
                }
            ] 
        },
        {
            title : "NeoWalls",
            links : [
                {
                    name : "Community Guidelines",
                    link : "https://aaronx.dev/product/neowalls/guidelines"
                },
                {
                    name : "Playstore link",
                    link : "https://play.google.com/store/apps/details?id=com.nero.starx.neowalls"
                },
            ] 
        },
        {
            title : "AirSort",
            links : [
                {
                    name : "Playstore link",
                    link : "https://play.google.com/store/apps/details?id=com.nero.starx.airsort"
                }
            ] 
        }
    ]
})

const redirect = (link)=>{
    window.open(link, "_blank")
}
</script>

<template>
    <footer 
        id="footer" 
        class="w-full md:h-[80vh] bg-dark text-center relative" >
        
        <bgOverlay class="stroke-light md:w-1/5 w-1/2 h-fit absolute top-0 end-0"/>

        <elementBg class="absolute bottom-0 start-7" />
        
        <div class="my-6">
            <p class="font-medium text-xl text-light">
                "Creativity is intelligence having fun."
            </p>
            <p class="font-medium text-xl text-light mt-3">
                - Albert Einstein -
            </p>
        </div>

        <div class="w-full h-3/5 inline-flex items-center justify-center">

            <div class="w-1/4">
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

            <div class="w-20"></div>

            <div class="w-3/5 h-3/5 inline-flex flex-col items-start justify-center gap-y-7">

                <div class="w-full inline-flex flex-col md:flex-row items-start gap-y-5 md:gap-y-0 md:gap-x-20 text-white">
                    <div 
                        v-for="footerSection in footerLinks.sections"
                        class="inline-flex flex-col items-start">

                        <p class="font-semibold text-2xl mb-3">{{ footerSection.title }}</p>
                        
                        <RedirectLink 
                            v-for="link in footerSection.links"
                            :name="link.name" 
                            :href="link.link"/>

                    </div>
                </div>

                <div class="inline-flex flex-row items-center gap-x-3 md:gap-x-7">
                    <IconButton 
                        v-for="social in socialLinks.links"
                        class="bg-diamond-red transition duration-200 hover:-translate-y-2 ease-in-out "
                        :src="social.icon"
                        @click="redirect(social.link)"
                    />
                </div>
            </div>
        </div>

        <p class="w-fit font-medium text-md text-white mx-[5%] md:mx-auto">
            Forged by aaron from love &#10084;&#65039; and monochrome ☯ 
        </p>

        <div class="bg-primary h-[3px] w-[90%] mx-auto my-5"></div>

        <p class="w-fit font-medium text-md text-white mx-[5%] md:mx-auto">
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