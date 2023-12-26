<script setup>
import { reactive, ref } from 'vue'
import lineSun from '@/assets/images/line_sun.vue'
import TopLeft from '@/assets/images/background_overlay_top_start.vue'
import Button from '@/components/base/Button.vue'
import AnimatedLogo from '@/components/extended/AnimatedLogo.vue'
import LogoCircle from '@/components/extended/LogoCircle.vue'
import TextBox from '@/components/base/TextBox.vue'

const mainProjects = reactive({
    apps: [
        {
            borderColor: '007FF4',
            bgColor: 'E7F1FF',
            logoImage: ''
        },
        {
            borderColor: '0077C0',
            bgColor: '0077C0',
            logoImage: ''
        },
        {
            borderColor: '00C4DF',
            bgColor: '00C4DF',
            logoImage: ''
        },
        {
            borderColor: '8488BF',
            bgColor: '8488BF',
            logoImage: ''
        },
        {
            borderColor: '12fa21',
            bgColor: '000000',
            logoImage: ''
        },

        {
            borderColor: '7500FE',
            bgColor: 'F1E6FD',
            logoImage: ''
        },
        {
            borderColor: 'FF0000',
            bgColor: 'FFD3D3',
            logoImage: ''
        },

        {
            borderColor: '092947',
            bgColor: '092947',
            logoImage: ''
        },




    ]
})

const positionClasses = ref([
    "deg-0", "deg-45", "deg-90", "deg-135", "deg-180", "deg-225", "deg-270", "deg-315"
])

const scrollDown = () => {
    
}

</script>

<template>
    <div class="w-full h-screen bg-light relative inline-flex flex-col items-center">

        <lineSun class="h-[200px] w-fit absolute right-0 top-[60%]" />
        <TopLeft class="w-1/5 h-fit absolute top-0 left-0" />

        <div class="absolute bottom-[20%] left-[10%]">
            <img src="@/assets/images/top_left_str.svg" alt="">
            <TextBox class="w-[196px] text-sm font-light">
                Click on any icon to find some cool stuff
            </TextBox>
        </div>

        <div class="absolute top-[15%] right-[10%] inline-flex flex-col items-end">
            <TextBox class="max-w-[300px] text-sm font-light">
                The mobile engineer that you won't find anywhere else.
            </TextBox>
            <img src="@/assets/images/bottom_right_str.svg" alt="">
        </div>

        <img src="@/assets/images/main_logo_dark.svg" alt="Main logo" class="w-[300px] h-fit mt-10" />

        <div class="h-[500px] aspect-square relative grid my-10">
            <div class="min-h-[70%] min-w-[70%] grid items-center justify-center m-auto">
                <div class="grid-overlap clock-wise min-w-[55%] min-h-[55%] border-primary border-2 shrink-0"></div>
                <div class="grid-overlap counter-clock-wise min-w-[55%] min-h-[55%] aspect-square border-primary border-2 shrink-0"></div>
                <AnimatedLogo class="grid-overlap w-[90%] m-auto" />
            </div>
            <LogoCircle 
                v-for="project in mainProjects.apps"
                :borderColor="project.borderColor"
                :backgroundColor="project.bgColor"
                :Logo="project.logoImage" 
                sizeClass="small"
                :class="['absolute top-[42.6%] left-[42.6%] block', positionClasses[mainProjects.apps.indexOf(project)]]"
            />      
            
        </div>

        <a href="#about">
            <Button class="w-fit h-[55px] mb-10" :isLightMode="false" @click="scrollDown">
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
   transform:translate(210px)
}

.deg-45 {
   transform:rotate(46deg) translate(210px) rotate(-46deg);
}

.deg-90 {
   transform:rotate(91deg) translate(210px) rotate(-91deg);
}

.deg-135 {
   transform:rotate(136deg) translate(210px) rotate(-136deg);
}

.deg-180 {
   transform:rotate(181deg) translate(210px) rotate(-181deg);
}

.deg-225 {
   transform:rotate(226deg) translate(210px) rotate(-226deg);
}

.deg-270 {
   transform:rotate(271deg) translate(210px) rotate(-271deg);
}

.deg-315 {
   transform:rotate(316deg) translate(210px) rotate(-316deg);
}


</style>