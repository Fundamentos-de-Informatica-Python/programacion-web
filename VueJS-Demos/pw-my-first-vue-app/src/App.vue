<template>

  <div id="app">

    <div id="header-container">
      <h1>{{ title }}</h1>

      <p>{{ subtitle }}</p>
    </div>

    <div id="main-container">

      <div id="form-container">
        <p>Por favor ingrese sus datos</p>
        <from action="#">
          <div class="form-field">
            <label>Nombre</label>
            <input type="text" v-model="firstName">
          </div>

          <div class="form-field">
            <label>Apellido</label>
            <input type="text" v-model="lastName">
          </div>

          <div class="form-field">
            <label>Pedido</label>
            <input type="text" v-model="orderItem">
          </div>
        </from>

        <input v-bind:value="buttonAddOrder" v-on:click="countOrder++" type="button">

        <div>
          <label>Pedidos</label>
          <input type="text" v-model="countOrder" disabled>
        </div>
      </div>

    </div>


    <div id="main-order-details" v-if="countOrder > 0">

      <div id="order-details">
        <h3>Detalles del pedido</h3>
        <p>Nombre: {{ firstName }}</p>
        <p>Apellido: {{ lastName }}</p>
        <p>Producto: {{ orderItem }}</p>

        <input type="button" v-on:click="countOrder = 0" value="Borrar pedido">
      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      title: "My First Vuejs App",
      subtitle: "Warming up!! Let's jump into it",
      firstName: null,
      lastName: null,
      orderItem: null,
      buttonAddOrder: "Nueva Orden",
      countOrder: 0,
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
  justify-content: center;
}

#header-container {
  border-bottom: 3px solid grey
}

#main-order-details {
  display: flex;
  justify-content: center;
}

#order-details {
  width: 300px;
  margin-top: 20px;
  border: 2px double darkgreen;
}

from {
  display: flex;
  flex-direction: column;
}

.form-field {
  margin: 10px;
}

#form-container {
  margin-top: 20px;
  border: 2px double orange;
  width: 300px;
}

input[type="button"] {
  width: 100px;
}
</style>
