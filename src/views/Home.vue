<template>
  <div class="main-container">
    <x-header />
    <section id="about">
      <x-title mode="light">Who is aaron?</x-title>
      <div class="x-container">
        <div class="y-container">
          <img src="../assets/images/main_image.jpg" alt="aaron" class="main-image">
          <x-button>Check my skills</x-button>
        </div>
        <div class="text-container">
          <p class="text">I am Kechaoui Haroune (aka Aaron), I am a computer science student perusing a masters degree. I work as a mobile developer and brand identity designer with some UI/UX.  
                I am on a mission to show people the world of design and development through the perspective of a student.</p>
        </div>
      </div>
    </section>

    <section id="work">
      <x-title mode="dark">What i do?</x-title>
    </section>

    <section id="brands-nerostarx">
      <x-title mode="light">Brands i created for work</x-title>
    </section>

    <section id="brands-kitsune">

    </section>

    <section id="brands-thex">

    </section>

    <section id="contact">
      <x-title mode="dark">Contact me</x-title>
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
  background-image: url('../assets/backgrounds/background_section3.svg');
}

#brands-kitsune{
  background-image: url('../assets/backgrounds/background_section3_inverted.svg');
}

#brands-thex{
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

.y-container{
  min-width: 30%;
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
  width: 60%;
  border-radius: 15px;
  margin: 15px;
  border: 1px solid #000000;
  box-shadow: -3px 3px 0px 0.5px #C9C9C9;
}
</style>
