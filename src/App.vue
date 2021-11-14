<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
@font-face{
  font-family: 'poppins_bold';
  src: url('./assets/fonts/Poppins_Bold.ttf');
}

@font-face{
  font-family: 'poppins_semibold';
  src: url('./assets/fonts/Poppins_SemiBold.ttf');
}

@font-face{
  font-family: 'poppins_regular';
  src: url('./assets/fonts/Poppins_Regular.ttf');
}

html{
  scroll-behavior: smooth;
}

.title{
  font-family: 'popping_bold';
}

.text{
  font-family: 'poppins_regular';
}

.shadow-set{
  background-color: #000000;
  border: 2px solid #C9C9C9;
  box-shadow: inset -2px 1px 0px 0.5px #FCFCFA, -3px 2px 0px 0.5px #000000;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

::-webkit-scrollbar{
  width: 10px;
}

::-webkit-scrollbar-track-piece{
  background-color: #C9C9C9;
  
}

::-webkit-scrollbar-thumb{
  background: #000000;
  border-radius: 2px;
  transition: 3000ms ease-in;
}

::-webkit-scrollbar-thumb:hover{
  background: #333333;
}

</style>
