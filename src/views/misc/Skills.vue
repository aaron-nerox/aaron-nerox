<script setup>
import BaseContainer from '@/components/base/BaseContainer.vue'
import LogoCircle from '@/components/extended/LogoCircle.vue'
import Button from '@/components/base/Button.vue'
import { computed, reactive, ref } from 'vue'

import lineSun from '@/assets/images/line_sun.vue'
import bgElement from '@/assets/images/element_bg_end.vue'

import TextBox from '@/components/base/TextBox.vue'
import IconButton from '@/components/base/IconButton.vue'
import { useNetwork } from '@/stores/network'
import { useRouter } from 'vue-router'


const network = useNetwork()
const router = useRouter()

const skills = computed(() => network.skills)

const goBack = () => {
    router.back()
}
</script>

<template>
    <div class="w-full h-fit md:h-fit xl:h-screen bg-light inline-flex flex-col items-center justify-evenly relative">
        <lineSun class="h-[96px] md:h-[200px] w-fit absolute right-0 bottom-[10%]"/>
        <bgElement  class="w-[48px] md:w-[64px] absolute -top-16 left-[5%] -rotate-90"/>

        <IconButton 
            src="arrow-left" 
            class="bg-black-diamond fixed top-5 right-5 z-40"
                @click="goBack"/>

        <TextBox
            class="w-[250px] md:w-[420px] !h-[64px] text-xl md:text-3xl font-semibold md:font-bold my-10 mt-20 md:my-[5%]">
            Technical Skills
        </TextBox>

        <div class="w-full h-fit md:h-[110vh] xl:h-[90%] 2xl:h-[45%] px-5 md:px-[5%] 2xl:px-[18%] mb-[3%] inline-flex flex-col md:flex-row items-center justify-evenly">
            <BaseContainer 
                v-for="skill in skills.skills"
                class="w-full md:!w-[45%] !h-[95%] my-5 md:my-0">
                <div class="bg-dark h-full w-full shrink-0 inline-flex flex-col items-center relative">
                    <img 
                        :src="skill.background" 
                        alt="" 
                        class="w-full h-[96px] md:h-[120px] object-cover absolute top-0 right-0 left-0">
                    <LogoCircle 
                        :Logo="skill.logo"
                        borderColor="ffffff"
                        backgroundColor="ffffff"
                        sizeClass="large"
                        class="mt-[48px] md:mt-[55px]"/>
                    <p class="text-light font-semibold text-xl my-5">
                        {{  skill.name }}
                    </p>
                    <div class="w-[90%] text-center pb-5">
                        <div 
                            v-for="skillName in skill.skillset"
                            class="w-fit h-fit inline-flex px-3 py-2 
                                outline outline-light outline-2 m-2 bg-dark text-light hover:bg-light hover:text-dark
                                transition-all">
                            <p class="font-medium text-md">{{ skillName }}</p>
                        </div>
                    </div>
                </div>
            </BaseContainer>
        </div>

    </div>
</template>