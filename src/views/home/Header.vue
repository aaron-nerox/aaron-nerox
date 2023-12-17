<script setup>
import lineSun from '@/assets/images/line_sun.vue'
import TopLeft from '@/assets/images/background_overlay_top_start.vue'
import Button from '@/components/base/Button.vue'
import AnimatedLogo from '@/components/extended/AnimatedLogo.vue'
import LogoCircle from '@/components/extended/LogoCircle.vue'

const scrollDown = () => {

}

</script>

<template>
    <div class="w-full h-screen bg-light relative inline-flex flex-col items-center justify-center gap-y-16">
        
        <lineSun class="h-[200px] w-fit absolute right-0 top-[60%]" />
        <TopLeft class="w-1/5 h-fit absolute top-0 left-0" />

        <img src="@/assets/images/main_logo_dark.svg" alt="Main logo" class="w-1/5 h-fit" />

        <div class="h-fit w-fit inline-flex flex-row items-center gap-4">
            <LogoCircle borderColor="12fa21" backgroundColor="red" />
            <div class="inline-flex flex-col items-center gap-y-5">
                <div class="inline-flex flex-row items-end gap-x-[72px]">
                    <LogoCircle borderColor="12fa21" backgroundColor="red" />
                    <LogoCircle class="mb-14" borderColor="12fa21" backgroundColor="red" />
                    <LogoCircle borderColor="12fa21" backgroundColor="red" />
                </div>
                <div class="grid grid-cols-1 grid-rows-1 items-center justify-center">
                    <div class="pos-1 clock-wise w-[210px] h-[210px] border-primary border-4 "></div>
                    <div class="pos-1 counter-clock-wise w-[210px] h-[210px] border-primary border-4"></div>
                    <AnimatedLogo class="pos-1 m-auto h-44 w-44" />
                </div>
                <div class="inline-flex flex-row items-start gap-x-[72px]">
                    <LogoCircle borderColor="12fa21" backgroundColor="red" />
                    <LogoCircle class="mt-14" borderColor="12fa21" backgroundColor="red" />
                    <LogoCircle borderColor="12fa21" backgroundColor="red" />
                </div>
            </div>
            <LogoCircle borderColor="12fa21" backgroundColor="red" />
        </div>

        <Button :isLightMode="false" @click="scrollDown">
            Get to Know Me!
        </Button>
    </div>
</template>

<style scoped>
@keyframes rotate_clockwise {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes rotate_counter_clockwise {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(-360deg);
    }
}

.pos-1 {
    grid-row: 1;
    grid-column: 1;
}

.clock-wise {
    animation-name: rotate_clockwise;
    animation-duration: 3000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

.counter-clock-wise {
    animation-name: rotate_counter_clockwise;
    animation-duration: 3000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
</style>