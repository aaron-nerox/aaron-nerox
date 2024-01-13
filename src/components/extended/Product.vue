<script setup>
import LogoCircle from './LogoCircle.vue'
import BaseContainer from '../base/BaseContainer.vue'


const props = defineProps([
    "productName", 
    "productDescription", 
    "productPrimaryColor", 
    "productSecondaryColor", 
    "productImageUrl",
    "productDownloadUrl",
    "productCoverUrl"
])

const redirectInto = () => {
    window.open(props.productDownloadUrl, "_blank")
}

</script>

<template>
    <BaseContainer>
        <div class="w-full h-fit bg-dark text-light">
            <div class="w-full h-fit grid">
                <img 
                    :src="props.productCoverUrl" 
                    alt="product cover"
                    loading="lazy"
                    class="w-full h-[96px] object-cover grid-overlap z-0">

                <div class="w-full h-[96px] backdrop-blur-sm backdrop-brightness-75 grid-overlap z-1"></div>

                <div class="grid-overlap w-full h-[96px] inline-flex flex-row items-center justify-start p-3 gap-x-3 z-10">
                    <LogoCircle 
                        :backgroundColor="props.productSecondaryColor"
                        :borderColor="props.productPrimaryColor"
                        :Logo="props.productImageUrl"
                        sizeClass="small"
                        />
                    <p class="font-bold text-xl md:text-2xl">
                        {{ props.productName }}
                    </p>
                </div>
            </div>  

            <div class="w-full h-fit md:h-[156px] p-3 inline-flex flex-col justify-between">
                <p class="text-light font-medium text-sm md:text-sm">
                    {{ props.productDescription }}
                </p>
                
                <img 
                    src="@/assets/images/google_play_button.png" 
                    alt="play_button"
                    class="w-1/2 md:w-[40%] self-end"
                    @click="redirectInto">
            </div>          
        </div>
    </BaseContainer>
</template>