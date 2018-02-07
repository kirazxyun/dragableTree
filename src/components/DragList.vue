<template>
  <div>
    <list-group v-for="group in list"
                :key="group.id"
                :name="group.id"
                :active="listMap[currentActiveName].groupName===group.id"
                :opened="openNameArr.indexOf(group.id) > -1"
                @on-group-opened-change="handleGroupOpenedChange"
                @on-group-toolbar-click="handleGroupToolbarClick">
      <span slot="title" :title="group.label">{{ group.label }}</span>
      <list-item v-for="item in group.children"
                 :key="item.id"
                 :name="item.id"
                 :status="item.status"
                 :active="currentActiveName===item.id"
                 @on-item-select="handleItemSelect"
                 @on-item-toolbar-click="handleItemToolbarClick">
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
    },
    openNames: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      prefixCls: prefixCls,
      list: this.value,
      currentActiveName: this.activeName,
      listMap: null
    }
  },
  computed: {
    openNameArr () {
      return this.openNames
    }
  },
  methods: {
    handleItemSelect (name) {
      this.currentActiveName = name
      this.$emit('on-select', name)
    },

    handleItemToolbarClick (type, name) {
      this.$emit('on-item-toolbar-click', type, this.listMap[name])
    },

    handleGroupToolbarClick (type, groupName) {
      this.$emit('on-group-toolbar-click', type, this.listMap[groupName])
    },

    handleGroupOpenedChange (groupName, opened) {
      if (opened) {
        if (this.openNameArr.indexOf(groupName) < 0) this.openNameArr.push(groupName)
      } else {
        this.openNameArr.splice(this.openNameArr.indexOf(groupName), 1)
      }
      this.$emit('on-opened-change', this.openNameArr)
    },

    saveListMap () {
      let listMap = {}
      this.list.forEach(group => {
        listMap[group.id] = group
        if (group.children) {
          group.children.forEach(item => {
            listMap[item.id] = Object.assign(item, {
              groupName: group.id
            })
          })
        }
      })
      this.listMap = listMap
    }
  },
  created () {
    this.saveListMap()
  },
  watch: {
    value (val) {
      this.list = val
      this.saveListMap()
    },
    activeName (val) {
      this.currentActiveName = val
    }
  }
}
</script>

<style lang="less">
</style>
