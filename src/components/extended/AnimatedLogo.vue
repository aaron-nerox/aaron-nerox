<script setup>
import part1Logo from '@/assets/images/logo_part1.svg'
import part2Logo from '@/assets/images/logo_part2.svg'
import part3Logo from '@/assets/images/logo_part3.svg'
</script>

<template>
    <div class="overflow-hidden">
        <kinesis-container class="w-full h-full grid">
            <kinesis-element 
                tag="img"
                alt="logo image"
                :src="part3Logo"
                :strength="-15"
                type="depth"
                transformOrigin="50% 300%"
                axis="x"
                class="x" />
            <kinesis-element 
                tag="img"
                alt="logo image"
                :src="part1Logo"
                :strength="15"
                type="depth"
                transformOrigin="50% 300%"
                axis="x"
                class="x" />
            <kinesis-element 
                tag="img"
                alt="logo image"
                :src="part2Logo"
                :strength="10"
                type="depth"
                transformOrigin="50% 300%"
                class="x" />
        </kinesis-container>
        </div>
</template>

<style>
.x{
    grid-column: 1;
    grid-row: 1;
}
</style>