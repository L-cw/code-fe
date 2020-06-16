<!--
 * @Date: 2020-06-17 00:17:38
 * @Author: Leo
 * @LastEditors: Leo
 * @LastEditTime: 2020-06-17 01:11:52
 * @Description: 
 * @FilePath: \code-fe\src\components\Odometer\index.vue
--> 
<template>
  <span :class="className"></span>
</template>

<script>
const Odometer = require('./lib/odometer')

export default {
  name: 'Odometer',
  props: {
    num: {
      type: [String, Number],
      required: true
    },
    className: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      od: null
    }
  },
  watch: {
    num(val) {
      this.od.update(val)
    }
  },
  mounted () {
    let el = document.querySelector('.' + this.className)
    this.od = new Odometer({
      el: el,
      value: 0,
      format: '(,ddd)',
      theme: 'default'
    });
    this.od.update(this.num)
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  @import url('./css/default.css');
</style>
