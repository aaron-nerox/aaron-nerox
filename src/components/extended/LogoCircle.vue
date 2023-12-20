<script setup>
import { ref, watchEffect } from 'vue'

const sizeClass = ref("")
const props = defineProps(["borderColor", "backgroundColor", "Logo", "sizeClass"])

watchEffect(() => {
    switch(props.sizeClass) {
        case 'small' : {
            sizeClass.value = "w-[64px] h-[64px]"
            break;
        }
        case 'medium' : {
            sizeClass.value = "w-[72px] h-[72px]"
            break;
        }
        case 'large' : {
            sizeClass.value = "w-[96px] h-[96px]"
            break;
        }
        default : {
            sizeClass.value = "w-[72px] h-[72px]"
            break;
        }
    }
})

</script>

<template>
    <kinesis-container>
        <kinesis-element
            type="translate"
            :strength="20">
            <div class="w-fit h-fit rounded-full outline-cs">
                <img 
                    :src="props.Logo" 
                    alt="product logo"
                    :class="['bg-cs m-[3px] rounded-full', sizeClass]" />
            </div>
            
        </kinesis-element>
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