<script setup>
import { defineAsyncComponent, ref, shallowRef, watchEffect } from 'vue';

const props = defineProps(['src'])
const icon = shallowRef()

watchEffect(async ()=>{
    // (await import(`../../assets/icons/${props.src}.vue`)).default
    icon.value =  defineAsyncComponent(()=> import(/* @vite-ignore */`../../assets/icons/${props.src}.vue`))
})
</script>

<template>
    <div class="w-[60px] h-[60px] grid bg-diamond bg-contain bg-no-repeat cursor-pointer">
        <icon class="w-6 h-6 m-auto fill-white"/>
    </div>
</template>