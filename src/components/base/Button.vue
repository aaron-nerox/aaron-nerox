<script setup>
import { ref, shallowRef, defineAsyncComponent, watchEffect } from 'vue'

const baseBackgroundLight = "row-start-1 row-end-2 col-start-1 col-end-2 bg-light hover:bg-prim text-dark font-medium px-5 "
const baseBackgroundDark = "row-start-1 row-end-2 col-start-1 col-end-2 bg-dark hover:bg-prim text-light font-medium px-5 "
const alingmentRegular = "inline-flex items-center justify-center flex-row z-10"
const alignmentReverse = "inline-flex items-center justify-center flex-row-reverse z-10"


const buttonBackgroundClass = ref("")
const alignmentClass = ref("")
const iconTintClass = ref("")
const iconSrc = shallowRef()
const props = defineProps(['isLightMode', 'icon', 'iconTint', 'isIconLeading'])

/**
 * This watch effect is to build the button style and alignment during runtime
 */
watchEffect(async () => {
    //Append the base colors depending on the button mode
    if (props.isLightMode) {
        buttonBackgroundClass.value = baseBackgroundLight
    } else {
        buttonBackgroundClass.value = baseBackgroundDark + alingmentRegular
    }

    if (props.isIconLeading) {
        alignmentClass.value = alingmentRegular
    } else {
        alignmentClass.value = alignmentReverse
    }

    if (props.iconTint) {
        iconTintClass.value = props.iconTint
    } else {
        if (props.isLightMode) {
            iconTintClass.value = "fill-dark stroke-dark"
        } else {
            iconTintClass.value = "fill-light stroke-light"
        }
    }

    if(props.icon) {
        iconSrc.value = defineAsyncComponent(() => import(/* @vite-ignore */`../../assets/icons/${props.icon}.vue`))
    }
})



</script>

<template>
    <div class="grid grid-cols-1 grid-rows-1 h-[50px] w-fit relative cursor-pointer hover:-translate-y-1 transition-all">
        <div class="h-full w-full outline outline-primary 
            outline-2 row-start-1 row-end-2 col-start-1 col-end-2 absolute top-[5px] 
            right-[5px] z-0">
        </div>

        <button :class="[buttonBackgroundClass, alignmentClass]">
            <iconSrc v-if="props.icon" :class="['h-5 w-5', iconTintClass]" />
            <div v-else></div>

            <div class="w-3 bg-transparent"></div>
            <slot></slot>
        </button>

    </div>
</template>