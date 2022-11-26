<template>
    <div class="min-w-fit h-[40px] outline outline-primary hover:outline-primary-light
        text-primary font-medium inline-flex flex-row items-center px-3 cursor-pointer
        transition-all select-none">
        <img src="../../assets/icons/ic_sun.svg" 
            alt="skill icon"
            class="h-5 w-5 mr-3">
        <slot></slot>
    </div>
</template>