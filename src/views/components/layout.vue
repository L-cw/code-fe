<!--
 * @Date: 2020-06-17 01:41:24
 * @Author: Leo
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-03 15:30:45
 * @Description: Do not edit
 * @FilePath: \code-fe\src\views\components\layout.vue
-->
<template>
  <div class="components-page">
    <el-row class="content">
      <el-col :span="4">
        <el-menu
          default-active="1"
          class="page-slibar"
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <span>不常用组件</span>
            </template>
            <el-menu-item index="/components/odometer">数字动效</el-menu-item>
            <el-menu-item index="/components/seal">公章</el-menu-item>
            <el-menu-item index="/components/code-block">代码块</el-menu-item>
            <el-menu-item index="/components/auto-show-tip">自适应tip</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" class="component-wrp">
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .components-page {
    .component-wrp {
      padding: 20px;
    }
  }
</style>
