<template>
  <div class="main-container">
    <x-header />

    <section id="about">
      <x-title mode="light">Who is aaron?</x-title>
      <div class="x-container">
        <div class="y-container">
          <img src="../assets/images/main_image.jpg" alt="aaron" class="main-image">
          <x-button class="x-button" @onButtonClick="navigateTo('Home/skills')">Check my skills</x-button>
        </div>
        <div class="text-container">
          <p class="text">I am Kechaoui Haroune (aka Aaron), I am a computer science student perusing a masters degree. I work as a mobile developer and brand identity designer with some UI/UX.  
                I am on a mission to show people the world of design and development through the perspective of a student.</p>
        </div>
      </div>
    </section>

    <section id="work">
      <x-title mode="dark">What i do?</x-title>
      <div class="x-container">
        <div class="light-grid-work">
          <div class="light-inner-work">
            <img src="../assets/icons/android_kotlin.svg" alt="tech logo" class="tech-logo">
            <p class="text">I am an android developer with experience of 4 years. In order to achieve beautiful apps, i use either java or kotlin combined with best practices.</p>
          </div>
        </div>
        <div class="light-grid-work">
          <div class="light-inner-work">
            <img src="../assets/icons/vuejs.svg" alt="tech logo" class="tech-logo">
            <p class="text">I work on front end web a lot. And in order for me to get creative with it, i chose Vuejs framework to create unique and unparalleled experiences on the web.</p>
          </div>
        </div>
        <div class="light-grid-work">
          <div class="light-inner-work">
            <img src="../assets/icons/design.svg" alt="tech logo" class="tech-logo">
            <p class="text">I worked on brand identity design for more than 4 years. i always try to stand out with my ideas even though it is a bit hard, it is always worth the shot.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="brands-nerostarx">
      <br>
      <x-title mode="light">Brands i created for work</x-title>
      <div class="x-container-full-width">
        <img src="../assets/images/nerostarx_image.jpg" alt="brand_image" class="sub-brand-image" id="nerostarx-brand">
        <div class="y-container-align-left">
          <p class="title">Nerostarx</p>
          <p class="text">Nerostarx is a brand that is made to empower young brand designers and brand strategists. It focuses on brand stories and brand visual identities. It also shows you how  construct a brand only from a given story and the strategies to do that.</p>
          <x-button @onButtonClick="navigateTo('Nerostarx')">Check my brandfolio</x-button>
        </div>
      </div>
    </section>

    <section id="brands-kitsune">
      <div class="x-container-full-width">
        <div class="y-container-align-right">
          <p class="title">Kitsune</p>
          <p class="text">Kitsune is my newest brand, it focuses on art and creating supernatural characters. it also focuses on creating collectibles like custom emojis, imaginary creatures and more of that good art.</p>
          <x-button @onButtonClick="navigateTo('Kitsune')">Check my creations</x-button>
        </div>
        <img src="../assets/images/kitsune_image.jpg" alt="brand_image" class="sub-brand-image-right" id="kitsune-brand">
      </div>
    </section>

    <section id="brands-thex">
      <div class="x-container-full-width">
        <img src="../assets/images/thex_image.jpg" alt="brand_image" class="sub-brand-image" id="nerostarx-brand">
        <div class="y-container-align-left">
          <p class="title">The X</p>
          <p class="text">Since kitsune and nerostarx are my artistic and strategic side. I decided to show off my developer side in the form of The X. The X is a brand that focuses on developing android and web apps while teaching tips and tricks to people.</p>
          <x-button @onButtonClick="navigateTo('TheX')">Check my app list</x-button>
        </div>
      </div>
    </section>

    <section id="contact">
      <x-title mode="dark">Contact me</x-title>
      <div class="x-container">
        <div class="light-grid-contact">
          <div class="light-inner-contact">
            <img src="../assets/icons/message.svg" alt="tech logo" class="contact-logo">
            <p class="text">If you need me to help you create a unique mobile experience for your users or you want a brand identity to be the face of your company, send me an email and we will chat about it.</p>
            <x-button @onButtonClick="sendMail">Send me a message</x-button>
          </div>
        </div>
        <div class="light-grid-contact">
          <div class="light-inner-contact">
            <img src="../assets/icons/call.svg" alt="tech logo" class="contact-logo">
            <p class="text">If you need a special request or you need a fast response, there is no better than the phone. Don't hesitate to call and chat over what you want, i am sure that we'll get a great deal.</p>
            <x-button @onButtonClick="call">call: +213 540 16 01 73</x-button>
          </div>
        </div>
      </div>
    </section>

    <x-footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import XFooter from '../components/XFooter.vue'
