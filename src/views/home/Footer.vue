<script setup>
import CopyInput from '../../components/base/CopyInput.vue';
import Button from '../../components/base/Button.vue';
import IconButton from '../../components/base/IconButton.vue';
import AnimatedLogo from '../../components/extended/AnimatedLogo.vue';
import RedirectLink from '../../components/base/RedirectLink.vue';
import Link from '../../assets/icons/link.vue';

const redirect = (link)=>{
    window.open(link, "_blank")
}
</script>

<template>
    <footer class="w-full h-screen bg-black flex flex-col items-center 
            md:justify-between text-center p-3 md:p-10">

        <div>
            <p class="font-medium text-xl text-white">
                "Creativity is intelligence having fun."
            </p>
            <p class="font-medium text-xl text-white my-2">
                - Albert Einstein -
            </p>
        </div>

        <div class="w-[98%] md:w-[90%] flex flex-col md:flex-row items-center 
            md:items-start gap-y-5 md:gap-x-20">
            
            <div class="w-[70%] md:w-[30%]">
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

            <div class="w-[90%] md:w-[70%] flex flex-col items-center md:items-start">

                <div class="inline-flex flex-row items-center mx-1 mb-5">
                    <img src="../../assets/icons/ic_diamond_red.svg" 
                        alt=""
                        class="h-5 w-5 mr-3">
                    <p class="inline text-primary text-xl md:text-2xl font-semibold">Contact me</p>
                </div>

                <div class="w-full inline-flex flex-col md:flex-row 
                    items-center justify-between">
                    <CopyInput class="w-full" text="kechaoui.haroune@gmail.com" />
                    <Button class="min-w-fit mt-4 md:mt-0 md:ml-6 text-md"
                        @click="redirect('mailto:kechaoui.haroune@gmail.com')">
                        Send me an email
                    </Button>
                </div>

                <div class="inline-flex flex-row items-center gap-x-3 md:gap-x-7 my-7 md:my-10">
                    <IconButton 
                        src="github"
                        @click="redirect('https://github.com/TheX-ByAaron')"/>

                    <IconButton 
                        src="behance"
                        @click="redirect('https://www.behance.net/aaron_nerox')"/>

                    <IconButton 
                        src="twitter"
                        @click="redirect('https://twitter.com/aaron_nerox')"/>

                    <IconButton 
                        src="instagram"
                        @click="redirect('https://www.instagram.com/aaron.nerox')"/>

                    <IconButton 
                        src="Linkedin"
                        @click="redirect('https://www.linkedin.com/in/haroune-kechaoui-833137179')"/>
                </div>

                <div class="w-full hidden md:inline-flex flex-row items-start gap-x-20 text-white">
                    <div class="inline-flex flex-col items-start">
                        <p class="font-semibold text-md">Emerald design</p>
                        
                        <RedirectLink 
                            name="Npm registry" 
                            href="https://www.npmjs.com/package/emerald-react"/>

                        <RedirectLink 
                            name="Repository" 
                            href="https://github.com/TheX-ByAaron/Emerald-react-lib"/>
                    </div>

                    <div class="inline-flex flex-col items-start">
                        <p class="font-semibold text-md">Neowalls</p>
                        
                        <div class="inline-flex flex-row items-center min-w-fit 
                            fill-white text-white hover:fill-primary 
                            hover:text-primary cursor-pointer transition-all my-1"
                            @click="$router.push('/product/neowalls/guidelines')">
                            <Link class="w-4 h-4 mr-2"/>
                            <p class="min-w-fit">
                                Community guidelines
                            </p>
                        </div>

                        <RedirectLink 
                            name="Playstore link" 
                            href="https://play.google.com/store/apps/details?id=com.nero.starx.neowalls"/>
                    </div>

                    <div class="inline-flex flex-col items-start">
                        <p class="font-semibold text-md">Airsort</p>
                        
                        <RedirectLink 
                            name="Playstore link" 
                            href="https://play.google.com/store/apps/details?id=com.nero.starx.airsort"/>

                    </div>
                </div>
            </div>

        </div>

        <div class="w-full flex flex-col items-center">
            <div class="w-[90%] h-[2px] bg-primary my-4"></div>
            <p class="font-medium text-md text-white my-2">Forged by aaron from love 💜 and monochrome ☯ </p>
            <a href="https://v1.aaronx.studio" 
                class="font-normal text-sm text-white hover:text-primary my-2">
                Explore the older version.
            </a>
        </div>
    </footer>
</template>