<script setup>
import Link from '@/assets/icons/vue/link.vue';
const props = defineProps(['name', 'href'])

const redirect = ()=>{
    window.open(props.href, "_blank")
}
</script>

<template>
    <div class="inline-flex flex-row items-center min-w-fit fill-white
    text-white hover:fill-primary hover:text-primary 
    cursor-pointer transition-all gap-x-3 my-1"
        @click="redirect">
        <p class="text-md font-medium">
            {{props.name}}
        </p>
        <Link class="w-3 h-3"/>
    </div>
</template>