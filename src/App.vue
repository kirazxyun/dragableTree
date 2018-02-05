<template>
  <div id="app">
    <drag-list v-model="listData"></drag-list>
  </div>
</template>

<script>
import dragList from './components/DragList'
export default {
  name: 'App',
  components: {
    dragList
  },
  data () {
    return {
      listData: [
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
    }
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
