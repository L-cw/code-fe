<!--
 * @Date: 2020-06-25 22:31:43
 * @Author: Leo
 * @LastEditors: Leo
 * @LastEditTime: 2020-06-25 22:56:31
 * @Description: Do not edit
 * @FilePath: \code-fe\src\views\tools\layout.vue
--> 
<template>
  <div class="tools-page">
    <el-row class="content">
      <el-col :span="4">
        <el-menu
          default-active="1"
          class="page-slibar">
          <el-submenu index="1">
            <template slot="title">
              <span>图片相关</span>
            </template>
            <el-menu-item index="1-1">
              <router-link to="/tools/pic/solid-color">生成纯底色图片</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/tools/pic/solid-color-text">纯色带文字图片</router-link>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" class="tool-wrp">
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
  .tools-page {
    .tool-wrp {
      padding: 20px;
    }
  }
</style>
