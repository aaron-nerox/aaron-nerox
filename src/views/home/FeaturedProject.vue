<script setup>
import { reactive, ref, watchEffect } from 'vue';
import Button from '../../components/base/Button.vue';

const props = defineProps(['direction', 'features', 
        'banner', 'stack', 'link', 'mode', 'srcset']);

const sectionHover = ref(true)
const currentImage = ref(0)
const banner = ref()
const context = reactive({
    images: []
})

const redirect = ()=>{
    window.open(props.link, "_blank")
}

watchEffect(async ()=>{
    banner.value = (await import(/* @vite-ignore */ `../../assets/icons/${props.banner}.svg`)).default

    props.srcset.map(async (src) => {
        const res = (await import(/* @vite-ignore */ src)).default
        context.images.push(res)
    })
    

    setInterval(()=>{
        if(currentImage.value == context.images.length-1){
            currentImage.value = 1
        }else{
            currentImage.value += 1
        }
    }, 1500)
})
</script>

<template>
    <section id="about" class="w-full h-screen flex flex-row items-center">

        <div v-if="props.direction == 'start'" 
        :class="['h-screen bg-primary transition-all select-none'
            , sectionHover ? 'w-[15%]' : 'w-0 opacity-0']">
            <img src="@/assets/images/projects_banner.png" alt="" class="w-full h-full object-contain">
        </div>

        <div :class="['h-screen transition-all flex flex-col items-center bg-dark',
        'justify-center', sectionHover ? 'w-[85%]' : 'w-full']">

            <img :src="banner" 
                alt="project logo" 
                class="w-[25%] mb-10">

            <div class="w-full h-[70%] flex flex-row items-center justify-between text-white px-20">
                <div class="w-[60%] flex flex-col items-start gap-y-7">
                    <p class="font-semibold text-xl" v-for="feature in props.features">
                        {{feature}}
                    </p>
                    <div class="inline-flex flex-row items-center">
                        <div class="inline-flex flex-row items-center mx-2 mb-5"
                            v-for="tech in props.stack">
                            <img src="../../assets/icons/ic_diamond_red.svg" 
                                alt="tech stack"
                                class="h-3 w-3 mr-2">
                            <p class="inline text-primary text-lg font-medium">{{tech}}</p>
                        </div>
                    </div>
                    <Button @click="redirect">
                        {{(props.mode === 'download')? 'Download' : 'Check out this work'}}
                    </Button>
                </div>
                
                <img :src="context.images[currentImage]" 
                    class="w-[25%]"/>
                    
            </div>
        </div>

        <div v-if="props.direction == 'end'"
        :class="['h-screen bg-primary transition-all select-none'
            , sectionHover ? 'w-[15%]' : 'w-0 opacity-0']">
            <img src="@/assets/images/projects_banner.png" alt="" class="w-full h-full object-contain">
        </div>
    </section>
</template>