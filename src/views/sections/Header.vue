<script setup>
import { computed, ref } from 'vue'
import lineSun from '@/assets/images/line_sun.vue'
import TopLeft from '@/assets/images/background_overlay_top_start.vue'
import Button from '@/components/base/Button.vue'
import AnimatedLogo from '@/components/extended/AnimatedLogo.vue'
import LogoCircle from '@/components/extended/LogoCircle.vue'
import TextBox from '@/components/base/TextBox.vue'
import { useNetwork } from '@/stores/network'


const networkStore = useNetwork()

const mainProjects = computed(() => networkStore.headerProjects) 


const positionClasses = ref([
    "deg-0", "deg-45", "deg-90", "deg-135", "deg-180", "deg-225", "deg-270", "deg-315"
])
</script>

<template>
    <div class="w-full h-screen bg-light relative inline-flex flex-col items-center justify-between 2xl:justify-evenly">

        <lineSun class="h-[96px] md:h-[200px] w-fit absolute right-0 top-[60%]" />
        <TopLeft class="w-1/2 md:w-1/5 h-fit absolute top-0 left-0" />

        <div class="absolute bottom-[18%] md:bottom-[20%] left-[10%]">
            <img 
                src="@/assets/images/top_left_str.svg" 
                alt=""
                class="w-2/5 md:w-fit">
            <TextBox class="w-[172px] md:w-[196px] text-xs md:text-sm font-light">
                Click on any icon to find some cool stuff
            </TextBox>
        </div>

        <div class="absolute top-[15%] right-[10%] inline-flex flex-col items-end">
            <TextBox class="max-w-[150px] md:max-w-[300px] text-xs md:text-sm font-light">
                The mobile engineer that you won't find anywhere else.
            </TextBox>
            <img 
                src="@/assets/images/bottom_right_str.svg" 
                alt=""
                class="w-2/5 md:w-fit">
        </div>

        <img src="@/assets/images/main_logo_dark.svg" alt="Main logo" class="w-[200px] md:w-[300px] h-fit mt-7 md:mt-10" />

        <div class="h-[250px] md:h-[500px] aspect-square relative grid my-10 ">
            <div class="min-h-[80%] md:min-h-[70%] min-w-[80%] md:min-w-[70%] grid items-center justify-center m-auto">
                <div class="grid-overlap clock-wise min-w-[70%] md:min-w-[55%] min-h-[70%] md:min-h-[55%] border-primary border-2 shrink-0"></div>
                <div
                    class="grid-overlap counter-clock-wise min-w-[70%] md:min-w-[55%] min-h-[70%] md:min-h-[55%] aspect-square border-primary border-2 shrink-0">
                </div>
                <AnimatedLogo class="grid-overlap w-[90%] m-auto" />
            </div>
            <LogoCircle v-for="project in mainProjects.apps" :borderColor="project.borderColor"
                :backgroundColor="project.bgColor" :Logo="project.logoImage" sizeClass="small"
                :class="['absolute top-[38%] md:top-[42.6%] left-[38%] md:left-[42.6%] block', positionClasses[mainProjects.apps.indexOf(project)]]" />

        </div>

        <a href="#about">
            <Button class="w-fit h-[55px] mb-10" :isLightMode="false">
                Get to Know Me!
            </Button>
        </a>

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


.deg-0 {
    transform: translate(140px)
}

.deg-45 {
    transform: rotate(46deg) translate(140px) rotate(-46deg);
}

.deg-90 {
    transform: rotate(91deg) translate(140px) rotate(-91deg);
}

.deg-135 {
    transform: rotate(136deg) translate(140px) rotate(-136deg);
}

.deg-180 {
    transform: rotate(181deg) translate(140px) rotate(-181deg);
}

.deg-225 {
    transform: rotate(226deg) translate(140px) rotate(-226deg);
}

.deg-270 {
    transform: rotate(271deg) translate(140px) rotate(-271deg);
}

.deg-315 {
    transform: rotate(316deg) translate(140px) rotate(-316deg);
}

@media (min-width: 768px) {
    .deg-0 {
        transform: translate(210px)
    }

    .deg-45 {
        transform: rotate(46deg) translate(210px) rotate(-46deg);
    }

    .deg-90 {
        transform: rotate(91deg) translate(210px) rotate(-91deg);
    }

    .deg-135 {
        transform: rotate(136deg) translate(210px) rotate(-136deg);
    }

    .deg-180 {
        transform: rotate(181deg) translate(210px) rotate(-181deg);
    }

    .deg-225 {
        transform: rotate(226deg) translate(210px) rotate(-226deg);
    }

    .deg-270 {
        transform: rotate(271deg) translate(210px) rotate(-271deg);
    }

    .deg-315 {
        transform: rotate(316deg) translate(210px) rotate(-316deg);
    }

}
</style>