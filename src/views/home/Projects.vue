<script setup>
import { ref } from 'vue';
import AnimatedLogo from '@/components/extended/AnimatedLogo.vue';
import Project from '../../components/base/Project.vue';

const sectionHover = ref(false)

const projects = ref([
    {
        name: 'Milky store backend',
        description: 'The backend developed for milky store mobile application.',
        stack: ['Kotlin', 'Ktor', 'PgSql'],
        github: 'https://github.com/TheX-ByAaron/MilkyStoreBackend',
        link: ''
    },
    {
        name: 'Strawberry market',
        description: 'A first concept version of the mobile application "Milky store".',
        stack: ['Kotlin', 'Xml'],
        github: 'https://github.com/TheX-ByAaron/TheStrawberryMarket',
        link: ''
    },
    {
        name: 'Emerald system',
        description: 'A full design system the bridges the gap between the mobile and the web.',
        stack: ['Adobe XD'],
        github: '',
        link: 'https://www.behance.net/gallery/135931393/Emerald-design-system'
    },
    {
        name: 'Emerald react',
        description: 'A component library made for react 17, based on the emerald design system.',
        stack: ['React', 'Tailwind', 'Storybook'],
        github: 'https://github.com/TheX-ByAaron/Emerald-react-lib',
        link: 'https://www.npmjs.com/package/emerald-react'
    },
    {
        name: 'Emerald live',
        description: 'A live website that demonstrate the emerald design system components.',
        stack: ['Vuejs'],
        github: 'https://github.com/TheX-ByAaron/Emerald_live',
        link: ''
    },
    {
        name: 'Aaron branding',
        description: 'The official branding of my own personal brand "Aaron nerox".',
        stack: ['Affinity designer'],
        github: '',
        link: 'https://www.behance.net/gallery/133566979/Aaron-nerox-personal-brand-identity'
    },
    {
        name: 'CSE rebrand',
        description: 'A full rebranding of the visual identity of one of the oldest student clubs in algeria, CSE.',
        stack: ['Adobe illustrator'],
        github: '',
        link: 'https://www.behance.net/gallery/133863929/CSE-Brand-identity-refresh'
    },
    {
        name: 'The X dev brand',
        description: 'A full brand identity design for the dev brand named "The X".',
        stack: ['Affinity designer'],
        github: '',
        link: 'https://www.behance.net/gallery/133711717/The-X-Developer-studio-brand-design'
    },
])
</script>

<template>
    <section id="about" class="w-full md:h-screen flex flex-row items-center"
        @mouseenter="sectionHover = true">

        <div :class="['h-screen hidden md:block bg-primary transition-all select-none'
            , sectionHover? 'w-[15%]' : 'w-0 opacity-0']">
            <img src="@/assets/images/projects_banner.png" 
                alt=""
                class="w-full h-full object-contain">
        </div>

        <div :class="['md:h-screen transition-all flex items-center bg-dark',
            'md:bg-skills bg-no-repeat bg-cover justify-center select-none'
            , sectionHover? 'w-full md:w-[85%]' : 'w-full']">

            <div class="w-full md:w-[95%] md:h-fit cursor-pointer ml-0 md:ml-[5%]">
                <p class="w-[90%] mx-auto md:mx-0 md:w-fit text-primary font-bold text-3xl md:text-4xl 
                    mb-4 md:mb-10 text-center md:text-start">
                    Projects i had fun building
                </p>

                <div class="w-fit max-w-full overflow-x-auto hidden md:grid grid-cols">
                   
                        <Project 
                            v-for="project in projects"
                            :title="project.name"
                            :description="project.description"
                            :git="project.github"
                            :link="project.link"
                            :stack="project.stack" />
                </div>

                <div class="w-fit mx-auto grid md:hidden grid-cols-1 gap-10 my-10">
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

<style>
.grid-cols{
    padding: 10px;
    grid-template-columns: repeat(4, auto);
    gap: 25px;
}

/* width */
::-webkit-scrollbar {
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #0F0202;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #F75656;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #E82B2B;
}
</style>