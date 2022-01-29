<template>
  <div class="nerostarx-main-container">
    <img src="../assets/icons/main-site.svg" alt="main site" class="main-site-button" @click="goIndex()">
    <kinesis-container class="nerostarx-header">
      <div class="header-content">
        <img src="../assets/images/nerostarx-logo.png" class="logo-main">
        <p class="section-title header-title">Learn how branding and product design meet together here</p>
        <a href="#highlights">
          <kinesis-element :strength="30" type="depth">
              <img src="../assets/icons/downchevron.svg" alt="texture" class="arrow-call">
          </kinesis-element>
        </a>
      </div>
    </kinesis-container>

    <p class="section-title">Highlighted design projects</p>
    <p class="nerostarx-title center">These projects are a mix of my best shots at both the brand identity design 
      and product design. These projects highlight my key capabilities. If you want to know more just click on any highlight.</p>

    <section id="highlights">
      <div class="x-container-full-width">
        <div class="sub-brand-image highlight">
                <img src="../assets/images/emerald_image.jpg" alt="brand_image" class="highlight-image">
                <div class="highlight-button">
                  <x-button  @click="navigate('https://www.behance.net/gallery/135931393/Emerald-design-system')">Learn more</x-button>
                </div>
              </div>
        <div class="y-container-align-left">
          <div class="highlight-container">
              <div class="highlight">
                <img src="../assets/images/neowalls_image.jpg" alt="brand_image" class="highlight-image">
                <div class="highlight-button">
                  <x-button @click="navigate('https://www.behance.net/gallery/124238713/Neowalls-online-wallpaper-mobile-app')">Learn more</x-button>
                </div>
              </div>
              <div class="highlight">
                <img src="../assets/images/daily_adventurer.jpg" alt="brand_image" class="highlight-image">
                <div class="highlight-button">
                  <x-button @click="navigate('https://www.behance.net/gallery/134525865/The-daily-adventurer-brand-identity-design')">Learn more</x-button>
                </div>
              </div>
              <div class="highlight">
                <img src="../assets/images/cse_image.jpg" alt="brand_image" class="highlight-image">
                <div class="highlight-button">
                  <x-button @click="navigate('https://www.behance.net/gallery/133863929/CSE-Brand-identity-refresh')">Learn more</x-button>
                </div>
              </div>
              <div class="highlight">
                <img src="../assets/images/nerostarx_blueprint.jpg" alt="brand_image" class="highlight-image">
                <div class="highlight-button">
                  <x-button @click="navigate('https://www.behance.net/gallery/133633819/Neroxtarx-design-studio-visual-identity')">Learn more</x-button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>

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
import XButton from '../components/XButton.vue'

export default {
    name: "Nerostarx",
    components: {
      GalacticButton,
      XButton,
    },
    methods:{
      goIndex(){
        this.$router.push({path: '/Home'});
      },
      navigate(link){
        window.open(link,"_blank");
      },
      SmoothTop(time){
          setTimeout(()=> {window.scrollTo(0,0)} , time);
      }
    },
    created(){
      this.SmoothTop(700);
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
  color: rgba(6, 11, 80, 0.931);
  
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
}

.header-title{
  color: white;
}

.header-content{
  width: 100%;
  margin: auto;
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
  margin-right: auto;
  margin-left: auto;
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
  color: rgba(6, 11, 80, 0.931);
}

.y-container-align-left>p.nerostarx-text{
  text-align: justify;
  font-size: 1.5em;
  margin-bottom: 20px;
  color: rgba(6, 11, 80, 0.931);
}

.highlight-container{
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.highlight{
  width: 90%;
  height: fit-content;
  display: grid;
  border-radius: 15px;
  box-shadow: 4px 4px 16px 0 rgba(63, 28, 145, 0.233);
  border: 2px solid rgba(255, 255, 255, 0.479);
  margin: 10px;
  padding: 0px;
  transition: 300ms ease-in-out;
}

.highlight:hover{
  box-shadow: 8px 8px 16px 0 rgba(63, 28, 145, 0.418);
  border: 2px solid rgb(255, 255, 255);
}

.highlight-image{
  width: 100%;
  border-radius: 15px;
  margin: 0px;
  grid-column: 1;
  grid-row: 1;
  z-index: 1;
}

.highlight-button{
  width: 100%;
  height: 100%;
  margin: auto;
  border-radius: 15px;
  grid-column: 1;
  grid-row: 1;
  z-index: 3;
  display: grid;
  align-content: center;
  justify-items: center;
  backdrop-filter: blur( 4px );
  opacity: 0;
  transition: 300ms ease-in-out;
}

.highlight-button:hover{
  opacity: 1;
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
    margin-top: 10px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }

  .y-container-align-left{
    width: 100%;
    margin: 0px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .y-container-align-left>p.nerostarx-title{
    font-size: 1.6em;
    margin: 0px;
    margin-top: 25px;
  }

  .y-container-align-left>p.nerostarx-text{
    font-size: 1.1em;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 80%;
  }

  .highlight-container{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .highlight{
    width: 90%;
    margin: 10px;
    margin-right: auto;
    margin-left: auto;
  }

  .sub-brand-image{
    width: 90%;
    border-radius: 15px;
    
  }
}
</style>