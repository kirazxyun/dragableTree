<template>
  <div :class="classes">
    <div class="head" @click.stop="handleClick">
      <slot name="title"></slot>
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
    </div>
    <ul class="body"><slot></slot></ul>
  </div>
</template>

<script>
const prefixCls = 'dashboard-folder'
const editBtn = { text: '编辑', value: 'edit' }
const deleteBtn = { text: '删除', value: 'delete' }

export default {
  name: 'list-group',
  props: {
    name: {
      type: String
    },
    active: {
      type: Boolean,
      default: false
    },
    opened: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      prefixCls: prefixCls,
      isOpened: this.opened
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}__item`,
        {
          'is-opened': this.isOpened,
          'is-sub-item-active': this.active
        }
      ]
    },
    toolList () {
      return [
        editBtn,
        deleteBtn
      ]
    }
  },
  methods: {
    handleClick () {
      this.isOpened = !this.isOpened
      this.$emit('on-group-opened-change', this.name, this.isOpened)
    },

    handleToolbarClick (type) {
      this.$emit('on-group-toolbar-click', type, this.name)
    }
  }
}
</script>

<style scoped>

</style>
