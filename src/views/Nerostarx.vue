<template>
  <img src="../assets/icons/main-site.svg" alt="main site" class="main-site-button" @click="goIndex()">
  <div class="nerostarx-main-container">
    <kinesis-container class="nerostarx-header">
      <div class="header-content">
        <img src="../assets/images/nerostarx-logo.png" class="logo-main">
        <p class="nerostarx-title section-title">Learn how branding and product design meet together here</p>
        <a href="#aaron">
          <kinesis-element :strength="30" type="depth">
              <img src="../assets/icons/downchevron.svg" alt="texture" class="arrow-call">
          </kinesis-element>
        </a>
      </div>
    </kinesis-container>

    <p class="nerostarx-title section-title">Best brands that i crafted with love</p>

    <section id="aaron">
      <div class="x-container-full-width">
        <img src="../assets/images/aaron_image.jpg" alt="brand_image" class="sub-brand-image" id="nerostarx-brand">
        <div class="y-container-align-left">
          <p class="nerostarx-title">Aaron Nerox</p>
          <p class="nerostarx-text">This brand identity is my newest and most unique one. This brand representes my 
            latest resolve to give people a crystal clear view of both the design and development worlds through 
            the eyes of a student. The style and colors reflect how i see the world, it is just magestic in 
            monochromatic colors.</p>
          <galactic-button @click="navigate('https://www.behance.net/gallery/133566979/Aaron-nerox-personal-brand-identity')">Check on behance</galactic-button>
        </div>
      </div>
    </section>

    <br><br>

    <section id="thex">
      <div class="x-container-full-width">
        <img src="../assets/images/thex_image.jpg" alt="brand_image" class="sub-brand-image" id="nerostarx-brand">
        <div class="y-container-align-left">
          <p class="nerostarx-title">The X by aaron</p>
          <p class="nerostarx-text">The x by aaron brand has an interesting story. It inherited the beautiful
             inner cube gradient from nerostarx, and it means that i support a diverse range of things. the 
             insides of the cube are invisible to say that there is always something unknown and i call that "The X". </p>
          <galactic-button @click="navigate('https://www.behance.net/gallery/133711717/The-X-Developer-studio-brand-design')">Check on behance</galactic-button>
        </div>
      </div>
    </section>

    <br><br>

    <section id="kitsune">
      <div class="x-container-full-width">
        <img src="../assets/images/kitsune_image.jpg" alt="brand_image" class="sub-brand-image" id="nerostarx-brand">
        <div class="y-container-align-left">
          <p class="nerostarx-title">Kitsune by aaron</p>
          <p class="nerostarx-text">This brand is designed to be familiar to supernatural artists. It 
            is based around the kitsune legend from japan which is a really interesting one to read about.</p>
          <galactic-button>Soon on behance</galactic-button>
        </div>
      </div>
    </section>

    <br><br>

    <section id="thestarwberry">
      <div class="x-container-full-width">
        <img src="../assets/images/strawberry_image.jpg" alt="brand_image" class="sub-brand-image" id="nerostarx-brand">
        <div class="y-container-align-left">
          <p class="nerostarx-title">The strawberry store</p>
          <p class="nerostarx-text">A fun project that i made in my free time. It is all about a store 
            that sells a wide range of traditional and modern strawberry flavored milk drinks. The combination 
            of traditional and modern is shown in the style of the logo and its colors.</p>
          <galactic-button>Soon on behance</galactic-button>
        </div>
      </div>
    </section>

    <br><br>
    <div class="nerostarx-footer">
      <p class="nerostarx-title center">Creafted from ⚝ by aaron</p>
    </div>
  </div>
</template>

<script>
import GalacticButton from '../components/GalacticButton.vue'

export default {
    name: "Nerostarx",
    components: {
      GalacticButton,
    },
    methods:{
      goIndex(){
        this.$router.push({path: '/'})
      },
      navigate(link){
        window.open(link,"_blank")
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

.nerostarx-main-container{
  min-height: 100vh;
  width: 100%;
  height: fit-content;
  background-image: url('../assets/backgrounds/nerostarx-white-background.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

.nerostarx-header{
  height: 100vh;
  width: 100%;
  background-image: url('../assets/backgrounds/nerostarx_background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  align-content: center;
  justify-items: center;
  overflow: hidden;
  color: white;
}

.header-content{
  width: 100%;
  margin: auto;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  
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

.logo-main{
  width: 40%;
  margin-bottom: 45px;
  transition: 300ms ease-in-out;
}

.logo-main:hover{
  width: 45%;
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

section{
  background-color: transparent;
  width: 100%;
  display: grid;
}

.x-container-full-width{
  width: 95%;
  min-height: 80%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
}

.y-container-align-left{
  width: 55%;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
  margin-left: 25px;
}

.y-container-align-left>p.nerostarx-title{
  font-size: 2.5em;
  margin: 0px;
}

.y-container-align-left>p.nerostarx-text{
  text-align: justify;
  font-size: 1.5em;
  margin-bottom: 20px;
}

.sub-brand-image{
  width: 45%;
  border-radius: 15px;
  box-shadow: 4px 4px 16px 0 rgba(63, 28, 145, 0.233);
  border: 2px solid rgba(255, 255, 255, 0.479);
}

.nerostarx-footer{
  display: grid;
  height: 70px;
  background-image: url('../assets/backgrounds/nerostarx_background.jpg');
  background-size: cover;
  margin: 0px;
  color: white;
}

.nerostarx-footer p{
  margin: auto;
}

@media only screen and (max-width: 720px){

  section{
    margin-right: auto;
    margin-left: auto;
  }

  .nerostarx-header p{
    width: 80%;
  }
  
  .nerostarx-main-container{
    background-position-x: 50%;
    width: 100%;
  }

  .logo-main{
    width: 80%;
    margin-bottom: 45px;
    transition: 300ms ease-in-out;
  }

  .animation-container{
    width: 90%;
    margin: auto;
    z-index: 1;
    grid-column: 1;
    grid-row: 1;
  }

  .nerostarx-text{
    font-family: 'modulus_bold';
    font-size: 1em;
  }

  .nerostarx-title{
    font-family: 'modulus_bold';
    font-size: 1.3em;
  }

  .section-title{
    font-family: 'modulus_bold';
    font-size: 1.6em;
    text-align: center;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  }

  .arrow-call{
    width: 100px;
    margin: 20px;
    margin-right: auto;
    margin-left: auto;
    animation-name: floating;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
    animation-duration: 500ms;
  }

  .x-container-full-width{
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    min-height: 80%;
    margin-top: 10px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }

  .y-container-align-left{
    width: 90%;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 35px;
  }

  .y-container-align-left>p.nerostarx-title{
    font-size: 1.6em;
    margin: 0px;
  }

  .y-container-align-left>p.nerostarx-text{
    font-size: 1.1em;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 90%;
  }

  .sub-brand-image{
    width: 90%;
    border-radius: 15px;
    
  }
}
</style>