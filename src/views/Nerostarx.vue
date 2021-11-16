<template>
  <div>
    <img src="../assets/icons/main-site.svg" alt="main site" class="main-site-button" @click="goIndex()">
    <div class="nerostarx-header">
      <img src="../assets/images/nerostarx-logo.png" class="nerostarx-main-logo">
      <kinesis-container class="animation-container">
        <kinesis-element :strength="50">
          <img src="../assets/backgrounds/nerostarx_background_texture.svg" alt="texture">
        </kinesis-element>
      </kinesis-container>
    </div>
    <p class="nerostarx-text center">Creafted from ⚝ by aaron</p>
  </div>
</template>

<script>
export default {
    name: "Nerostarx",
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

.nerostarx-header{
  height: 100vh;
  width: 100%;
  background-image: url('../assets/backgrounds/nerostarx_background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
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

.nerostarx-main-logo{
  width: 40%;
  margin: auto;
  z-index: 3;
  grid-column: 1;
  grid-row: 1;
  transition: 300ms ease-in-out;
}

.nerostarx-main-logo:hover{
  width: 43%;
}

.animation-container{
  width: 100%;
  height: 100vh;
  margin: auto;
  z-index: 1;
  grid-column: 1;
  grid-row: 1;

}
</style>