<script setup>
import { reactive, onMounted } from 'vue';
import { RouterView } from 'vue-router'


const githubLink = reactive({console_link: "https://github.com/aaron-nerox"})

onMounted(()=>{
  console.log(`
  \n
  ~(˘▾˘~) ~(˘▾˘~) 
  \n
  Heey we have a curious cat here 🐱, hi there, how are you? If you came to see the code, then welcome, i hope you enjoy your stay here in the dev tools. But don't just go like that, go give me a follow and some stars on github ${githubLink.console_link} See ya around my friend ☪ .`)
})
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition name="fade">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #ffffff;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #3CCCFF;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #07acff;
}
</style>
