<script setup>
import TextBox from '@/components/base/TextBox.vue'
import Product from '@/components/extended/Product.vue'
import ElementBgLeft from '@/assets/images/element_bg_start.vue'
import BgOverlay from '@/assets/images/background_overlay_top_start.vue'
import { useNetwork } from '@/stores/network';
import { computed } from 'vue';

const network = useNetwork()

const products = computed(() => network.products)
</script>

<template>
    <section id="products" class="w-full h-fit xl:h-screen 2xl:h-[80vh] bg-light relative inline-flex flex-col items-center justify-evenly">

        <BgOverlay class="absolute top-0 left-0 w-1/2 md:w-1/5 h-fit" />
        <ElementBgLeft class="absolute left-0 bottom-10 w-[48px] md:w-[64px]"/>

        <TextBox
            class="w-[250px] md:w-[420px] !h-[64px] text-xl md:text-3xl font-bold my-10">
            Products I worked on
        </TextBox>

        <div class="w-full h-fit grid md:grid-cols-3 px-5 md:px-12 xl:px-[8%] 2xl:px-[25%] gap-5 md:gap-8 xl:gap-10 mb-10">
            <Product 
                v-for="app in products.products"
                :productName="app.title"
                :productCoverUrl="app.coverImage"
                :productPrimaryColor="app.borderColor"
                :productSecondaryColor="app.bgColor"
                :productImageUrl="app.logoImage"
                :productDownloadUrl="app.link"
                :productDescription="app.description"
            />
        </div>
    </section>
</template>

<style scoped>

</style>