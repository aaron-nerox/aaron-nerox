<template>
  <button class="main-container">
      <p>
          <slot></slot>
      </p>
  </button>
</template>

<script>
export default {

}
</script>

<style scoped>
.main-container{
    outline: none;
    border: none;
    width: fit-content;
    background-color: #000000;
    color: #FCFCFA;
    font-family: 'poppins_semibold';
    font-size: 1.1em;
    border-radius: 1000px;
    transition: 300ms ease-in-out;
}

.main-container:hover{
    transform: translate(0px, -3px);
}

.main-container>p{
    margin: 0px;
    padding: 8px;
    padding-right: 20px;
    padding-left: 20px;
}

</style>