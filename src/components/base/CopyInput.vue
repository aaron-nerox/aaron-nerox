<script setup>
const props = defineProps(['text'])
</script>

<template>
    <div class="bg-dark border-primary 
        border-2 text-primary-light px-7 py-3 font-medium text-xl">
        {{props.text}}
    </div>
</template>