<template>
  <div class="main-container">
    <x-header />
    <br><br><br><br><br>
    <x-title mode="light">this is a text</x-title>
    <x-footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import XFooter from '../components/XFooter.vue'
import XHeader from '../components/XHeader.vue'
import XTitle from '../components/XTitle.vue'

export default {
  name: 'Home',
  components: {
    XHeader,
    XTitle,
    XFooter,
  }
}
</script>

<style scoped>
.main-container{
  width: 100%;
}
</style>
