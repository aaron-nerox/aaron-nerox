<template>
  <button class="x-main-container" @click="emitAction">
      <p>
          <slot></slot>
      </p>
  </button>
</template>

<script>
export default {
    name: "GalacticButton",
    methods:{
        emitAction(){
            this.$emit("onButtonClick")
        }
    }
}
</script>

<style scoped>
.x-main-container{
    outline: none;
    border: none;
    width: fit-content !important;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 4px 4px 16px 0 rgba(63, 28, 145, 0.233);
    backdrop-filter: blur( 4px );
    border: 2px solid rgba(255, 255, 255, 0.479);
    color: rgba(6, 11, 80, 0.931);
    font-family: 'poppins_semibold';
    font-size: 1.1em;
    border-radius: 1000px;
    transition: 200ms ease-in-out;
}

.x-main-container:hover{
    box-shadow: 6px 6px 16px 0 rgba(63, 28, 145, 0.363);
    border: 2px solid rgb(255, 255, 255);
}

.x-main-container>p{
    margin: 0px;
    padding: 8px;
    padding-right: 20px;
    padding-left: 20px;
}



</style>