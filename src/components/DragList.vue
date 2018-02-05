<template>
  <div class="dashboard-folder__main">
    <list-group>
      <list-item></list-item>
    </list-group>
  </div>
</template>

<script>
import listItem from './ListItem'
import listGroup from './ListGroup'
export default {
  name: 'drag-list',
  components: {
    listItem,
    listGroup
  }
}
</script>

<style lang="less">
</style>
