<script setup>
import { defineProps } from 'vue'

const props = defineProps(["borderColor", "backgroundColor", "Logo"])

</script>

<template>
    <kinesis-container>
        <kinesis-element 
        type="translate"
        :strength="20"
        class="w-[72px] h-[72px] rounded-full border-[3px] theme-main">
            <div class="w-full h-full rounded-full bg-none border-light border-[3px]">
                <img :src="props.Logo" alt="" class="w-full h-full p-3">
            </div>
        </kinesis-element>
    </kinesis-container>
    
</template>

<style scoped>
.theme-main {
    border-color : v-bind('`#${props.borderColor}`');
    background-color: v-bind('`#${props.backgroundColor}`');
}
</style>