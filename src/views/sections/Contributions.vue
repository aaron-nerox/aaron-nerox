<script setup>
import TextBox from '@/components/base/TextBox.vue'
import Product from '@/components/extended/Product.vue'
import ElementBgLeft from '@/assets/images/element_bg_start.vue'
import BgOverlay from '@/assets/images/background_overlay_top_start.vue'

const products = [1,1,1,1,1]
</script>

<template>
    <section id="products" class="w-full h-fit md:h-screen bg-light relative inline-flex flex-col items-center">

        <BgOverlay class="absolute top-0 left-0 w-1/2 md:w-1/5 h-fit" />
        <ElementBgLeft class="absolute left-0 bottom-10 w-[48px] md:w-[64px]"/>

        <TextBox
            class="w-[250px] md:w-[420px] !h-[64px] text-xl md:text-3xl font-bold my-10 md:my-[5%]">
            Products I worked on
        </TextBox>

        <div class="w-full h-fit grid md:grid-cols-4 my-auto px-5 md:px-[8%] mb-10 md:mb-[3%] gap-y-5">
            <Product 
                v-for="product in products"
                productName="Tapping solution"
                productCoverUrl="CoverUrl"
                productPrimaryColor="223322"
                productSecondaryColor="443323"
                productImageUrl="link"
                productDownloadUrl="link"
                productDescription="This will be a product description for any needed description and clarification"
            />
        </div>
    </section>
</template>

<style scoped>

</style>