<script setup>
import { reactive, watchEffect } from 'vue'

import TextBox from '@/components/base/TextBox.vue'
import IconInput from '@/components/base/IconInput.vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import Button from '@/components/base/Button.vue'

import ChevronRight from '@/assets/icons/vue/chevron_right.vue'
import bgOverlay from '@/assets/images/background_overlay_bottom_end.vue'
import lineSun from '@/assets/images/line_sun.vue'

const contactInfo = reactive({
    name : "",
    email : "",
    message: ""
})

const contactPoints = reactive({
    contact : [
        {
            name : "phone",
            icon : "phone",
            contact: "+971585588529"
        },
        {
            name : "email",
            icon : "email",
            contact: "kechaoui.haroune@gmail.com"
        }
    ]
})

//TODO: this will be a post request to the backend later
const submitForm = () => {
    console.log(contactInfo)
}

const redirectToContact = (contactPoint, contactType) => {
    switch (contactType) {
        case "phone" : {
            window.open(`tel:${contactPoint}`, "_blank")
            break;
        }
        case "email" : {
            window.open(`mailto:${contactPoint}`, "_blank")
            break;
        }
        default : {
            window.open(contactPoint, "_blank")
            break;
        }
    }
}
</script>

<template>
    <section 
        id="contact" 
        class="w-full h-screen bg-light inline-flex flex-col items-center jutify-evenly relative">

        <bgOverlay class="w-1/5 h-fit absolute bottom-0 right-0" />
        <lineSun class="h-[200px] w-fit absolute right-0 top-[10%]"/>
        <lineSun class="h-[200px] w-fit absolute left-0 bottom-[10%] rotate-180"/>

        <TextBox
            class="w-[420px] !h-[64px] text-3xl font-bold my-[5%]">
            Contact Me
        </TextBox>
        
        <div class="w-full h-[70%] px-[5%] inline-flex flex-row items-center mb-[3%] justify-evenly">
            <BaseContainer class="!w-[40%] h-fit">
                <div class="w-full h-full bg-dark inline-flex flex-col items-start justify-center p-7 gap-y-5">
                    <IconInput 
                        class="w-full"
                        v-model="contactInfo.name"
                        type="text"
                        placeholder="Your name here"
                        src="behance" />
                    <IconInput 
                        class="w-full"
                        v-model="contactInfo.email"
                        type="email"
                        placeholder="Your name here"
                        src="behance" />
                    <textarea
                        class="w-full h-[172px] bg-dark-70 border-dark-50 border-2 outline-none text-light"
                        v-model="contactInfo.message">
                        {{ contactInfo.message }}
                    </textarea>
                    <Button
                    class="h-[50px] mt-2"
                        :isLightMode="true"
                        @click="submitForm">
                        Send me a message
                    </Button>
                </div>
            </BaseContainer>

            <div class="w-[50%] h-full inline-flex flex-col items-start justify-center gap-y-8">
                
                <div class="inline-flex flex-col items-center">
                    <TextBox 
                        class="w-[310px] text-sm">
                        Or connect with me directly via the following points of contact
                    </TextBox>
                    <img src="@/assets/images/bottom_right_str.svg" alt="" class="h-20">
                </div>

                <BaseContainer 
                    v-for="point in contactPoints.contact"
                    class="!w-full"
                    @click="redirectToContact(point.contact, point.name)">
                    <div class="w-full h-[126px] bg-dark">
                        <div class="w-full inline-flex flex-row items-center justify-between">
                            <div class="w-[196px] h-[126px] grid">
                                <img 
                                    src="@/assets/images/green_swirl.jpeg" 
                                    alt="background"
                                    class="w-full h-[126px] grid-overlap"
                                />
                                <img 
                                    :src="point.icon" 
                                    alt="icon"
                                    class="grid-overlap h-[96px] w-[96px] m-auto"
                                />
                            </div>
                            <p class="text-light text-xl">
                                {{ point.contact }}
                            </p>
                            <ChevronRight class="h-7 w-7 fill-light mr-5"/>
                        </div>
                    </div>
                </BaseContainer>
            </div>
        </div>
        
    </section>
</template>