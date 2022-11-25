<script setup>
import Link from '../../assets/icons/link.vue';
const props = defineProps(['name', 'href'])

const redirect = ()=>{
    window.open(props.href, "_blank")
}
</script>

<template>
    <div class="inline-flex flex-row items-center min-w-fit 
        fill-white text-white hover:fill-primary 
        hover:text-primary cursor-pointer transition-all my-1"
        @click="redirect">
        <Link class="w-4 h-4 mr-2"/>
        <p class="min-w-fit">
            {{props.name}}
        </p>
    </div>
</template>