<!--
 * @Date: 2020-06-20 03:47:46
 * @Author: Leo
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-03 14:42:16
 * @Description: Do not edit
 * @FilePath: \code-fe\src\views\components\odometer.vue
--> 
<template>
  <div class="components-odometer-page">
    <div class="display-text">
      <odometer-comp :num="num1" class="num" class-name="num1" />
    </div>
    <div class="settings-box">
      <el-button @click="handleClick">Click to add 18</el-button>
    </div>
  </div>
</template>

<script>
import OdometerComp from '@/components/OdometerComp/index'
export default {
  name: 'Odometer',
  components: { OdometerComp },
  data () {
    return {
      num1: 121
    }
  },
  mounted () {

  },
  methods: {
    handleClick () {
      this.num1 += 18
    }
  }
}
</script>

<style lang="scss" scoped>
  .components-odometer-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    & .display-text {
      font-size: 40px;
      font-weight: 600;
      color: #00d080;
      margin-bottom: 20px;
    }
  }
</style>
