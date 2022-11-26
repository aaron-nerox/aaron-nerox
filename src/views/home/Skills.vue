<script setup>
import { ref } from 'vue';
import Skill from '@/components/base/Skill.vue'

const sectionHover = ref(false)
const skills = ref(['Software engineering', 'Json', 'Xml',
'Agile methods', 
'Project management', 'Android',
'software architecture modeling', 'Git/GitHub',
'Kotlin', 'Java','Google cloud',
 'Jetpack compose', 
'Kotlin Coroutines', 'Kotlin Ktor',
'Node.js', 'Vue.js', 'React.js', 'Postgres',
'MongoDb',  'Firebase',
'Javascript', 'Typescript','DevOps' ])

</script>

<template>
    <section id="skills" class="w-full md:h-screen flex flex-row items-center 
        md:bg-skills bg-no-repeat bg-cover bg-dark "
        @mouseenter="sectionHover = true">

        <div :class="['md:h-screen transition-all flex items-center',
            'justify-center', sectionHover? 'w-full md:w-[85%]' : 'w-full']">

            <div class="h-screen md:h-fit w-full ml-0 md:ml-[20%]">
                <p class="text-primary-light md:text-primary font-bold text-3xl 
                    md:text-4xl my-5 md:my-0 md:mb-10 text-center md:text-start">My tech stack</p>
                <div class="w-full md:w-[95%] md:h-fit md:px-10 text-center md:text-start">
                    
                    <Skill v-for="skill in skills" class="inline m-2">
                        {{skill}}
                    </Skill>
                    
                </div>
            </div>
        </div>

        <div :class="['h-screen hidden md:grid bg-primary transition-all select-none'
            , sectionHover? 'w-[15%]' : 'w-0 opacity-0']">
            <img src="@/assets/images/skill_banner.png" 
                alt=""
                class="w-full h-screen object-contain">
        </div>

    </section>
</template>