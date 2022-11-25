<script setup>
import { ref } from 'vue';
import AnimatedLogo from '@/components/extended/AnimatedLogo.vue';
import Project from '../../components/base/Project.vue';

const sectionHover = ref(true)

const projects = ref([
    {
        name: 'Milky store backend',
        description: 'The backend developed for milky store mobile application.',
        stack: ['Kotlin', 'Ktor', 'PgSql'],
        github: '',
        link: ''
    },
    {
        name: 'Strawberry market',
        description: 'A first concept version of the mobile application "Milky store".',
        stack: ['Kotlin', 'Xml'],
        github: '',
        link: ''
    },
    {
        name: 'Emerald system',
        description: 'A full design system the bridges the gap between the mobile and the web.',
        stack: ['Adobe XD'],
        github: '',
        link: ''
    },
    {
        name: 'Emerald react',
        description: 'A component library made for react 17, based on the emerald design system.',
        stack: ['React', 'Tailwind', 'Storybook'],
        github: '',
        link: ''
    },
    {
        name: 'Emerald live',
        description: 'A live website that demonstrate the emerald design system components.',
        stack: ['Kotlin', 'Ktor', 'PgSql'],
        github: '',
        link: ''
    },
    {
        name: 'Aaron branding',
        description: 'The official branding of my own personal brand "Aaron nerox".',
        stack: ['Affinity designer'],
        github: '',
        link: ''
    },
    {
        name: 'CSE rebrand',
        description: 'A full rebranding of the visual identity of one of the oldest student clubs in algeria, CSE.',
        stack: ['Adobe illustrator'],
        github: '',
        link: ''
    },
    {
        name: 'The X dev brand',
        description: 'A full brand identity design for the dev brand named "The X".',
        stack: ['Affinity designer'],
        github: '',
        link: ''
    },
])
</script>

<template>
    <section id="about" class="w-full h-screen flex flex-row items-center">

        <div :class="['h-screen bg-primary transition-all select-none'
            , sectionHover? 'w-[15%]' : 'w-0 opacity-0']">
            <img src="@/assets/images/projects_banner.png" 
                alt=""
                class="w-full h-full object-contain">
        </div>

        <div :class="['h-screen transition-all flex items-center bg-dark',
            'justify-center', sectionHover? 'w-[85%]' : 'w-full']">

            <div class="w-[90%] h-fit cursor-pointer ml-[10%]">
                <p class="text-primary font-bold text-4xl mb-10">Projects i had fun building</p>

                <div class="w-fit h-fit overflow-x-auto grid grid-cols-5 p-3 gap-8">
                   
                        <Project 
                            v-for="project in projects"
                            :title="project.name"
                            :description="project.description"
                            :git="project.github"
                            :link="project.link"
                            :stack="project.stack" />
                </div>
            </div>

        </div>
    </section>
</template>