<script setup>
import Button from '../base/Button.vue';

const props = defineProps(['open'])
defineEmits(['dissmiss'])

</script>

<template>
    <transition name="fade">
        <div v-if="props.open" class="min-w-full min-h-screen w-full h-screen fixed top-0 
            bottom-0 right-0 left-0 bg-dark/70 backdrop-blur-sm 
            z-30 select-none grid">
            <div class="w-full h-full m-auto flex flex-col items-center justify-evenly">
                <div class="w-1/2 md:w-1/4 flex flex-col items-center gap-y-10 text-xl">
                    <a href="#about" class="!w-full" @click="$emit('dissmiss')">
                        <Button class="!w-full">
                            About
                        </Button>
                    </a>
                    <a href="#skills" class="!w-full" @click="$emit('dissmiss')">
                        <Button class="!w-full">
                            Skills
                        </Button>
                    </a>
                    <a href="#featured" class="!w-full" @click="$emit('dissmiss')">
                        <Button class="!w-full">
                            Projects
                        </Button>
                    </a>
                    <a href="#extra" class="!w-full" @click="$emit('dissmiss')">
                        <Button class="!w-full">
                            Extras
                        </Button>
                    </a>
                    <a href="#contact" class="!w-full" @click="$emit('dissmiss')">
                        <Button class="!w-full flex flex-row justify-center">
                            Contact
                        </Button>
                    </a>
                </div>
                <p class="text-white">
                    Where there is light, you will find darkness ☯.
                </p>
            </div>
        </div>
    </transition>
</template>