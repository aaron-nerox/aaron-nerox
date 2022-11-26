<script setup>
import Github from '../../assets/icons/github.vue';
import Link from '../../assets/icons/link.vue';
import AnimatedLogo from '../extended/AnimatedLogo.vue';

const props = defineProps(['title','description', 'git', 'link', 'stack'])

const redirect = (link)=>{
    window.open(link, "_blank")
}
</script>

<template>
    <div class="h-[220px] min-w-[220px] w-[220px] grid grid-cols-1 grid-rows-1 relative cursor-pointer 
    hover:-translate-y-1 transition-all shrink-0">
        <div class="w-full h-full row-start-1 row-end-2 col-start-1 col-end-2 
        outline outline-primary bg-black outline-2 hover:bg-prim text-primary-light 
        font-medium p-2 z-10">
        
            <div class="w-full inline-flex flex-row items-center justify-between">
                <AnimatedLogo class="w-[40px] h-[40px]"/>

                <div class="inline-flex flex-row items-center gap-x-3 mx-2">
                    <Github 
                        v-if="props.git.length > 0"
                        class="w-5 h-5 fill-white hover:fill-primary transition-all" 
                        @click="redirect(props.git)"/>
                        
                    <Link 
                        v-if="props.link.length > 0"
                        class="w-5 h-5 fill-white hover:fill-primary transition-all"
                        @click="redirect(props.link)"/>
                </div>
            </div>

            <p class="font-semibold text-primary text-lg my-2">{{props.title}}</p>
            <p class="font-normal text-white text-sm mb-2">{{props.description}}</p>

            <div>
                <div
                    v-for="tech in props.stack"
                    class="inline-flex flex-row items-center mx-1">
                    <img src="../../assets/icons/ic_sun.svg" 
                        alt=""
                        class="h-3 w-3 mr-1">
                    <p class="inline text-primary text-xs font-medium">{{tech}}</p>
                </div>
            </div>
        </div>
        <div class="h-full w-full outline outline-primary-light 
            outline-2 row-start-1 row-end-2 col-start-1 col-end-2 absolute top-[5px] 
            right-[5px] z-0"></div>
    </div>
</template>