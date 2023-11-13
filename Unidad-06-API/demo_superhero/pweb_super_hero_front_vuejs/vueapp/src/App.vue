<template>

<HeroHead/>

<div id="main-container">
    <HeroElement 
      v-for="hero in super_heros" 
      :key="hero.name"
      :hero="hero"
    />
</div>

<HeroFooter/>

</template>

<script>
import HeroElement from './components/HeroElement.vue'
import HeroHead from './components/HeroHead.vue';
import HeroFooter from './components/HeroFooter.vue';


export default {
  name: 'App',
  components: {
    HeroElement,
    HeroHead,
    HeroFooter
},
  data() {
    return {
      super_heros: [
        { 
          name: "Batman",      
          skill: "Conocimiento científico",                   
          origen: "Humano", 
          image: "001_batman.jpg"
        },
        { 
          name: "Superman",    
          skill: "Fuerza sobrehumana y capacidad para volar", 
          origen: "krypton", 
          image: "002_superman.jpg"
        },
        { 
          name: "Aquaman",     
          skill: "Dominación psiónica de la vida marina",     
          origen: "Atlantida", 
          image: "003_aquaman.jpg"
        },
        { 
          name: "Mujer Maravilla", 
          skill: "Superhumana y domino de armas",         
          origen: "Isla de Themyscira", 
          image: "004_wonderwoman.jpg"
        },
        { 
          name: "Flash",           
          skill: "Velocidad",                             
          origen: "Humano", 
          image: "006_flash.jpg"
        }
      ],
    }

  }


}



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#main-container {
	display: flex;
	justify-content: left;
	flex-direction: row; 
	flex-wrap: wrap;
	width: 80%;
	margin: auto;
}
</style>
