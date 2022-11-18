<script setup>
import { ref } from 'vue';


const sectionHover = ref(false)
</script>


<template>
    <section id="about" class="w-full h-screen flex flex-row items-center bg-dark"
        @mouseenter="sectionHover = true"
        @mouseleave="sectionHover = false">
        <div :class="['h-screen bg-primary transition-all', sectionHover? 'w-[15%]' : 'w-0 hidden']">

        </div>
        <div :class="['h-screen transition-all', sectionHover? 'w-[85%]' : 'w-full']">

        </div>
    </section>
</template>