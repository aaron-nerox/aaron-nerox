<script setup>
</script>

<template>
    <div>
        <div
            class="grid grid-cols-1 grid-rows-1 min-h-[50px] h-fit w-fit relative cursor-pointer transition-all">
            <div class="h-full w-full outline outline-primary 
            outline-2 row-start-1 row-end-2 col-start-1 col-end-2 absolute top-[5px] 
            right-[5px] z-0">
            </div>

            <div class="w-full h-full p-2 bg-light border-primary border-b-2 border-l-2 z-10">
                <p class="w-fit h-fit text-dark font-light">
                    <slot class="w-fit h-fit"></slot>
                </p>
            </div>
        </div>
    </div>
</template>