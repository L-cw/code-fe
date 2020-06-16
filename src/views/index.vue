<template>
  <div class="index-page">
    <div class="temp-text">
      <odometer :num="num1" class="num" class-name="num1" />
      <odometer :num="num2" class="num" class-name="num2" />
      <odometer :num="num3" class="num" class-name="num3" />
      <odometer :num="num4" class="num" class-name="num4" />
      <odometer :num="num5" class="num" class-name="num5" />
    </div>
    <div class="temp-text">
      <el-button @click="handleClick">Click to add 132</el-button>
    </div>
  </div>
</template>

<script>
import Odometer from '@/components/Odometer/index'
export default {
  name: '',
  components: { Odometer },
  data () {
    return {
      num1: 121,
      num2: 122,
      num3: 123,
      num4: 124,
      num5: 125
    }
  },
  mounted () {

  },
  methods: {
    handleClick () {
      this.num1 += 18
      this.num2 += 17
      this.num3 += 14
      this.num4 += 13
      this.num5 += 17
    }
  }
}
</script>

<style lang="scss" scoped>
  .index-page {
    & .temp-text {
      font-size: 20px;
      font-weight: 600;
      color: #00d080;
      .num {
        margin-right: 20px;
      }
    }
  }
</style>
