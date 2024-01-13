<script setup>
import { ref, watchEffect } from 'vue'


const props = defineProps(["alignment", "mode"])
const alignmentClass = ref("")
const modeClass = ref("")

watchEffect(() => {
    switch(props.alignment) {
        case 'start' : {
            alignmentClass.value = "items-start"
            break;
        }
        case 'center' : {
            alignmentClass.value = "items-center"
            break;
        }
        case 'end' : {
            alignmentClass.value = "items-end"
            break;
        }
        default : {
            alignmentClass.value = "items-center"
            break;
        }
    }

    if(props.mode == "dark") {
        modeClass.value = "bg-dark text-light"
    } else {
        modeClass.value = "bg-light text-dark"
    }

})

</script>

<template>
    <div class="h-fit min-h-[50px]">
        <div
            class="h-full w-full grid grid-cols-1 grid-rows-1 relative cursor-pointer transition-all">

            <div class="h-full w-full outline outline-primary 
            outline-2 row-start-1 row-end-2 col-start-1 col-end-2 absolute top-[5px] 
            right-[5px] z-0">
            </div>

            <div :class="['w-full h-full p-2 border-primary border-b-2 border-l-2 z-10 inline-flex flex-col justify-center', alignmentClass, modeClass]">
                <p class="w-fit h-fit">
                    <slot class="w-fit h-fit"></slot>
                </p>
            </div>
        </div>
    </div>
</template>