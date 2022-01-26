<template>
  <div class="main-container">
      <kinesis-container class="animations-container">
          <div class="logo-background">
            <kinesis-element :strength="15">
              <img src="../assets/images/main_header_upper_logo.svg" alt="header_image">
            </kinesis-element>
          </div>
          <div class="cta-wrapper large-text">
            <a href="#about" class="button-container">Explore my protfolio</a>
          </div>
      </kinesis-container>
  </div>
</template>

<script>
import { KinesisContainer, KinesisElement} from "vue-kinesis"

export default {
    name: "XHeader",
    components: {
      KinesisContainer,
      KinesisElement,
    }
}
</script>

<style scoped>
.main-container{
  height: 100vh;
  width: 100%;
  margin: 0px;
  background: url('../assets/backgrounds/header_background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  display: grid;
  align-content: center;
  justify-items: center;
  overflow: hidden;
}

.animations-container{
  margin-top: 5%; 
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}

.logo-background{
  margin-right: auto;
  margin-left: auto;
  width: 70%;
  background-image: url('../assets/images/main_header_logo.svg');
  background-repeat: no-repeat;
  background-size: contain;
  padding-right: 15px;
  padding-bottom: 21px;

}

.cta-wrapper{
  width: fit-content;
  margin: 100px;
  margin-right: auto;
  margin-left: auto;
  transition: 200ms ease-in-out;
}

.cta-wrapper:hover{
  transform: translate(0px, -4px);
}

.large-text{
  font-size: 1.3em;
}

.button-container{
  padding-right: 40px;
  padding-left: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  outline: none;
  border: none;
  text-decoration: none;
  width: fit-content !important;
  background-color: #000000;
  color: #FCFCFA;
  font-family: 'poppins_semibold';
  border-radius: 1000px;
}

@media only screen and (max-width: 720px){
  .main-container{
    height: 100vh;
    width: 100%;
    margin: 0px;
    background: url('../assets/backgrounds/header_mobile_background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    display: grid;
    align-content: center;
    justify-items: center;
    overflow: hidden;
  }

  .animations-container{
    margin-top: 5%; 
    width: 95%;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
  }

  .logo-background{
    margin-right: auto;
    margin-left: auto;
    width: 90%;
    background-image: url('../assets/images/main_header_logo_white.svg');
    background-repeat: no-repeat;
    background-size: contain;
    padding-right: 15px;
    padding-bottom: 21px;

  }

  .large-text{
      font-size: 1em;
  }

  .button-container{
    padding-right: 30px;
    padding-left: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
    outline: none;
    border: none;
    text-decoration: none;
    width: fit-content !important;
    background-color: #FCFCFA;
    color: #000000;
    font-family: 'poppins_semibold';
    font-size: 1.1em;
    border-radius: 1000px;
    transition: 200ms ease-in-out;
  }

}

</style>