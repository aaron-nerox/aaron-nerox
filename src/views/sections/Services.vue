<script setup>
import { computed, reactive, ref } from 'vue'

import TextBox from '@/components/base/TextBox.vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import LogoCircle from '@/components/extended/LogoCircle.vue'
import Button from '@/components/base/Button.vue'

import ServiceDetailsModal from '@/components/modals/ServiceDetailsModal.vue'

import lineSun from '@/assets/images/line_sun.vue'
import bgElement from '@/assets/images/element_bg_end.vue'
import { useNetwork } from '@/stores/network'

const network = useNetwork()

const services = computed(() => network.services)

const selectedService = ref({})
const isModalOpen = ref(false)

const openDialog = (index) => {
    selectedService.value = services.value.services[index]
    isModalOpen.value = true
}

const updateDialog = () => {
    isModalOpen.value = !isModalOpen.value
}
</script>

<template>
    <Teleport to="body">
        <ServiceDetailsModal 
            :open="isModalOpen"
            :serviceDetails="selectedService"
            @onDissmissRequest="updateDialog"/>
    </Teleport>

    <section id="services" class="w-full h-fit md:h-screen 2xl:h-fit bg-light inline-flex flex-col items-center justify-evenly relative px-0 md:px-0">
        <lineSun class="h-[96px] md:h-[200px] w-fit absolute left-0 top-[10%] rotate-180"/>
        <bgElement  class="w-[48px] md:w-[64px] absolute bottom-10 right-0"/>

        <TextBox
            class="w-[250px] md:w-[420px] !h-[64px] text-xl md:text-3xl font-semibold md:font-bold my-10 md:my-[5%]">
            Services i Provide
        </TextBox>

        <div class="w-full h-fit md:h-[90%] px-5 md:px-[5%] 2xl:px-[18%] mb-[3%] inline-flex flex-col md:flex-row items-center justify-evenly">
            <BaseContainer 
                v-for="service in services.services"
                class="w-full md:!w-[35%] my-5 md:my-0">
                <div class="bg-dark h-fit w-full shrink-0 inline-flex flex-col items-center relative">
                    <img 
                        src="@/assets/images/green_swirl.jpeg" 
                        alt="" 
                        class="w-full h-[96px] md:h-[120px] object-cover absolute top-0 right-0 left-0">
                    <LogoCircle 
                        :Logo="service.image"
                        borderColor="ffffff"
                        backgroundColor="ffffff"
                        sizeClass="large"
                        class="mt-[48px] md:mt-[55px]"/>
                    <p class="text-light font-semibold text-xl my-5">
                        {{  service.name }}
                    </p>
                    <p class="text-light text-md md:text-lg text-center mx-5 md:mx-10">
                        {{ service.description }}
                    </p>
                    <Button 
                        :isLightMode="true"
                        class="my-10"
                        @click="openDialog(services.services.indexOf(service))">
                        Read More
                    </Button>
                </div>
            </BaseContainer>
        </div>
    </section>
</template>