<template>
  <div class="main-container">
    <x-header />
    <x-footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import XFooter from '../components/XFooter.vue'
import XHeader from '../components/XHeader.vue'

export default {
  name: 'Home',
  components: {
    XHeader,
    XFooter,
  }
}
</script>

<style scoped>
.main-container{
  width: 100%;
}
</style>
