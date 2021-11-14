<template>
  <div class="main-container">
    <x-header />
    <section id="about">
      <x-title mode="light">Who is aaron?</x-title>
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

export default {
  name: 'Home',
  components: {
    XHeader,
    XTitle,
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
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
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
</style>
