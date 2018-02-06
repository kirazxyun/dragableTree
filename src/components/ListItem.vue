<template>
  <dd>
    <span>{{ name }}</span>
  </dd>
</template>

<script>
export default {
  name: 'list-item',
  props: {
    name: {
      style: String,
      default: ''
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
