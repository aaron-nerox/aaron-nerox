<script setup>
import { reactive, ref, watchEffect } from 'vue';
import Button from '@/components/base/Button.vue';

const props = defineProps(['direction', 'features', 
        'banner', 'stack', 'link', 'mode', 'srcset']);

const sectionHover = ref(false)
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
        const res = (await import(/* @vite-ignore */ `../../assets/screenshots/neowalls/${src}.png`)).default
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
    <section id="featured" :class="['w-full md:h-screen flex  items-center'
    ,props.direction === 'start'? 'flex-row' : 'flex-row-reverse']"
        @mouseenter="sectionHover = true">

        <div :class="['h-screen hidden md:block bg-primary transition-all select-none'
            , sectionHover ? 'w-[15%]' : 'w-0 opacity-0']">
            <img src="@/assets/images/projects_banner.png" 
                alt="Featured mobile project banner" 
                class="w-full h-full object-contain">
        </div>

        <div :class="['md:h-screen transition-all flex flex-col items-center bg-dark'
            ,'md:bg-project bg-no-repeat bg-cover justify-center'
            , sectionHover ? 'w-full md:w-[85%]' : 'w-full']">

            <img :src="banner" 
                alt="project logo" 
                class="w-[70%] md:w-[25%] md:mb-10 mb-5">

            <div class="w-full h-[70%] flex flex-col-reverse md:flex-row items-center 
                    md:justify-between text-white px-5 md:px-20 mb-20 md:my-0">

                <div class="w-[95%] md:w-[60%] flex flex-col items-center md:items-start 
                    gap-y-3 md:gap-y-7 text-center md:text-start">
                    <p class="font-semibold text-xl" v-for="feature in props.features">
                        {{feature}}
                    </p>
                    <div class="max-w-full w-full inline-flex flex-row items-center justify-center md:justify-start flex-wrap">
                        <div class="min-w-fit w-fit inline-flex flex-row items-center mx-2 md:mb-5 mb-3"
                            v-for="tech in props.stack">
                            <img src="@/assets/icons/ic_diamond_red.svg" 
                                alt="tech stack"
                                class="h-3 w-3 mr-2">
                            <p class="text-primary text-lg font-medium">{{tech}}</p>
                        </div>
                    </div>
                    <Button @click="redirect">
                        {{(props.mode === 'download')? 'Download' : 'Check out this work'}}
                    </Button>
                </div>
                
                <img :src="context.images[currentImage]" 
                    class="w-[70%] md:w-[25%] mb-6 md:mb-0"
                    alt="mobile application screenshot"/>
                    
            </div>
        </div>

    </section>
</template>