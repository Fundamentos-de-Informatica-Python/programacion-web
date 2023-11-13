<template>
  <div class="hero-element">
    <h1>{{ name }}</h1>
    <h3>{{ skill }}</h3>
    <h2>{{ origen }}</h2>
    <h3>{{ image }}</h3>
  </div>
</template>

<script>
export default {
  name: 'HeroElement',
  props: {
    name: String,
    skill: String,
    origen: String,
    imagen: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
