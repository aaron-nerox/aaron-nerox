<script setup>
import { ref } from 'vue';
import Skill from '@/components/base/Skill.vue'

const sectionHover = ref(false)
const primarySkills = ref(['Software engineering', 
'Agile methods', 
'Project management', 'Android',
'software architecture modeling', 'Git/GitHub',])

const secondarySkills = ref([
'Kotlin', 'Java','Google cloud',
'Json', 'Xml', 'Jetpack compose', 
'Kotlin Coroutines', 'Kotlin Ktor', 
])

const otherSkills = ref([
'Node.js', 'Vue.js', 'React.js', 'Postgres',
'MongoDb',  'Firebase',
'Javascript', 'Typescript','DevOps'])
</script>

<template>
    <section id="skills" class="w-full h-screen flex flex-row items-center bg-dark"
        @mouseenter="sectionHover = true">

        <div :class="['h-screen transition-all flex items-center',
            'justify-center', sectionHover? 'w-[85%]' : 'w-full']">

            <div class="h-fit w-full ml-[20%]">
                <p class="text-primary font-bold text-4xl mb-10">My tech stack</p>
                <div class="w-[95%] h-fit px-10">
                    
                    <Skill v-for="skill in primarySkills" class="inline m-2">
                        {{skill}}
                    </Skill>
                
                    <Skill v-for="skill in secondarySkills" class="inline m-2">
                        {{skill}}
                    </Skill>
                
                    <Skill v-for="skill in otherSkills" class="inline m-2">
                        {{skill}}
                    </Skill>
                    
                </div>
            </div>
        </div>

        <div :class="['h-screen bg-primary transition-all select-none'
            , sectionHover? 'w-[15%]' : 'w-0 opacity-0']">
            <img src="@/assets/images/skill_banner.png" 
                alt=""
                class="w-full h-full object-contain">
        </div>

    </section>
</template>