<template>
    <div class="play-store" @click="openApp">
        <img class="button-icon" src="../assets/icons/store.svg" >
        <div class="button-text">
        <p class="zit-text" id="head-button">{{availability}}</p>
        <p class="zit-text" id="text-button">Google Play</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            applink: String,
            availability: String
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
    background: white;
    color: black;
    border-radius: 100000px;
    -webkit-box-shadow: 3px 2px 16px 0px rgba(0,0,0,0.3); 
    box-shadow: 3px 2px 16px 0px rgba(0,0,0,0.2);
    height: 40px;
    max-width: 190px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    transition: all ease-in-out 200ms;
    font-family: 'montserrat_semibold';
}

.play-store:hover{
    transform: translateY(-5px);
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

@media only screen and (min-width: 768px) and (max-width: 1281px) {
    .play-store{
        background: white;
        color: black;
        border-radius: 100000px;
        -webkit-box-shadow: 3px 2px 16px 0px rgba(0,0,0,0.3); 
        box-shadow: 3px 2px 16px 0px rgba(0,0,0,0.2);
        height: 40px;
        width: 140px;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 5px;
        padding-bottom: 5px;
        margin: 20px;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        transition: all ease-in-out 200ms;
    }
}
</style>