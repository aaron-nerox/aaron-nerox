<script setup>
import { defineAsyncComponent, ref, watchEffect } from 'vue';

const props = defineProps(['src'])
const icon = ref()

watchEffect(async ()=>{
    icon.value =  (await import(`../../assets/icons/${props.src}.svg`)).default
})
</script>

<template>
    <div class="w-[60px] h-[60px] grid bg-diamond bg-contain bg-no-repeat">
        <img :src="icon" class="w-7 h-7 m-auto"/>
    </div>
</template>