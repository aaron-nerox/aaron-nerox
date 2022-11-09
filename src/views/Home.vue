<template>
  <div class="main-container">
    <x-header />

    <section id="about">
      <x-title mode="light">Who is aaron?</x-title>
        <div class="x-container">
          <img src="../assets/images/main_image.jpg" alt="aaron" class="main-image">
          <div class="side-align full-width">
            <p class="text text-container">I am Haroune Kechaoui (call me Aaron), I am a fresh software engineer 
              and an aspiring mobile engineer/architect. I work currently as an IT consultant. I worked before as 
              a mobile developer using the power of kotlin to bring solutions to life. This page shows a glimps on 
              who am i and what are my skills.</p>
            <x-button class="x-button" @onButtonClick="navigateTo('Home/skills')">Check my skills</x-button>
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

    <section id="android">
      <x-title mode="light">My latest android project</x-title>
      <div class="x-container full-width">
        <img src="../assets/images/promo_neowalls.png" alt="neowalls_cover" class="promo-image"/>
        <div class="side-align">
          <img src="../assets/icons/neowalls_logo_extended.svg" alt="neowalls_logo" class="promo-logo"/>
          <p class="text text-container">Neowalls is a community based online wallpaper app for artists, photographers and customization enthusiasts. 
            The goal of this app is pretty clear, it is made to create a place for creatives 
            to connect and grow a community with people that enjoy creativity.</p>
          <div class="x-container full-width">
            <google-play-button 
            :darkMode="true" 
            applink="https://play.google.com/store/apps/details?id=com.nero.starx.neowalls" 
              availability="GET IT ON" />
              <div class="hr-spacer"></div>
            <x-button class="x-button" @onButtonClick="navigateTo('TheX')">See more work</x-button>
          </div>
        </div>
      </div>
    </section>

    <section id="uiux">
      <x-title mode="light">My all time best UI/UX project</x-title>
      <div class="x-container full-width">
        <img src="../assets/images/promo_emerald.png" alt="emerald_cover" class="promo-image"/>
        <div class="side-align">
          <img src="../assets/icons/emerald_ds_extended.svg" alt="emerald_logo" class="promo-logo"/>
          <p class="text text-container">The need for a design system that bridges the gap between the major 
            mobile operating systems and the web is what made emerald design system a reality.</p>
          <div class="x-container full-width">
            <x-button class="x-button" @onButtonClick="redirect('https://www.behance.net/gallery/135931393/Emerald-design-system')">Check on behance</x-button>
            <div class="hr-spacer"></div>
            <x-button class="x-button" @onButtonClick="navigateTo('Nerostarx')">See more work</x-button>
          </div>
        </div>
      </div>
    </section>

    <section id="branding">
      <x-title mode="light">My best shot at branding</x-title>
      <div class="x-container full-width">
        <img src="../assets/images/aaron_promo.png" alt="aaron_cover" class="promo-image"/>
        <div class="side-align">
          <img src="../assets/icons/aaron_logo.svg" alt="aaron_logo" class="promo-logo"/>
          <p class="text text-container">This brand identity is my newest and most unique one. 
            This brand representes my latest resolve to give people a crystal clear view of both 
            the design and development worlds through the eyes of a student.</p>
          <div class="x-container full-width">
            <x-button class="x-button" @onButtonClick="redirect('https://www.behance.net/gallery/133566979/Aaron-nerox-personal-brand-identity')">Check on behance</x-button>
            <div class="hr-spacer"></div>
            <x-button class="x-button" @onButtonClick="navigateTo('Nerostarx')">See more work</x-button>
          </div>
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
import GooglePlayButton from '../components/GooglePlayButton.vue'

export default {
  name: 'Home',
  components: {
    XHeader,
    XTitle,
    XButton,
    GooglePlayButton,
    XFooter,
  },
  methods:{
    navigateTo(path){
      this.$router.replace({path: '/'+path});
    },
    redirect(link){
      window.open(link,"_blank")
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

.hr-spacer{
  width: 15px;
}

#about{
  background-image: url('../assets/backgrounds/background_section1.svg');
}

#work{
  background-image: url('../assets/backgrounds/background_section2.svg');
}

#android{
  background-image: url('../assets/backgrounds/background_section3.svg');
  background-position-y: bottom;
}

#uiux{
  background-image: url('../assets/backgrounds/background_section3_inverted.svg');
  background-position-y: 0%;
  
}

#branding{
  background-image: url('../assets/backgrounds/background_section3.svg');
  background-position-y: bottom;
  padding-bottom: 20px;
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

.full-width{
  width: 95%;
}

.promo-image{
  width: 55%;
  margin: 0px;
}

.promo-logo{
  width: 50%;
  margin-left: 10px;
}

.side-align{
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
}

.main-image{
  width: 25%;
  border-radius: 15px;
  margin: 15px;
  border: 1px solid #000000;
  box-shadow: -5px 5px 0px 0.5px #C9C9C9;
}

.x-button{
  width: 70%;
  padding-top: 5px;
  padding-bottom: 5px;
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
  .hr-spacer{
    height: 15px;
  }

  .text-container{
    text-align: center;
    width: 100%
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

  .x-button{
    min-width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 0px;
  }

  #android{
    padding-top: 15px;
    height: max-content;
  }

  #uiux{
    padding-top: 15px;
    padding-bottom: 25px;
    height: max-content;
  }

  #branding{
    padding-top: 15px;
    height: max-content;
  }

  .main-image{
    width: 95%;
    margin: 0px;
  }

  .full-width{
    width: 90%;
  }

  .promo-image{
    width: 100%;
    margin: 0px;
  }

  .promo-logo{
    display: none;
  }

  .side-align{
    margin-top: 20px;
    margin-bottom: 20px;
    width: 90%;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }

  .light-grid-work{
    max-width: 90%;
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
    height: fit-content;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }

  .light-grid-contact{
    min-width: 90%;
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
    width: 20%;
    margin: 10px;
  }
}


</style>
