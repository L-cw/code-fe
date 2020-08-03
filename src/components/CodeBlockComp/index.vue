<template>
  <pre :key="curKey + '-codeblock'" class="code-block-comp code-block-js">
    <code class="code-block-comp__code-tag language-javascript">{{ beautyJs(srcCode) }}</code>
  </pre>
</template>

<script>
import codeBeautify from './lib/codeBeautify'
import 'highlight.js/styles/default.css'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('javascript', javascript)
let hljsWrap = null

export default {
  name: 'CodeBlockComp',
  props: {
    srcCode: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      curKey: 0
    }
  },
  watch: {
    srcCode () {
      // this.updateHljs() // 减少性能损耗，此处不监听，若开启需要防抖处理
    }
  },
  mounted () {
    this.updateHljs()
  },
  methods: {
    updateHljs () {
      // 通过绑定 key 值来保证 code 标签不保留上次生成的 html 代码
      this.curKey += 1
      this.$nextTick(() => {
        hljsWrap = document.querySelectorAll('.code-block-js code')[0]
        if (!hljsWrap) return
        hljs.highlightBlock(hljsWrap)
      })
    },
    beautyJs (value) {
      if (value === null || typeof value === 'undefined') return
      return codeBeautify.jsBeautify(value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .code-block-comp {
    overflow: auto;
  }
</style>
