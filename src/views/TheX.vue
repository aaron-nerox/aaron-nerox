<template>
  <div class="parent-container">
    <img src="../assets/icons/main-site.svg" alt="main site" class="main-site-button" @click="goIndex()">
    <kinesis-container class="header-thex">
      
      <img src="../assets/images/thex-boxtop.svg" alt="texture" class="thex-logo-box boxtop">
      <img src="../assets/images/thex-boxleft.svg" alt="texture" class="thex-logo-box boxleft">
      <img src="../assets/images/thex-boxright.svg" alt="texture" class="thex-logo-box boxright">

      <kinesis-element class="thex-logo-core-animation" :strength="-200" type="rotate">
        <img src="../assets/images/thex-core.png" alt="texture" class="thex-logo-core">
      </kinesis-element>

      <img src="../assets/images/thex-backbone.svg" alt="texture" class="thex-logo-backbone">
      <kinesis-element class="texture">
        <img src="../assets/backgrounds/thex_background_texture.svg" alt="texture" >
      </kinesis-element>
    </kinesis-container>

    <p class="thex-text center">MADE BY AARON TO BUILD THE UNKNOWN X &#128160;</p>
  </div>
</template>

<script>
export default {
    name: "TheX",
    methods:{
      goIndex(){
        this.$router.push({path: '/'})
      }
    }
}
</script>

<style scoped>
.parent-container{
  background-color: #000;
  color: #FFF;
  display: grid;
}

@font-face {
  font-family: 'montserrat_light';
  src: url('../assets/fonts/Montserrat-Light.ttf');
}

@font-face {
  font-family: 'montserrat_semibold';
  src: url('../assets/fonts/Montserrat-SemiBold.ttf');
}

.thex-title{
  font-family: 'montserrat_semibold';
  font-size: 1.5em;
}

.thex-text{
  font-family: 'montserrat_light';
  font-size: 1.1em;
}

@keyframes floating {
  from {transform: translateY(-10px)}
  to{transform: translateY(5px)}
}

.header-thex{
  height: 100vh;
  width: 100%;
  display: grid;
  background: #000;
  overflow: hidden;
}

.texture{
  width: 85%;
  margin: auto;
  grid-column: 1;
  grid-row: 1;
  z-index: 1;
}

.thex-logo-core-animation{
  width: 10%;
  margin: auto;
  grid-column: 1;
  grid-row: 1;
  z-index: 3;
}

.thex-logo-core{
  width: 100%;
  margin: auto; 
  animation-name: floating;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
  animation-duration: 500ms;
  transition: 300ms ease-in-out;
}

.thex-logo-backbone{
  width: 85%;
  margin: auto;
  grid-column: 1;
  grid-row: 1;
  z-index: 1;
}

.thex-logo-box{
  grid-column: 1;
  grid-row: 1;
  z-index: 4;
  transition: 200ms ease-in-out;
}

.boxtop{
  width: 18.9%;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: auto;
  margin-left: auto;
  transform: translateY(-6px);
}

.boxright{
  width: 17.5%;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: auto;
  margin-left: auto;
  transform: translate(8px,8px);
}

.boxleft{
  width: 17.5%;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: auto;
  margin-left: auto;
  transform: translate(-7px,8px);
}


</style>