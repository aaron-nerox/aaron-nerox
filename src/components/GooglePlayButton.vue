<template>
    <div :class="['play-store', this.darkMode? 'dark-mode' : 'light-mode']" 
            @click="openApp">

        <div class="inner-google-play">
            <img class="button-icon" src="../assets/icons/store.svg" >
            <div class="button-text">
            <p class="zit-text" id="head-button">{{availability}}</p>
            <p class="zit-text" id="text-button">Google Play</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props: {
            applink: String,
            availability: String,
            darkMode: Boolean
        },
        methods:{
            openApp(){
                if(this.availability == "GET IT ON"){
                    window.open(this.applink)
                }                
            }
        }
    }
</script>

<style scoped>
.play-store{
    border-radius: 100000px;
    padding: 10px;
    padding-left: 25px;
    padding-right: 25px;
    height: fit-content;
    max-width: fit-content;
    transition: all ease-in-out 200ms;
    font-family: 'montserrat_semibold';
}

.play-store:hover{
    transform: translateY(-5px);
}

.inner-google-play{
    margin: auto;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
}

.dark-mode{
    background-color: black;
    color: white;
}

.light-mode{
    background-color: white;
    color: black;
}

.button-icon{
    width: 30px;
    margin-right: 10px;
}

.button-text{
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    
}

.zit-text{
    margin: 0;
    text-align: left;
}

#head-button{
    font-size: 0.7em;
}

#text-button{
    font-weight: bold;
    font-size: 0.9em;
}

@media only screen and (max-width: 720px){
    .play-store{
        background-color: black;
        min-width: 90%;
        padding: 15px;
    }

    .dark-mode{
        background-color: black;
        color: white;
    }

    .light-mode{
        background-color: white;
        color: black;
    }
}
</style>