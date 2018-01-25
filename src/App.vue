<template>
  <div id="app">
    <dragable-tree></dragable-tree>
  </div>
</template>

<script>
import DragableTree from './components/dragableTree'
export default {
  name: 'App',
  components: {
    DragableTree
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