import XHeader from '../components/XHeader.vue'
import XTitle from '../components/XTitle.vue'
import XButton from '../components/XButton.vue'

export default {
  name: 'Home',
  components: {
    XHeader,
    XTitle,
    XButton,
    XFooter,
  },
  methods:{
    navigateTo(path){
      this.$router.replace({path: '/'+path});
    },
    call(){
      window.open('tel:+213540160173')
    },
    sendMail(){
      window.open('mailto:kechaoui.haroune@gmail.com')
    }

  }
}
</script>

<style scoped>
.main-container{
  width: 100%;
}

section{
  padding: 20px;
  margin: 0px;
  min-height: 80vh;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
}

#about{
  background-image: url('../assets/backgrounds/background_section1.svg');
}

#work{
  background-image: url('../assets/backgrounds/background_section2.svg');
}

#brands-nerostarx{
  padding: 0px;
  height: 100vh;
  background-image: url('../assets/backgrounds/background_section3.svg');
}

#brands-kitsune{
  margin-left: auto;
  padding: 0px;
  height: 100vh;
  background-image: url('../assets/backgrounds/background_section3_inverted.svg');
}

#brands-thex{
  padding: 0px;
  height: 100vh;
  background-image: url('../assets/backgrounds/background_section3.svg');
}

#contact{
  background-image: url('../assets/backgrounds/background_section4.svg');
}

.x-container{
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
}

.x-container-work{
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
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

.y-container{
  min-width: 30%;
  width: 30%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}

.text-container{
  padding: 15px;
  margin: 15px;
  border-radius: 15px;
  background-color: #000000;
  color: #FCFCFA;
  font-size: 1.2em;
  text-align: left;
  border: 2px solid #C9C9C9;
  box-shadow: inset -2px 2px 0px 0.5px #FCFCFA, -3px 3px 0px 0.5px #000000;
}

.main-image{
  width: 70%;
  border-radius: 15px;
  margin: 15px;
  border: 1px solid #000000;
  box-shadow: -5px 5px 0px 0.5px #C9C9C9;
}

.x-button{
  width: 70%;
}

.light-grid-work{
  max-width: 23%;
  display: grid;
  grid-template-columns: auto auto auto;
  text-align: center;
  background-color: #FCFCFA;
  margin-right: auto;
  margin-left: auto;
  padding: 10px;
  border-radius: 15px;
  border: 2px solid #C9C9C9;
  box-shadow: inset -2px 2px 0px 0.5px #000000, -3px 3px 0px 0.5px #FCFCFA;
  transition: 300ms ease-in-out;
}

.light-grid-work:hover{
  transform: translate(0px, -10px);
}

.light-inner-work{
  height: 50vh;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}

.tech-logo{
  width: 50%;
}

.sub-brand-image{
  width: 50%;
  left: 0;
  border: 2px solid #FCFCFA;
  border-left: none;
  box-shadow: -4px 4px 0px 0.5px #C9C9C9;
}

.sub-brand-image-right{
  width: 50%;
  right: 0;
  border: 2px solid #FCFCFA;
  border-right: none;
  box-shadow: -4px 4px 0px 0.5px #C9C9C9;
}

#nerostarx-brand{
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

#kitsune-brand{
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}

