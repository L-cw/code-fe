<!--
 * @Date: 2020-06-17 01:41:24
 * @Author: Leo
 * @LastEditors: Leo
 * @LastEditTime: 2020-08-01 00:14:30
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
            <el-menu-item index="/components/codeBlock">代码块</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" class="component-wrp">
        <router-view></router-view>
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
