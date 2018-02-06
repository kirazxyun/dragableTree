<template>
  <div :class="[`${prefixCls}__item`, 'is-opened']">
    <div class="head"><slot name="title"></slot></div>
    <ul class="body"><slot></slot></ul>
  </div>
</template>

<script>
const prefixCls = 'dashboard-folder'
export default {
  name: 'list-group',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      prefixCls: prefixCls
    }
  }
}
</script>

<style scoped>

</style>
