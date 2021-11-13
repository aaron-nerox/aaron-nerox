<template>
  <div class="main-container">
      <kinesis-container class="animations-container">
          <div class="logo-background">
            <kinesis-element :strength="15">
              <img src="../assets/images/main_header_upper_logo.svg" alt="header_image">
            </kinesis-element>
          </div>
          <a href="#about-me">
            <kinesis-element :strength="30" type="depth">
                <img src="../assets/icons/down_arrow.svg" alt="header_image" class="arrow-icon">
            </kinesis-element>
          </a>
      </kinesis-container>
  </div>
</template>

<script>
import { KinesisContainer, KinesisElement} from "vue-kinesis"

export default {
    name: "XHeader",
    components: {
      KinesisContainer,
      KinesisElement
    }
}
</script>

<style scoped>
.main-container{
  height: 100vh;
  width: 100%;
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

.arrow-icon{
  margin-right: auto;
  margin-left: auto;
  width: 5%;
  margin: 10px;
  margin-top: 8%;
}

</style>