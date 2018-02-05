<template>
  <div id="app">
    <drag-list></drag-list>
  </div>
</template>

<script>
import dragList from './components/DragList'
export default {
  name: 'App',
  components: {
    dragList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
