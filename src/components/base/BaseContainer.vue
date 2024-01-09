<script setup>
import { ref, watchEffect } from 'vue'


const props = defineProps(["accent"])

const accentColor = ref("")

watchEffect(() => {
    if(props.accent) {
        accentColor.value = props.accent
    } else {
        accentColor.value = "outline-primary"
    }
})
</script>


<template>
    <div class="grid grid-cols-1 grid-rows-1 h-fit w-fit relative cursor-pointer">
        <div :class="['h-full w-full outline outline-2 row-start-1 row-end-2 col-start-1 col-end-2 absolute top-[5px] right-[5px] z-0', accentColor]">
        </div>
        <div class="z-10">
            <slot></slot>
        </div>
    </div>
</template>