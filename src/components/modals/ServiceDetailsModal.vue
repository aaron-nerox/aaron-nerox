<script setup>
import TextBox from '../base/TextBox.vue'
import LogoCircle from '../extended/LogoCircle.vue'

const props = defineProps(["open", "serviceDetails"])
defineEmits(['onDissmissRequest'])

</script>

<template>
    <Transition name="fade">
        <div v-if="props.open" 
            @click.self="$emit('onDissmissRequest')"
            class="min-w-full min-h-screen w-full h-screen fixed top-0 
                bottom-0 right-0 left-0 bg-dark/30 backdrop-blur-md z-20 select-none grid">
            <div class="w-[33%] min-h-[70%] bg-light m-auto p-10 inline-flex flex-col items-center justify-center"
                >
                <div class="w-full h-fit inline-flex flex-row items-center justify-between">
                    <LogoCircle 
                        :src="props.serviceDetails.image"
                        borderColor="000000"
                        backgroundColor="000000"
                        sizeClass="large"
                        class=""/>
                    <TextBox
                        mode="dark"
                        class="w-[220px] !h-[55px] font-semibold text-lg">
                        {{ props.serviceDetails.detailedName }}
                    </TextBox>
                </div>

                <p class="text-lg text-center my-10">
                    {{ props.serviceDetails.detailedDescription }}
                </p>


                <p class="font-bold text-center text-xl mb-5">
                    {{ `${props.serviceDetails.name} projects I worked on` }}
                </p>

                <div class="w-full inline-flex flex-row items-center justify-center gap-x-5">
                    <LogoCircle 
                        v-for="project in props.serviceDetails.projects"
                        :src="project.logoImage"
                        :borderColor="project.borderColor"
                        :backgroundColor="project.bgColor"
                        sizeClass="small"
                        class=""
                        @click=""
                        />
                </div>
            </div>
        </div>
    </Transition>
</template>