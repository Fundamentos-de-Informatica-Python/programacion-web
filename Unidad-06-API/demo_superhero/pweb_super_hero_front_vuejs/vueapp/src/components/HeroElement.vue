<template>
  <div id="my-element">
    <h1>{{ hero.name }}  </h1>
    <p>{{ hero.skill }}  </p>
    <h2>{{ hero.origen }}  </h2>
    <img :src="require(`@/assets/${hero.image}`)"  width="200">

  </div>
</template>

<script>
export default {
  name: 'HeroElement',
  props: [ 'hero' ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#my-element {
	padding: 30px
}

</style>
