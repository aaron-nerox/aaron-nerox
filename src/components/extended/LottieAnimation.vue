<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import Lottie from 'lottie-web'

const animation = ref();
const anime = ref()
const props = defineProps(['animationData','isLooping', 'autoPlay',]);

onMounted(()=>{
    anime.value = Lottie.loadAnimation({
        container: animation.value,
        renderer: 'svg',
        loop: props.isLooping,
        autoplay: props.autoPlay,
        animationData:  JSON.parse(JSON.stringify(props.animationData))
    });
});

onBeforeUnmount(()=>{
    if(anime.value) anime.value.destroy()
})
</script>

<template>
<div ref="animation"></div>
</template>