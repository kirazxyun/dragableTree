<template>
  <li :class="classes" @click.stop="handleItemClick">
    <slot></slot>
    <div class="oneicon-more more-box">
      <div class="one-dropdown">
        <div class="one-dropdown__inner">
          <ul class="one-dropdown__ul">
            <li v-for="tool in toolList"
                :key="tool.value"
                @click.stop="handleToolbarClick(tool.value)">
              <a href="javascript:;">{{ tool.text }}</a></li>
          </ul>
        </div>
      </div>
    </div>
  </li>
</template>

<script>

const editBtn = { text: '编辑', value: 'edit' }
const copyBtn = { text: '复制', value: 'copy' }
const deleteBtn = { text: '删除', value: 'delete' }

export default {
  name: 'list-item',
  props: {
    name: { // 身份证明，id
      type: String,
      default: ''
    },
    status: { // 状态
      type: Number
    },
    active: {
      type: Boolean
    }
  },
  data () {
    return {
    }
  },
  computed: {
    classes () {
      return {
        'is-share': this.status === 1,
        'is-beShare': this.status === 2,
        'is-active': this.active
      }
    },
    toolList () {
      if (this.status === 2) {
        return [
          editBtn,
          copyBtn
        ]
      }
      return [
        editBtn,
        copyBtn,
        deleteBtn
      ]
    }
  },
  methods: {
    handleItemClick () {
      this.$emit('on-item-select', this.name)
    },

    handleToolbarClick (type) {
      this.$emit('on-item-toolbar-click', type, this.name)
    }
  }
}
</script>

<style scoped>

</style>
