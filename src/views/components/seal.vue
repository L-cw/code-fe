<!--
 * @Date: 2020-06-20 03:47:37
 * @Author: Leo
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-03 15:30:15
 * @Description: Do not edit
 * @FilePath: \code-fe\src\views\components\seal.vue
--> 
<template>
  <div class="seal-page">
    <seal-comp ref="seal" id="js_seal-demo" :company="company" />
    <div class="ipt-box">
      <el-input v-model="company" />
      <el-button type="primary" class="generate-btn" @click="handleRefreshSeal">生成</el-button>
    </div>
  </div>
</template>

<script>
import SealComp from '@/components/SealComp'
export default {
  components: { SealComp },
  name: 'Seal',
  data () {
    return {
      company: '国家顶级节点·广州'
    }
  },
  mounted () {

  },
  methods: {
    handleRefreshSeal() {
      this.$refs.seal.createSeal()
    }
  }
}
</script>

<style lang="scss" scoped>
.seal-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  .ipt-box {
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px auto 0;
    padding: 20px;
    border: 1px solid #eee;
    background-color: #f5f5f5;
    .generate-btn {
      margin-top: 20px;
    }
  }
}
</style>
