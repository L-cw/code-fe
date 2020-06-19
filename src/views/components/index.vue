<!--
 * @Date: 2020-06-17 01:41:24
 * @Author: Leo
 * @LastEditors: Leo
 * @LastEditTime: 2020-06-20 03:56:04
 * @Description: Do not edit
 * @FilePath: \code-fe\src\views\components\index.vue
--> 
<template>
  <div class="components-page">
    <el-row class="content">
      <el-col :span="4">
        <el-menu
          default-active="1"
          class="components-slibar">
          <el-submenu index="1">
            <template slot="title">
              <span>导航一</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-link to="/components/odometer">数字动效</router-link>
        <router-link to="/components/seal">公章</router-link>
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
    .components-slibar {
      min-height: calc(100vh - #{$header-height} - #{$footer-height});
    }
  }
</style>
