<script setup>
import { useNetwork } from '@/stores/network'
import { computed, onBeforeMount, onMounted, watchEffect } from 'vue'

import Button from '@/components/base/Button.vue'
import LogoCircle from '@/components/extended/LogoCircle.vue'


import bottomRight from '@/assets/images/background_overlay_bottom_end.vue'
import topLeft from '@/assets/images/background_overlay_top_start.vue'


const network = useNetwork()
const linkhubProfile = computed(() => network.linkhubData)

onBeforeMount(() => {
    network.fetchLinkHubProfile()
})

const redirect = (link) => {
    window.open(link, '_blank')
}

</script>

<template>
    <div class="w-full h-fit md:h-screen bg-light relative py-10 inline-flex flex-col items-center justify-between">
        <topLeft class="w-1/2 md:w-1/5 h-fit absolute top-0 left-0" />
        <bottomRight class="w-1/2 md:w-1/5 h-fit absolute bottom-0 right-0" />

        <img
            class="w-[250px] md:w-[350px] object-contain"
            src="@/assets/images/linkHub.png"
            alt="linkhub logo"
            />   
        

        <div class="w-full h-2/3 px-[10%] mt-10 md:mt-0 inline-flex flex-col md:flex-row items-center justify-center gap-x-0 md:gap-x-[150px] gap-y-10 md:gap-y-0">

            <img 
                :src="linkhubProfile.profile.profileImage" 
                alt="profile image"
                class="h-[200px] md:h-3/5 aspect-square rounded-full object-cover outline-primary outline-4 outline-none outline transition-all"
            >

            <div class="grid grid-cols-2 md:grid-cols-3 gap-10">
                <LogoCircle 
                    v-for="link in linkhubProfile.profile.links" 
                    :borderColor="link.borderColor"
                    :backgroundColor="link.bgColor" 
                    :Logo="link.logoImage" 
                    sizeClass="medium"
                    class=""
                    @click="redirect(link.link)" />
            </div>
        </div>

        <Button 
        class="my-10 md:my-6"
            :isLightMode="false"
            iconTint="fill-none stroke-light"
            @click="$router.push('/')">
            Explore portfolio
        </Button>

        <p class="font-light text-sm">
            &copy; 2024 linkhub by aaron, all rights reserved.
        </p>

    </div>
</template>