<template>
  <div id="parent-container">
    <div id="particles">
      <vue-particles 
      color="#FF720F"
          :particleOpacity="0.6"
          :particlesNumber="90"
          shapeType="triangle"
          :particleSize="4"
          linesColor="#FF720F"
          :linesWidth="1"
          :lineLinked="false"
          :lineOpacity="0.3"
          :linesDistance="170"
          :moveSpeed="3"
          :hoverEffect="false"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"
      ></vue-particles>
    </div>
    <img src="../assets/icons/main-site.svg" alt="main site" class="main-site-button" @click="goIndex()">
    <div id="content">
      <!-- <button @click="goIndex()" class="main-kts-btn">Go back</button> -->
      <div class="header-container">
        <kinesis-container class="kinesis-container">
          <kinesis-element 
              :strength="-4"
              type="rotate"
              originY="100"
              axis="y"
              class="sub-kinesis-container">
            <img src="../assets/images/kitsune-tail3.png" alt="" class="kitsune-logo">
          </kinesis-element>
          <kinesis-element 
                :strength="4"
                type="rotate"
                originY="100"
                axis="y"
                class="sub-kinesis-container">
            <img src="../assets/images/kitsune-tail2.png" alt="" class="kitsune-logo">
          </kinesis-element>
          <kinesis-element 
                :strength="15"
                type="depth"
                transformOrigin="50% 100%"
                class="sub-kinesis-container">
            <img src="../assets/images/kitsune-tail1.png" alt="" class="kitsune-logo">
          </kinesis-element>
        </kinesis-container>
        <p class="kitsune-title main-title">Kitsune</p>
        <p class="kitsune-title sub-main-title">BY AARON</p>
      </div>

      <section class="showroom-section">
        <p class="kitsune-title announcment">Collectibles and art pieces are dropping soon, stay tuned.</p>
      </section>

      <p class="kitsune-text">Summoned by Aaron from the japanease flames &#128293;</p>
    </div>
  </div>
</template>

<script>
export default {
    name: "Kitsune",
    methods:{
      goIndex(){
        this.$router.push({path: '/'})
      }
    }
}
</script>

<style scoped>
@font-face{
  font-family: 'assassin_ninja';
  src: url('../assets/fonts/AssassinNinja.ttf');
}

.kitsune-title{
  font-family: 'assassin_ninja';
  font-size: 1.2em;
}

.kitsune-text{
  font-family: 'assassin_ninja';
  font-size: 1em;
}

.main-title{
  font-size: 4em;
  margin: 0px;
}

.sub-main-title{
  margin: 0px;
}

.header-container{
  overflow: hidden;
}

.main-kts-btn{
  height: 48px;
  width: 150px;
  background: rgba(255,113,31,.25);
  box-shadow: 0 6px 16px 0 rgb(105 41 12 / 37%);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10000px;
  border: 1px solid rgba(255,161,98,.18);
  font-family: 'assassin_ninja';
  font-size: 1.3em;
  color: #fff;
  outline: 0;
  transition: .3s ease-in-out;
}

.main-kts-btn:hover{
  border: 1px solid rgba(255, 145, 101, 0.774);
  box-shadow: 0 6px 16px 0 rgba(68, 23, 2, 0.432);
}

#particles{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
}

#parent-container{
  min-height: 100vh;
  background-image: url('../assets/backgrounds/kitsune_background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  display: grid;
  align-content: center;
  justify-content: center;
  text-align: center;
}

#content{
  z-index: 2;
  min-height: 100vh;
}

.kinesis-container{
  display: grid;
  align-content: center;
  justify-items: center;
}

.sub-kinesis-container{
  grid-column: 1;
  grid-row: 1;
}

.kitsune-logo{
  margin: 10px;
  width: 35%;
}

.showroom-section{
  min-height: 100vh;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  display: grid;
  align-content: center;
  justify-items: center;
}

.announcment{
  font-size: 1.8em;
}
</style>