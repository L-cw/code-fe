<!--
 * @Date: 2020-06-17 01:41:24
 * @Author: Leo
 * @LastEditors: Leo
 * @LastEditTime: 2020-06-25 22:37:12
 * @Description: Do not edit
 * @FilePath: \code-fe\src\views\examples\layout.vue
--> 
<template>
  <div class="components-page">
    <el-row class="content">
      <el-col :span="4">
        <el-menu
          default-active="1"
          class="page-slibar">
          <el-submenu index="1">
            <template slot="title">
              <span>不常用组件</span>
            </template>
            <el-menu-item index="1-1">
              <router-link to="/components/odometer">数字动效</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/components/seal">公章</router-link>
            </el-menu-item>
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
