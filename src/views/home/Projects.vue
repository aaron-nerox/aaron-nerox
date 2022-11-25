<script setup>
import { ref } from 'vue';
import AnimatedLogo from '@/components/extended/AnimatedLogo.vue';
import Project from '../../components/base/Project.vue';


const sectionHover = ref(true)
</script>

<template>
    <section id="about" class="w-full h-screen flex flex-row items-center"
        >

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
                   
                        <Project />
                        <Project />
                        <Project />
                        <Project />
                        <Project />
                        <Project />
                        <Project />
                        <Project />
                        <Project />
                        <Project />
                  
                </div>
            </div>

        </div>
    </section>
</template>