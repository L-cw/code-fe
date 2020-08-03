<!--
 * @Date: 2020-08-01 00:14:38
 * @Author: Leo
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-03 18:08:09
 * @Description: Do not edit
 * @FilePath: \code-fe\src\views\components\codeBlock.vue
--> 
<template>
  <div class="code-block-page">
    <el-input class="src-ipt" type="textarea" v-model="sourceCode" :rows="6"></el-input>
    <div class="parse-btn-box">
      <el-button type="primary" class="parse-btn" @click="handleParse">格式化</el-button>
    </div>
    <code-block-comp ref="codeBlockComp" :src-code="sourceCode" />
  </div>
</template>

<script>
import CodeBlockComp from '@/components/CodeBlockComp'
export default {
  name: 'CodeBlock',
  components: { CodeBlockComp },
  data () {
    return {
      sourceCode: '{   "error_code" : 0,   "result" : {      "address" : "adxSW6cD9R4sFqV71wDxoYyELrRP8ToZq8HKm",      "assets_hash" : "ad67d57ae19de8068dbcd47282146bd553fe9f684c57c8c114453863ee41abc3",      "balance" : 10000000,      "metadatas_hash" : "ad67d57ae19de8068dbcd47282146bd553fe9f684c57c8c114453863ee41abc3",      "priv" : {         "master_weight" : 1,         "thresholds" : {            "tx_threshold" : 1         }      }   }}'
    }
  },
  mounted () {

  },
  methods: {
    handleParse () {
      this.$refs.codeBlockComp.updateHljs()
    }
  }
}
</script>

<style lang="scss" scoped>
  .code-block-page {
    .src-ipt {
      margin-bottom: 20px;
    }
    .parse-btn-box {
      display: flex;
      margin-bottom: 20px;
      justify-content: center;
      .parse-btn {
        width: 200px;
      }
    }
  }
</style>
