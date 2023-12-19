<script setup>
import { defineAsyncComponent, ref, shallowRef, watchEffect } from 'vue';

const props = defineProps(['src'])
const icon = shallowRef()

watchEffect(async ()=>{
    // (await import(`../../assets/icons/${props.src}.vue`)).default
    icon.value =  defineAsyncComponent(()=> import(/* @vite-ignore */`../../assets/icons/vue/${props.src}.vue`))
})
</script>

<template>
    <div class="w-[50px] md:w-[60px] h-[50px] md:h-[60px] grid bg-contain bg-no-repeat cursor-pointer">
        <icon class="w-5 md:w-6 h-5 md:h-6 m-auto fill-white"/>
    </div>
</template>