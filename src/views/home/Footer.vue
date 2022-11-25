<script setup>
import CopyInput from '../../components/base/CopyInput.vue';
import Button from '../../components/base/Button.vue';
import IconButton from '../../components/base/IconButton.vue';
import AnimatedLogo from '../../components/extended/AnimatedLogo.vue';
import RedirectLink from '../../components/base/RedirectLink.vue';
</script>

<template>
    <footer class="w-full h-screen bg-black flex flex-col items-center 
            justify-between text-center p-10">

        <div>
            <p class="font-medium text-xl text-white">
                "Creativity is intelligence having fun."
            </p>
            <p class="font-medium text-xl text-white my-2">
                - Albert Einstein -
            </p>
        </div>
        <div class="w-[90%] flex flex-row items-start gap-x-20">
            <div class="w-[30%]">
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
            <div class="w-[70%] flex flex-col items-start">
                <div class="inline-flex flex-row items-center mx-1 mb-5">
                    <img src="../../assets/icons/ic_diamond_red.svg" 
                        alt=""
                        class="h-5 w-5 mr-3">
                    <p class="inline text-primary text-2xl font-semibold">Contact me</p>
                </div>
                <div class="w-full inline-flex flex-row items-center justify-between">
                    <CopyInput class="w-full" text="kechaoui.haroune@gmail.com" />
                    <Button class="min-w-fit ml-6">
                        Send me an email
                    </Button>
                </div>
                <div class="inline-flex flex-row items-center gap-x-7 my-10">
                    <IconButton 
                        src="github"/>

                    <IconButton 
                        src="behance"/>

                    <IconButton 
                        src="twitter"/>

                    <IconButton 
                        src="instagram"/>

                    <IconButton 
                        src="Linkedin"/>
                </div>

                <div class="w-full inline-flex flex-row items-start gap-x-20 text-white">
                    <div class="inline-flex flex-col items-start">
                        <p class="font-semibold text-md">Emerald design</p>
                        
                        <RedirectLink 
                            name="Npm registry" 
                            href="https://google.com"/>

                        <RedirectLink 
                            name="Repository" 
                            href="https://google.com"/>
                    </div>

                    <div class="inline-flex flex-col items-start">
                        <p class="font-semibold text-md">Neowalls</p>
                        
                        <RedirectLink 
                            name="Community guidelines" 
                            href="https://google.com"/>

                        <RedirectLink 
                            name="Playstore link" 
                            href="https://google.com"/>
                    </div>

                    <div class="inline-flex flex-col items-start">
                        <p class="font-semibold text-md">Airsort</p>
                        
                        <RedirectLink 
                            name="Playstore link" 
                            href="https://google.com"/>

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