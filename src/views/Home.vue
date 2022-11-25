<script setup>
import { ref, watchEffect } from 'vue';
import Button from '@/components/base/Button.vue';
import IconButton from '@/components/base/IconButton.vue';
import Skill from '@/components/base/Skill.vue';
import Header from './home/Header.vue'
import About from './home/About.vue';
import Skills from './home/Skills.vue';
import Projects from './home/Projects.vue';
import Footer from './home/Footer.vue';


</script>

<template>
    <Transition name="fade">
        <div class="w-full h-screen max-h-screen grid md:overflow-y-auto snap-y snap-mandatory">
            <Header class="snap-center"/>
            <About class="snap-center"/>
            <Skills class="snap-center"/>
            <Projects class="snap-center"/>
            <Footer class="snap-center"/>
        </div>
    </Transition>
</template>