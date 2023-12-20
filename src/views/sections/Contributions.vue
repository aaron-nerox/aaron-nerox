<script setup>
import TextBox from '../../components/base/TextBox.vue'
import Product from '@/components/extended/Product.vue'
import ElementBgLeft from '@/assets/images/element_bg_start.vue'
import BgOverlay from '@/assets/images/background_overlay_top_start.vue'

const products = [1,1,1,1,1]
</script>

<template>
    <section id="products" class="w-full h-screen bg-light relative inline-flex flex-col items-center justify-evenly">

        <BgOverlay class="absolute top-0 left-0 w-1/5 h-fit" />
        <ElementBgLeft class="absolute left-0 bottom-10 w-[64px]"/>

        <TextBox
            class="w-[420px] !h-[64px] text-3xl font-bold">
            Products I worked on
        </TextBox>
        <div class="w-full h-fit grid grid-cols-4 px-[8%]">
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
.grid-cols-4{
    grid-template-columns: repeat(3, auto);
    gap: 25px;
}
</style>