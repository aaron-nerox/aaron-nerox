<template>
  <div :class="['main-container', mode]">
    <p class="x-title">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
    name: "XTitle",
    props: {
      mode: String,
    }
}
</script>

<style scoped>
.main-container{
  max-width: 50%;
  height: 50px;
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  align-content: center;
  justify-items: center;

}

.light{
  background-color: #000000;
  color: #FCFCFA;
  border: 2px solid #C9C9C9;
  box-shadow: inset -2px 2px 0px 0.5px #FCFCFA, -3px 3px 0px 0.5px #000000;
}

.dark{
  background-color: #FCFCFA;
  color: #000000;
  border: 2px solid #C9C9C9;
  box-shadow: inset -2px 2px 0px 0.5px #000000, -3px 3px 0px 0.5px #FCFCFA;
}

.x-title{
  text-align: center;
  font-family: 'poppins_semibold';
  font-size: 1.5em;
  margin-top: 25px;
  width: 60%;
}

</style>