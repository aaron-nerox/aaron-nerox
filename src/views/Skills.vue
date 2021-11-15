<template>
  <div class="parent-container">
    <div>
      <x-title mode="light">My top skills</x-title>
      <br><br>
      <div class="grid-container">
        <div v-for="(skill,index) in skills" :key="index" class="skill-container-wrap">
          <div class="inner-skill-container">
            <img src="../assets/icons/bolt.svg" alt="bolt" class="skill-icon">
            <p class="title">{{skill}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import XTitle from '../components/XTitle.vue'

export default {
    name: "Skills",
    data(){
      return{
        skills: ['Android dev','Brand design','UI/UX design','Project managment'
        ,'Agile methods','Front-end web dev','Databases'],
        
      }
    },
    components: {
      XTitle,
    }
}
</script>

<style scoped>
.parent-container{
  height: 100vh;
  width: 100%;
  display: grid;
  background-image: url('../assets/backgrounds/background_section1.svg');
  background-repeat: no-repeat;
  background-size: cover;
}

.grid-container{
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  display: grid;
  grid-template-columns: auto auto auto;
}

.skill-container-wrap{
  margin: 20px;
  background-color: #000000;
  color: #FCFCFA;
  border-radius: 15px;
  border: 2px solid #C9C9C9;
  box-shadow: inset -2px 2px 0px 0.5px #FCFCFA, -3px 3px 0px 0.5px #000000;
  transition: 200ms ease-in-out;
}

.skill-container-wrap:hover{
  transform: translateY(-4px);
}

.inner-skill-container{
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin: 0px;
}

.skill-icon{
  width: 30px;
  margin: 5px;
}

.title{
  font-family: 'poppins_semibold';
  font-size: 1.3em;
}

</style>