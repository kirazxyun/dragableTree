<template>
  <div id="app">
    <drag-list v-model="listData"
               :active-name="activeName"
               :open-names="openNames"
               @on-select="handleSelect"
               @on-opened-change="handleOpenedChange"
               @on-group-toolbar-click="handleGroupToolBarClick"
               @on-item-toolbar-click="handleItemToolBarClick"></drag-list>
  </div>
</template>

<script>
import dragList from './components/DragList'
const resource = [
  {
    'id': '1', // 节点id
    'label': '点播产品', // 节点名称
    'type': 0, // 节点类型：0文件夹，1仪表盘
    'status': 0, // 节点状态，0未分享，1已分享，2别人分享的
    'children': [ // 子节点
      {
        'id': '1-1',
        'label': '客户端与服务端对比',
        'type': 1,
        'status': 0
      },
      {
        'id': '1-2',
        'label': '故障分析',
        'type': 1,
        'status': 1
      }
    ]
  },
  {
    'id': '2',
    'label': '直播产品',
    'type': 0,
    'status': 0,
    'children': [
      {
        'id': '2-1',
        'label': '故障分析',
        'type': 1,
        'status': 2
      }
    ]
  },
  {
    'id': '-1',
    'label': '未分组',
    'type': 0,
    'status': 0,
    'children': [
      {
        'id': '3',
        'label': '分享为分配文件夹',
        'type': 1,
        'status': 2
      }
    ]
  }
]
export default {
  name: 'App',
  components: {
    dragList
  },
  data () {
    return {
    }
  },
  computed: {
    listData () {
      return this.$store.state.listData
    },
    activeName () {
      return this.$store.state.activeName
    },
    openNames () {
      return this.$store.state.openNames
    }
  },
  methods: {
    handleSelect (name) {
      this.$store.commit('setActiveName', name)
    },
    handleOpenedChange (openNameArr) {
      this.$store.commit('setOpenNames', openNameArr)
    },
    handleGroupToolBarClick (type, groupObj) {
    },

    handleItemToolBarClick (type, itemObj) {
      console.log(type)
    }
  },
  mounted () {
    setTimeout(() => {
      this.$store.commit('setListData', resource)
    }, 1000)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px auto;
}
</style>
