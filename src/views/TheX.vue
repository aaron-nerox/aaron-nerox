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
    <br><br>
    <p class="thex-title center">MY ANDROID APPS</p>
    <br>
    <section class="app-section">
      <div class="app-section-container">
        <img src="../assets/icons/airsort.png" alt="app icon" class="app-icon">
        <div class="app-details">
          <p class="thex-title">Airsort: Create your own organized canvas</p>
          <p class="thex-text">Airsot is a beautiful gallery app. Made for the sol purpose of helping the users better organize thier gallery.</p>
          <p class="thex-text">Airsot provides it's users with a secure folder to hide media, it also gives you a set of shortcuts to create better organized folders.</p>
          <google-play-button applink="https://play.google.com/store/apps/details?id=com.nero.starx.airsort" 
          availability="GET IT ON" />
        </div>
      </div>
      <br><br>
      <div class="app-section-container">
        <img src="../assets/icons/neowalls.png" alt="app icon" class="app-icon">
        <div class="app-details">
          <p class="thex-title">Neowalls: An online wallpaper platforme</p>
          <p class="thex-text">If you came looking for wallpapers, Neowalls provides you with a growing collection of beautiful wallpapers.</p>
          <p class="thex-text">If you are a designer, Artist Or a photographer Neowalls has a good place for you, where you will be able to share your work and your social media to build and grow your community.</p>
          <p class="thex-text">Neowalls gives you the possibility to download or save for later any wallpaper you want.</p>
          <google-play-button applink="https://play.google.com/store/apps/details?id=com.nero.starx.neowalls" 
          availability="GET IT ON" />
        </div>
      </div>
    </section>
    <br><br>
    <p class="thex-text center">MADE BY AARON TO BUILD THE UNKNOWN X &#128160;</p>
  </div>
</template>

<script>
import GooglePlayButton from "../components/GooglePlayButton.vue"

export default {
    name: "TheX",
    components: {
      GooglePlayButton
    },
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
  width: 16.5%;
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

.app-section{
  min-height: 100vh;
  width: 80%;
  margin-left: auto;
  margin-right: auto;

}

.app-section-container{
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.app-icon{
  width: 25%;
  margin: 40px;
}

@media only screen and (max-width: 720px){
  .texture{
    display: none;
  }

  .thex-logo-core-animation{
    width: 30%;
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
    width: 50%;
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
    width: 56.5%;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
    margin-left: auto;
    transform: translateY(-6px);
  }

  .boxright{
    width: 53%;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
    margin-left: auto;
    transform: translate(7.5px,7.5px);
  }

  .boxleft{
    width: 53%;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
    margin-left: auto;
    transform: translate(-6.5px,7.5px);
  }

  .app-section{
    min-height: 100vh;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .app-section-container{
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .app-icon{
    width: 45%;
    margin: 0px;
    margin-top: 40px;
  }


}
</style>