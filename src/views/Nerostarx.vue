<template>
  <div>
    <img src="../assets/icons/main-site.svg" alt="main site" class="main-site-button" @click="goIndex()">
  </div>
</template>

<script>
export default {
    name: "Nerostarx",
    methods:{
      goIndex(){
        this.$router.push({path: '/'})
      }
    }
}
</script>

<style>

</style>