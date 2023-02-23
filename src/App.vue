<template>
  <div>
    <Inicio/>
  </div>
</template>

<script>

import Inicio from './components/Inicio/InicioComponent.vue'

export default {
  name: 'App',
  components: {
    Inicio
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
