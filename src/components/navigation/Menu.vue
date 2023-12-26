<script setup>
import { ref } from 'vue'
import Button from '../base/Button.vue'

const buttonStyleClass = ref("!w-full h-14")

const props = defineProps(['open'])
defineEmits(['dissmiss'])

</script>

<template>
    <transition name="fade">
        <div v-if="props.open" 
            
            class="min-w-full min-h-screen w-full h-screen fixed top-0 
                bottom-0 right-0 left-0 bg-primary/30 backdrop-blur-md 
                z-30 select-none grid">
            <div 
                @click.self="$emit('dissmiss')"
                class="w-full h-full py-10 m-auto flex flex-col items-center justify-between">
                <div></div>
                <div class="w-2/3 md:w-1/4 flex flex-col items-center gap-y-10">
                    <a href="#about" class="!w-full" @click="$emit('dissmiss')">
                        <Button 
                            :class="buttonStyleClass"
                            :isLightMode="true">
                            About
                        </Button>
                    </a>
                    <a href="#skills" class="!w-full" @click="$emit('dissmiss')">
                        <Button :class="buttonStyleClass"
                        :isLightMode="true">
                            Skills
                        </Button>
                    </a>
                    <a href="#featured" class="!w-full" @click="$emit('dissmiss')">
                        <Button :class="buttonStyleClass"
                        :isLightMode="true">
                            Projects
                        </Button>
                    </a>
                    <a href="#extra" class="!w-full" @click="$emit('dissmiss')">
                        <Button :class="buttonStyleClass"
                        :isLightMode="true">
                            Extras
                        </Button>
                    </a>
                    <a href="#contact" class="!w-full" @click="$emit('dissmiss')">
                        <Button :class="buttonStyleClass"
                        :isLightMode="true">
                            Contact
                        </Button>
                    </a>
                </div>
                <p class="text-dark text-sm">
                    Where there is light, you will find darkness ☯.
                </p>
            </div>
        </div>
    </transition>
</template>