<script setup>

</script>

<template>
    <div class="grid grid-cols-1 grid-rows-1 h-[50px] w-fit relative cursor-pointer">
        <button class="row-start-1 row-end-2 col-start-1 col-end-2 
        bg-primary hover:bg-prim text-primary-light font-medium inline-flex 
            flex-row items-center px-5 z-10 hover:bg-primary-dark transition-all">
        <img 
            src="../../assets/icons/ic_diamond.svg" 
            alt=""
            class="h-5 w-5 mr-3">
        <slot></slot>
        </button>
        <div class="h-full w-full outline outline-primary-light 
            outline-2 row-start-1 row-end-2 col-start-1 col-end-2 absolute top-[5px] 
            right-[5px] z-0"></div>
    </div>
</template>