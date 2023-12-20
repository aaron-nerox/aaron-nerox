<script setup>
import Product from '../../components/extended/Product.vue'

const products = [1,1,1,1,1]
</script>

<template>
    <section id="products" class="w-full h-screen bg-light">
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