<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HeroElement 
    name="aquaman"
    skill="el skill"
    image="002_superman.jpg"
    origen="el origen"
  
  />
</template>

<script>
import HeroElement from './components/HeroElement.vue'

export default {
  name: 'App',
  components: {
    HeroElement
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
</style>
