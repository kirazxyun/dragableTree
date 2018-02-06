<template>
  <li>
    <slot></slot>
    <div class="oneicon-more more-box">
      <div class="one-dropdown">
        <div class="one-dropdown__inner">
          <ul class="one-dropdown__ul">
            <li><a href="">编辑</a></li>
            <li><a href="">复制</a></li>
            <li><a href="">删除</a></li>
          </ul>
        </div>
      </div>
    </div>
  </li>
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
