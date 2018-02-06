<template>
  <div>
    <list-group v-for="group in data" :key="group.id" :name="group.id">
      <span slot="title">{{ group.label }}</span>
      <list-item v-for="item in group.children" :key="item.id" :name="item.id" >
        <span>{{ item.label }}</span>
      </list-item>
    </list-group>
  </div>
</template>

<script>
import listItem from './ListItem'
import listGroup from './ListGroup'

const prefixCls = 'dashboard-folder'

export default {
  name: 'drag-list',
  components: {
    listItem,
    listGroup
  },
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    },
    activeName: {
      type: String
    }
  },
  data () {
    return {
      prefixCls: prefixCls,
      data: this.value
    }
  },
  computed: {
  }
}
</script>

<style lang="less">
</style>
