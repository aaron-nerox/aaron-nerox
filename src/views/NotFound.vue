<template>
  <div class="main-notfound-container">
      <img src="../assets/images/chromanion.svg" alt="not found" class="chromanion-art">
      <p class="title main-title">404 Page not found.</p>
      <p class="text main-text">The page you're looking for is not found</p>
      <x-button class="home-btn" @click="goIndex()">Go home</x-button>
  </div>
</template>

<script>
import XButton from '../components/XButton.vue'

export default {
    name: "NotFound",
    components: {
        XButton,
    },
    methods:{
      goIndex(){
        this.$router.push({path: '/'})
      }
    }
}
</script>

<style scoped>
.main-notfound-container{
    width: 100%;
    height: 100vh;
    background-image: url('../assets/backgrounds/splash_background.svg');
    background-repeat: no-repeat;
    background-size: cover;
    display: grid;
    align-content: center;
    justify-items: center;
    text-align: center;
}

.home-btn{
    height: 50px;
}

.main-title{
    font-size: 1.7em;
    margin: 0px;
}

.main-text{
    font-size: 1.3em;
}

.chromanion-art{
    width: 25%;
}

@media only screen and (max-width: 720px){
    .main-notfound-container{
        min-height: 100vh;
        background-size: cover;
    }
    .chromanion-art{
        width: 70%;
        margin: 20px;
    }
}
</style>