<template>
  <div :class="classes">
    <div class="head">
      <slot name="title"></slot>
      <div class="oneicon-more more-box">
        <div class="one-dropdown">
          <div class="one-dropdown__inner">
            <ul class="one-dropdown__ul">
              <li><a href="">编辑</a></li>
              <li><a href="">删除</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
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
      // prefixCls: prefixCls
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}__item`,
        {
          'is-opened': true
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
