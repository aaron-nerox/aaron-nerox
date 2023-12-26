<script setup>
import TextBox from '../../components/base/TextBox.vue'
import BaseContainer from '../../components/base/BaseContainer.vue'
import LogoCircle from '../../components/extended/LogoCircle.vue'

</script>

<template>
    <section id="services" class="w-full h-screen bg-light inline-flex flex-col items-center justify-evenly">
        <TextBox
            class="w-[420px] !h-[64px] text-3xl font-bold my-[5%]">
            Services i Provide
        </TextBox>

        <div class="w-full h-[90%] px-[5%] mb-[3%] inline-flex flex-row items-center justify-evenly">
            <BaseContainer class="!h-full !w-[40%]">
                <div class="bg-dark h-full w-full shrink-0">

                </div>
            </BaseContainer>
            <BaseContainer class="!h-full !w-[40%]">
                <div class="bg-dark h-full w-full shrink-0">

                </div>
            </BaseContainer>
        </div>
    </section>
</template>