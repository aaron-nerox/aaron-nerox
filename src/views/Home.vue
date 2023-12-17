<script setup>
import { ref } from 'vue'
import IconButton from '@/components/base/IconButton.vue'
import Header from './home/Header.vue'
import About from './home/About.vue'
import Skills from './home/Skills.vue'
import Projects from './home/Projects.vue'
import Footer from './home/Footer.vue'
import FeaturedProject from './home/FeaturedProject.vue'
import Menu from '@/components/navigation/Menu.vue'


const isMenuOpen = ref(false);

const updateMenu = ()=>{
    isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
    <Transition name="fade">
        <div class="w-full h-screen max-h-screen grid 
            md:overflow-y-auto">
            <Teleport to="body">
                <Menu 
                    :open="isMenuOpen"
                    @dissmiss="updateMenu"/>
            </Teleport>
            <IconButton 
                v-if="!isMenuOpen"
                src="menu" 
                class="bg-diamond-light fixed top-5 right-5 z-40"
                    @click="updateMenu"/>
            <IconButton 
                v-else
                src="close" 
                class="bg-diamond-light fixed top-5 right-5 z-40"
                    @click="updateMenu"/>

            <Header class="md:snap-center select-none"/>
            <About class="md:snap-center"/>
            <Skills class="md:snap-center"/>
            <!-- <FeaturedProject 
                direction="start" 
                banner="neowalls_logo"
                mode="download"
                :features="[
                    'Neowalls is the social media platform that is made for the lovers of personalization.',
                    'This app ships with features that make it the perfect wallpaper application for any user.',
                    'You can browse, favorite, save and download wallpapers.'
                ]"
                :stack="['Kotlin', 'Jetpack compose', 'Firebase', 'Xml', 'Android studio']"
                :srcset="['img1','img2','img3','img4','img5','img6','img7'
                ]"
                parentSrc="neowalls"
                link="https://play.google.com/store/apps/details?id=com.nero.starx.neowalls"
                class="snap-center"/>
            <FeaturedProject 
                direction="end" 
                banner="airsort_logo"
                mode="download"
                :features="[
                    'Bored of your current gallery? Airsort is the app for you.',
                    'This app is optimized to help users sort and clean their gallery.',
                    'This app also contains a secure folder, isn\'t that cool.'
                ]"
                :stack="['Kotlin', 'Java', 'Xml', 'Storage API', 'Android studio']"
                :srcset="[
                    'img1',
                    'img2',
                    'img3',
                    'img4',
                    'img5',
                ]"
                parentSrc="airsort"
                link="https://play.google.com/store/apps/details?id=com.nero.starx.airsort"
                class="snap-center"/>
            <FeaturedProject 
                direction="start" 
                banner="milky_store_logo"
                mode="repo"
                :features="[
                    'Milky is a mobile store application for selling different flavors of milk.',
                    'The main aspect of this app, is it\'s clean design compared to lots of known store applications.'
                ]"
                :stack="['Kotlin', 'Xml', 'MDC library', 'Android studio']"
                :srcset="[
                    'img1',
                    'img2',
                    'img3',
                    'img4',
                    'img5',
                ]"
                parentSrc="milky"
                link="https://github.com/TheX-ByAaron/milky-store"
                class="snap-center"/>
            <FeaturedProject 
                direction="end" 
                banner="artplace_logo"
                mode="repo"
                :features="[
                    'This app was a real blast, as it was a concept app for a decentralized social media.',
                    'The idea is to have a social media run by people instead of an entity, but with restrictions from the community itself.',
                ]"
                :stack="['Kotlin', 'Jetpack compose', 'Android studio']"
                :srcset="[
                    'img1',
                    'img2',
                    'img3',
                    'img4',
                ]"
                parentSrc="artplace"
                link="https://github.com/TheX-ByAaron/ArtPlace-mobile"
                class="snap-center"/> -->
            <Projects class="snap-center"/>
            <Footer class="snap-center"/>
        </div>
    </Transition>
</template>