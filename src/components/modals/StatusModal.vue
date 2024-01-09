<script setup>
import { ref, watchEffect } from 'vue';
import BaseContainer from '@/components/base/BaseContainer.vue';
import Close from '@/assets/icons/vue/close.vue'

const props = defineProps(["open", "messageStatus", "message"])
defineEmits(['dissmiss'])

const colorClass = ref("")

watchEffect(() => {
    switch(props.messageStatus) {
        case "loading" : {
            colorClass.value = "bg-danger"
            break;
        }
        case "error" : {
            colorClass.value = "bg-error"
            break;
        }
        default : {
            colorClass.value = "bg-success"
            break;
        }
    }
})

</script>


<template>
    <Transition name="fade">
        <div v-if="props.open"
            class="w-[80%] md:w-fit fixed bottom-20 md:bottom-10 right-3 md:right-10 bg-transparent z-20">
            <BaseContainer 
                accent="outline-dark">
                <div :class="[colorClass, 
                'h-fit w-fit py-2 px-2 md:px-5 inline-flex flex-row items-center justify-center gap-x-2 md:gap-x-5']">
                    <Close class="w-7 md:w-10 h-7 md:h-10 aspect-square shrink-0 bg-light/10 rounded-full" @click="$emit('dissmiss')"/>
                    <p class="text-light font-normal md:font-semibold text-xs md:text-lg"> {{ props.message }}</p>
                </div>
            </BaseContainer>
        </div>
    </Transition>
    
    
</template>