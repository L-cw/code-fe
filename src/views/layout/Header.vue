<!--
 * @Author: Leo
 * @Date: 2020-06-16 23:51:02
 * @LastEditTime: 2020-06-25 22:41:09
 * @LastEditors: Leo
 * @Description: In User Settings Edit
 * @FilePath: \code-fe\src\views\layout\Header.vue
--> 
<template>
  <header class="header">
    <div class="content header-cont">
      <div class="header-lf"></div>
      <nav class="nav-list">
        <div class="nav-item active">
          <router-link to="/" tag="div" class="nav">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/examples" tag="div" class="nav">组件</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/tools" tag="div" class="nav">工具</router-link>
        </div>
        <div class="nav-item">
          <div class="nav">
            <a href="//code-fe.lovem.fun" target="_blank">前端资源</a>
          </div>
        </div>
        <div class="nav-item">
          <div class="nav">
            <a href="//blog.lovem.fun" target="_blank">Blog</a>
          </div>
        </div>
        <div class="nav-item">
          <div class="nav">
            <a href="//lovem.fun" target="_blank">站点</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'VHeader',
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
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: $header-height;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);
    z-index: $header-zindex;
    .header-cont {
      display: flex;
      padding-right: 60px;
      justify-content: space-between;
    }
    .nav-list {
      display: flex;
      .nav-item {
        height: $header-height;
        padding: 0 10px;
        margin-right: 30px;
        cursor: pointer;
        &:last-child {
          margin-right: 0;
        }
        .nav {
          position: relative;
          height: $header-height;
          line-height: $header-height;
          font-size: 16px;
          &:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            height: 2px;
            width: 0;
            background-color: $theme-color;
            transition: width .3s;
          }
          &.router-link-exact-active {
            color: $theme-color;
            &:after {
              width: 100%;
            }
          }
        }
        &:hover {
          .nav {
            color: $theme-color;
            &:after {
              width: 100%;
            }
          }
        }
      }
    }
  }
</style>