.y-container-align-left{
  width: 35%;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
  margin: 35px;
}

.y-container-align-left>p.title{
  font-size: 2.3em;
  margin: 0px;
}

.y-container-align-left>p.text{
  font-size: 1.2em;
  margin-top: 20px;
  margin-bottom: 20px;
}

.y-container-align-right{
  width: 35%;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: end;
  margin: 35px;
  margin-left: auto;
}

.y-container-align-right>p.title{
  font-size: 2.3em;
  margin: 0px;
}

.y-container-align-right>p.text{
  font-size: 1.2em;
  margin-top: 20px;
  margin-bottom: 20px;
}

.light-grid-contact{
  max-width: 40%;
  display: grid;
  grid-template-columns: auto auto;
  text-align: center;
  background-color: #FCFCFA;
  margin-right: auto;
  margin-left: auto;
  padding: 10px;
  border-radius: 15px;
  border: 2px solid #C9C9C9;
  box-shadow: inset -2px 2px 0px 0.5px #000000, -3px 3px 0px 0.5px #FCFCFA;
  transition: 300ms ease-in-out;
}

.light-inner-contact{
  height: 45vh;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}

.contact-logo{
  width: 15%;
  margin: 10px;
}

@media only screen and (max-width: 720px){
  .text-container{
    text-align: center;
  }
  .x-container{
    width: 95%;
    margin-top: 10px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }

  .y-container{
    min-width: 50%;
    width: 90%;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }

  #brands-nerostarx{
    padding: 0px;
    height: max-content;
    background-image: url('../assets/backgrounds/background_section3.svg');
  }

  #brands-kitsune{
    margin-top: 15px;
    padding: 0px;
    padding-bottom: 25px;
    height: max-content;
    background-image: url('../assets/backgrounds/background_section3_inverted.svg');
  }

  #brands-thex{
    padding: 0px;
    height: max-content;
    background-image: url('../assets/backgrounds/background_section3.svg');
  }

  .light-grid-work{
    max-width: 80%;
    display: grid;
    grid-template-columns: auto;
    text-align: center;
    background-color: #FCFCFA;
    margin: 15px;
    margin-right: auto;
    margin-left: auto;
    padding: 10px;
    border-radius: 15px;
    border: 2px solid #C9C9C9;
    box-shadow: inset -2px 2px 0px 0.5px #000000, -3px 3px 0px 0.5px #FCFCFA;
    transition: 300ms ease-in-out;
  }

  .light-inner-work{
    height: 50vh;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }

  .light-grid-contact{
    min-width: 80%;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
  }

  .light-inner-contact{
    height: fit-content;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }

  .contact-logo{
    width:35%;
    margin: 0px;
  }

  .x-container-full-width{
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 30px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }

  .y-container-align-left{
    width: 95%;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 35px;
  }

  .y-container-align-left>p.title{
    font-size: 2.3em;
    margin: 0px;
  }

  .y-container-align-left>p.text{
    font-size: 1.2em;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .y-container-align-right{
    width: 95%;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 35px;
    margin-left: auto;
    margin-right: auto;
  }

  .y-container-align-right>p.title{
    font-size: 2.3em;
    margin: 0px;
  }

  .y-container-align-right>p.text{
    font-size: 1.2em;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .sub-brand-image{
    width: 80%;
    border: 2px solid #FCFCFA;
    box-shadow: -4px 4px 0px 0.5px #C9C9C9;
  }

  .sub-brand-image-right{
    width: 80%;
    border: 2px solid #FCFCFA;
    box-shadow: -4px 4px 0px 0.5px #C9C9C9;
  }

  #nerostarx-brand{
    border-radius: 15px;
  }

  #kitsune-brand{
    border-radius: 15px;
  }

  .contact-logo{
    width: 25%;
    margin: 0px;
    margin-top: 4px;
  }
}


</style>
