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
            <div class="w-[90%] md:w-[55%] xl:w-[33%] 2xl:w-[25%] min-h-[75%] md:min-h-[70%] 2xl:min-h-[45%] bg-light m-auto p-4 md:p-10 inline-flex flex-col items-center justify-center">
                <div class="w-full h-fit inline-flex flex-col md:flex-row items-center md:justify-between gap-y-4 md:gap-y-0">
                    <LogoCircle 
                        :Logo="props.serviceDetails.image"
                        borderColor="000000"
                        backgroundColor="000000"
                        sizeClass="large"
                        class=""/>
                    <TextBox
                        mode="dark"
                        class="w-[180px] md:w-[220px] !h-[55px] font-semibold text-md md:text-lg">
                        {{ props.serviceDetails.detailedName }}
                    </TextBox>
                </div>

                <p class="text-md md:text-lg text-center my-10">
                    {{ props.serviceDetails.detailedDescription }}
                </p>


                <p class="font-semibold md:font-bold text-center text-md md:text-xl mb-5">
                    {{ `${props.serviceDetails.name} projects I worked on` }}
                </p>

                <div class="w-full inline-flex flex-row items-center justify-center gap-x-5">
                    <LogoCircle 
                        v-for="project in props.serviceDetails.projects"
                        :Logo="project.logoImage"
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