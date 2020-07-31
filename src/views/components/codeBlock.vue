<!--
 * @Date: 2020-08-01 00:14:38
 * @Author: Leo
 * @LastEditors: Leo
 * @LastEditTime: 2020-08-01 00:39:22
 * @Description: Do not edit
 * @FilePath: \code-fe\src\views\components\codeBlock.vue
--> 
<template>
  <div>
    <el-input type="textarea" v-model="sourceCode"></el-input>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      sourceCode: '{   "error_code" : 0,   "result" : {      "address" : "adxSW6cD9R4sFqV71wDxoYyELrRP8ToZq8HKm",      "assets_hash" : "ad67d57ae19de8068dbcd47282146bd553fe9f684c57c8c114453863ee41abc3",      "balance" : 10000000,      "metadatas_hash" : "ad67d57ae19de8068dbcd47282146bd553fe9f684c57c8c114453863ee41abc3",      "priv" : {         "master_weight" : 1,         "thresholds" : {            "tx_threshold" : 1         }      }   }}'
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
