<script setup>
/** vue imports */
import { ref } from 'vue'

/** Section imports */
import Header from './sections/Header.vue'
import About from './sections/About.vue'
import Services from './sections/Services.vue'
import Contributions from './sections/Contributions.vue'
import Contact from './sections/Contact.vue'
import Footer from './sections/Footer.vue'

/** Component imports */
import IconButton from '@/components/base/IconButton.vue'
import Menu from '@/components/navigation/Menu.vue'


const isMenuOpen = ref(false);

const updateMenu = ()=>{
    isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
    <Transition name="fade">
        <div class="w-full h-screen max-h-screen md:overflow-y-auto">
            <Teleport to="body">
                <Menu 
                    :open="isMenuOpen"
                    @dissmiss="updateMenu" />
            </Teleport>

            <IconButton 
                v-if="!isMenuOpen"
                src="menu" 
                class="bg-black-diamond fixed top-5 right-5 z-40"
                    @click="updateMenu"/>

            <IconButton 
                v-else
                src="close" 
                class="bg-black-diamond fixed top-5 right-5 z-40"
                    @click="updateMenu"
                    />

            <Header />
            <About />
            <Services />
            <Contributions />
            <!-- <Contact /> -->

            <Footer />
        </div>
    </Transition>
</template>