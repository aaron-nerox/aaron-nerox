<template>
  <div>
    <img src="../assets/icons/main-site.svg" alt="main site" class="main-site-button" @click="goIndex()">
    <div class="nerostarx-header">
      <div class="nerostarx-main-logo">
        <img src="../assets/images/nerostarx-logo.png" class="logo-main">
        <a href="#aaron">
          <img src="../assets/icons/down-arrow-nerostarx.png" alt="texture" class="arrow-call">
        </a>
      </div>
      <kinesis-container class="animation-container">
        <kinesis-element :strength="50">
          <img src="../assets/backgrounds/nerostarx_background_texture.svg" alt="texture">
        </kinesis-element>
      </kinesis-container>
    </div>
    <br><br>
    <p class="nerostarx-title section-title">Most liked brands that i created</p>
    <section id="aaron">
      <div class="x-container-full-width">
        <img src="../assets/images/aaron_image.jpg" alt="brand_image" class="sub-brand-image" id="nerostarx-brand">
        <div class="y-container-align-left">
          <p class="nerostarx-title">Aaron Nerox</p>
          <p class="nerostarx-text">Since kitsune and nerostarx are my artistic and strategic side. I decided to show off my developer side in the form of The X. The X is a brand that focuses on developing android and web apps while teaching tips and tricks to people.</p>
          <x-button>Soon on behance</x-button>
        </div>
      </div>
    </section>
    <br><br>
    <section id="thex">
      <div class="x-container-full-width">
        <img src="../assets/images/thex_image.jpg" alt="brand_image" class="sub-brand-image" id="nerostarx-brand">
        <div class="y-container-align-left">
          <p class="nerostarx-title">The X by aaron</p>
          <p class="nerostarx-text">Since kitsune and nerostarx are my artistic and strategic side. I decided to show off my developer side in the form of The X. The X is a brand that focuses on developing android and web apps while teaching tips and tricks to people.</p>
          <x-button>Soon on behance</x-button>
        </div>
      </div>
    </section>
    <br><br>
    <section id="kitsune">
      <div class="x-container-full-width">
        <img src="../assets/images/kitsune_image.jpg" alt="brand_image" class="sub-brand-image" id="nerostarx-brand">
        <div class="y-container-align-left">
          <p class="nerostarx-title">Kitsune by aaron</p>
          <p class="nerostarx-text">Since kitsune and nerostarx are my artistic and strategic side. I decided to show off my developer side in the form of The X. The X is a brand that focuses on developing android and web apps while teaching tips and tricks to people.</p>
          <x-button>Soon on behance</x-button>
        </div>
      </div>
    </section>
    <br><br>
    <section id="thestarwberry">
      <div class="x-container-full-width">
        <img src="../assets/images/strawberry_image.jpg" alt="brand_image" class="sub-brand-image" id="nerostarx-brand">
        <div class="y-container-align-left">
          <p class="nerostarx-title">The strawberry store</p>
          <p class="nerostarx-text">Since kitsune and nerostarx are my artistic and strategic side. I decided to show off my developer side in the form of The X. The X is a brand that focuses on developing android and web apps while teaching tips and tricks to people.</p>
          <x-button>Soon on behance</x-button>
        </div>
      </div>
    </section>
    <br><br>
    <p class="nerostarx-text center">Creafted from ⚝ by aaron</p>
  </div>
</template>

<script>
import XButton from '../components/XButton.vue'

export default {
    name: "Nerostarx",
    components: {
      XButton,
    },
    methods:{
      goIndex(){
        this.$router.push({path: '/'})
      }
    }
}
</script>

<style scoped>
@font-face {
  font-family: 'modulus';
  src: url('../assets/fonts/Modulus_Medium.ttf');
}

@font-face {
  font-family: 'modulus_bold';
  src: url('../assets/fonts/Modulus_Bold.otf');
}

@keyframes floating {
  from {transform: translateY(-10px)}
  to{transform: translateY(5px)}
}

.nerostarx-header{
  max-height: 100vh;
  width: 100%;
  background-image: url('../assets/backgrounds/nerostarx_background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  align-content: center;
  justify-items: center;
  overflow: hidden;
}

.nerostarx-text{
  font-family: 'modulus_bold';
  font-size: 1.2em;
}

.nerostarx-title{
  font-family: 'modulus_bold';
  font-size: 1.7em;
}

.section-title{
  font-family: 'modulus_bold';
  font-size: 2.3em;
  text-align: center;
}

.nerostarx-main-logo{
  width: 100%;
  margin: auto;
  z-index: 3;
  grid-column: 1;
  grid-row: 1;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  
}

.logo-main{
  width: 40%;
  margin-bottom: 45px;
  transition: 300ms ease-in-out;
}

.logo-main:hover{
  width: 45%;
}


.animation-container{
  width: 100%;
  margin: auto;
  z-index: 1;
  grid-column: 1;
  grid-row: 1;

}

.arrow-call{
  width: 100px;
  margin: 20px;
  margin-right: auto;
  margin-left: auto;
  grid-column: 1;
  grid-row: 1;
  z-index: 3;
}

.arrow-call:hover{
  animation-name: floating;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
  animation-duration: 500ms;
}

.x-container-full-width{
  width: 100%;
  min-height: 80%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
}

.y-container-align-left{
  width: 40%;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
  margin: 35px;
}

.y-container-align-left>p.nerostarx-title{
  font-size: 2.5em;
  margin: 0px;
}

.y-container-align-left>p.nerostarx-text{
  font-size: 1.5em;
  margin-top: 20px;
  margin-bottom: 20px;
}

.sub-brand-image{
  width: 50%;
  left: 0;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left: none;
  box-shadow: -4px 7px 16px 1px rgba(255, 209, 156, 0.46);
}
</style>