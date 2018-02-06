<template>
  <dl :class="`${prefixCls}__item`">
    <dt><slot name="title"></slot></dt>
    <slot></slot>
  </dl>
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
