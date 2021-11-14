<template>
  <div class="main-container">
    <img src="../assets/icons/main_logo_black.svg" alt="" class="footer-logo">
    <p class="text footer-text">"Creativity is inteligence having fun." -Albert Einstein-</p>
    <hr class="divider"/>
    <p class="text footer-text">Follow me on social media</p>
    <div class="social-accounts-container">
      <div class="social-item"><img src="../assets/icons/instagram.svg" alt="social icon" class="social-icon"></div>
      <div class="social-item"><img src="../assets/icons/twitter.svg" alt="social icon" class="social-icon"></div>
      <div class="social-item"><img src="../assets/icons/github.svg" alt="social icon" class="social-icon"></div>
      <div class="social-item"><img src="../assets/icons/linkedin.svg" alt="social icon" class="social-icon"></div>
      <div class="social-item"><img src="../assets/icons/youtube.svg" alt="social icon" class="social-icon"></div>
    </div>
    <p class="text">Forged by Aaron from love &#10083; and monochrome &#9775;</p>
  </div>
</template>

<script>
export default {
    name: "XFooter",
}
</script>

<style scoped>
.main-container{
  text-align: center;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  background-color: #FCFCFA;
}

.footer-logo{
  width: 23%;
}

.footer-text{
  font-size: 1.2em;
}

.divider{
  width: 30%;
  height: 2px;
  background-color: #111;
  border-radius: 1000px;
}

.social-accounts-container{
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
}

.social-item{
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: #000000;
  border: 2px solid #C9C9C9;
  box-shadow: inset -2px 1px 0px 0.5px #FCFCFA, -3px 2px 0px 0.5px #000000;
  margin-right: 10px;
  margin-left: 10px;
  display: grid;
  align-items: center;
  justify-content: center;
}

.social-icon{
  margin-right: 3px;
  width: 30px;
}



</style>