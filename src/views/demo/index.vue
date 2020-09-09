<template>
  <div>
    <div class="content">
      <el-card class="box-card">
        <div slot="header">export 导出</div>
        <div>testExportVal: {{ testExportVal }}</div>
        <div>testExportFn: {{ testExportFn.test }}</div>
      </el-card>

      <el-card class="box-card">
        <div slot="header">export default 导出</div>
        <div>testExportDefaultVal: {{ testExportDefaultVal }}</div>
        <div>testExportDefaultFn: {{ testExportDefaultFn.test }}</div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { testExportVal, testFun } from '@static/config'
import testObj from '@static/config'
console.log('--- -------- ------ import ------- ---------- ---')
console.log(testExportVal, testFun())
console.log(testObj)
console.log('  ')
export default {
  name: 'Demo',
  data () {
    return {
      testExportVal,
      testExportFn: testFun(),

      testExportDefaultVal: testObj.testExportDefault,
      testExportDefaultFn: testObj.testFun()
    }
  },
  mounted () {
    console.log('--- -------- ------ mounted ------- ---------- ---')
    console.log(testExportVal, testFun())
    console.log(testObj)
    console.log('  ')
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
