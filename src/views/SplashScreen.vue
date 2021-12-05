<template>
  <div class="main-container">
    <kinesis-container v-if="this.screenwidth > 720">
      <kinesis-element :strength="3">
        <img src="../assets/backgrounds/splash_background.svg" alt="" class="background">
      </kinesis-element>
    </kinesis-container>
    <div v-else class="splash-background"></div>
    <x-spinner class="spinner"/>
  </div>
</template>

<script>
import XSpinner from "@/components/XSpinner.vue"
import { KinesisContainer, KinesisElement} from "vue-kinesis"

export default {
    name: "SplashScreen",
    components: {
      XSpinner,
      KinesisContainer,
      KinesisElement
    },
    data(){
      return{
        screenwidth: window.innerWidth,
      }
    },
    methods:{
      setSplashTimeout(time){
          setTimeout(()=> {
              this.$router.push({path: '/Home'});
              } , time);
      }
    },
    created(){
      this.setSplashTimeout(3500)
    }
}
</script>

<style scoped>
.main-container{
  height: 100vh;
  overflow: hidden;
}

.background{
  height: 100%;
  width: 100%;
}

.spinner{
  width: 200px;
  height: 200px;
  position: absolute;
  left: 0; 
  right: 0; 
  bottom: 0;
  top: 0;
  margin-left: auto; 
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
}

@media only screen and (max-width: 720px){
  .background{
    height: 100vh;
    width: max-content;
    overflow: hidden;
  }

  .splash-background{
    width: 100%;
    height: 100%;
    background-image: url('../assets/backgrounds/splash_background.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>