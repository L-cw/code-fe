<template>
  <el-tooltip
    :disabled="disabled"
    popper-class="auto-show-tip__tooltip"
    v-bind="options"
  >
    <div v-if="!tipText" slot="content">
      <slot />
    </div>
    <div v-else slot="content">{{ tipText }}</div>
    <div
      ref="wrapper"
      class="wrapper"
      :class="lineNum === 1 ? 'single-line' : 'mutil-lines'"
      :style="lineNum > 1 ? `-webkit-line-clamp: ${lineNum};` : ''"
    >
      <slot />
    </div>
  </el-tooltip>
</template>

<script>
export default {
  name: 'AutoShowTipComp',
  props: {
    // 几行省略
    lineNum: {
      type: Number,
      default: 1
    },
    // 展示在tooltip中的文本，不传的话tooltip中展示传入的dom
    tipText: {
      type: String,
      default: ''
    },
    // key变化可以调用方法进行重check
    reCheckKey: {
      type: String,
      default: ''
    },
    // tooltip其他参数
    options: {
      type: Object,
      default: () => ({
        placement: 'top'
      })
    }
  },
  data () {
    return {
      // 实际的宽高
      range: {
        w: '', h: ''
      },
      // tooltip 是否可用
      disabled: true
    }
  },
  watch: { // 关键数据变化进行ReCheck
    tipText () {
      this.handleCheckIsDisabled()
    },
    reCheckKey () {
      this.handleCheckIsDisabled()
    }
  },
  mounted () {
    this.handleCheckIsDisabled()
    // 窗口大小变化的时候重新 check
    window.addEventListener('resize', this.handleCheckIsDisabled)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleCheckIsDisabled)
  },
  methods: {
    // 暴露给父组件主动调用使用
    reCheck () {
      this.handleCheckIsDisabled()
    },
    // 检查tooltip是否不可用
    handleCheckIsDisabled () {
      const el = this.$refs.wrapper
      if (el) {
        this.range = this.handleGetRealRange(el)
        if (this.lineNum > 1) {
          if (this.range.h > el.offsetHeight) {
            this.disabled = false
          }
        } else {
          if (this.range.w > el.offsetWidth) {
            this.disabled = false
          }
        }
      }
    },
    // 获取一个Range对象
    handleGetRealRange (el) {
      const range = document.createRange()
      range.setStart(el, 0)
      range.setEnd(el, el.childNodes.length)
      return {
        w: range.getBoundingClientRect().width,
        h: range.getBoundingClientRect().height
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    overflow: hidden;
    text-overflow: ellipsis;
    &.mutil-lines {
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
    &.single-line {
      white-space: nowrap;
    }
  }
</style>
<style lang="scss">
  .auto-show-tip__tooltip {
    max-width: 400px;
  }
</style>
