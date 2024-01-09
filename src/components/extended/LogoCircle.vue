<script setup>
import { ref, shallowRef, watchEffect, defineAsyncComponent  } from 'vue'

const sizeClass = ref("")
const icon = shallowRef()

const props = defineProps(["borderColor", "backgroundColor", "Logo", "sizeClass", "src"])

watchEffect(() => {
    switch(props.sizeClass) {
        case 'small' : {
            sizeClass.value = "w-[48px] md:w-[64px] h-[48px] md:h-[64px]"
            break;
        }
        case 'medium' : {
            sizeClass.value = "w-[72px] h-[72px]"
            break;
        }
        case 'large' : {
            sizeClass.value = "w-[96px] md:w-[106px] h-[96px] md:h-[106px]"
            break;
        }
        default : {
            sizeClass.value = "w-[72px] h-[72px]"
            break;
        }
    }

    icon.value =  defineAsyncComponent(()=> import(/* @vite-ignore */`../../assets/icons/vue/${props.src}.vue`))

})

</script>

<template>
    <kinesis-container>
        <kinesis-element
            class="hidden md:block"
            type="translate"
            :strength="20">
            <div class="w-fit h-fit rounded-full outline-cs">
                <div :class="[sizeClass, 'grid rounded-full bg-cs m-[3px]']">
                    <img 
                        v-if="props.Logo"
                        :src="props.Logo" 
                        alt="product logo"
                        class="h-full w-full rounded-full" />
                    <icon 
                        v-else class="w-[70%] h-[70%] m-auto" />
                </div>
            </div>
        </kinesis-element>
        <div class="block md:hidden">
            <div class="w-fit h-fit rounded-full outline-cs">
                <div :class="[sizeClass, 'grid rounded-full bg-cs m-[3px]']">
                    <img 
                        v-if="props.Logo"
                        :src="props.Logo" 
                        alt="product logo"
                        class="h-full w-full rounded-full" />
                    <icon 
                        v-else class="w-[70%] h-[70%] m-auto" />
                </div>
                
            </div>
        </div>
    </kinesis-container>
</template>

<style scoped>
.outline-cs {
    border: solid 2px v-bind('`#${props.borderColor}`');
}

.bg-cs {
    background-color: v-bind('`#${props.backgroundColor}`');
}
</style>