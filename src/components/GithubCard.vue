<template>
  <div class="card-container">
      <br><br>
      <img :src="resolveImageUrl(icon)" alt="project-icon" class="project-logo"/>
      <p class="title large-size">{{title}}</p>
      <x-button @onButtonClick="navigate" >Check repository</x-button>
      <br><br>
  </div>
</template>

<script>
import XButton from "./XButton.vue"

export default {
    name: "GithubCard",
    props: {
        icon: String,
        title: String,
        link: String
    },
    components: {
        XButton
    },
    methods: {
        resolveImageUrl(path) {
            let images = require.context('../assets/icons', false, /\.svg$|\.png$/)
            return images("./"+path)
        },
        navigate(){
            window.open(this.link, "_blank");
        }
    }
}
</script>

<style scoped>
.card-container{
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    color: black;
    margin: 20px;
    clip-path: polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%);
    transition: 200ms ease-in-out;
}

.card-container:hover{
    transform: translate(0px, -4px);
}

.project-logo{
    width: 40%;
}

.large-size{
    font-size: 1.3em;
}
</style>