<template>
  <div class="parent-container">

      <x-title mode="light">My top skills</x-title>
      <br><br>

      <div class="grid-container">

        <div v-for="(skill,index) in skills" :key="index" class="skill-container">
            <img src="../assets/icons/bolt.svg" alt="bolt" class="skill-icon">
            <p class="title">{{skill}}</p>
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
        skills: ['Android development', 'kotlin language', 'Jepack compose'
        , 'Front-end development', 'VueJs framework', 'ReactJs library', 'Html5 markup'
        , 'CSS3 language', 'JavaScript & TypeScript'
        , 'Kotlin Ktor framework', 'NodeJs ServerSide',  'Database managment'
        , 'Project managment', 'Agile methods'
        , 'Brand identity design', 'Product design', 'Ui/Ux design'],
        
      }
    },
    components: {
      XTitle,
    }
}
</script>

<style scoped>
.parent-container{
  padding: 20px;
  background-image: url('../assets/backgrounds/background_section1.svg');
  background-repeat: no-repeat;
  background-size: cover;
}

.grid-container{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.skill-container{
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  background-color: #000000;
  color: #FCFCFA;
  margin: 15px;
  border-radius: 15px;
  border: 2px solid #C9C9C9;
  box-shadow: inset -2px 2px 0px 0.5px #FCFCFA, -3px 3px 0px 0.5px #000000;
  transition: 200ms ease-in-out;
}

.skill-container:hover{
  transform: translateY(-4px);
}

.skill-icon{
  width: 30px;
  margin: 5px;
  margin-left: 10px;
  margin-right: 10px;
}

.title{
  font-family: 'poppins_semibold';
  font-size: 1.3em;
}

@media only screen and (max-width: 720px){
  .parent-container{
    height: 100vh;
    padding: 5px;
    background-image: url('../assets/backgrounds/background_section1.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .grid-container{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .skill-container{
    margin: 10px;
    padding: 5px;
  }

  .skill-icon{
    width: 25px;
    margin: 5px;
  }

  .title{
    font-family: 'poppins_semibold';
    font-size: 0.9em;
  }
}

</style>