<!--
 * @Author: Leo
 * @Date: 2020-06-16 23:51:02
 * @LastEditTime: 2020-08-03 16:22:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code-fe\src\views\layout\Header.vue
--> 
<template>
  <header class="header">
    <div class="content header-cont">
      <div class="logo-box">
        <img src="/static/images/logo.png" alt="" class="logo">
        <div class="logo-text">Leo的前端实验室</div>
      </div>
      <nav class="nav-list">
        <div class="nav-item active">
          <router-link to="/" tag="div" class="nav">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/components" tag="div" class="nav">组件</router-link>
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
    background-color: #fff;
    .header-cont {
      display: flex;
      padding-right: 60px;
      justify-content: space-between;
    }
    .logo-box {
      display: flex;
      align-items: center;
      color: $ft-color-title;
      .logo {
        width: 36px;
        height: 36px;
        margin-right: 10px;
      }
      .logo-text {
        font-size: 18px;
        font-weight: 500;
      }
    }
    .nav-list {
      display: flex;
      .nav-item {
        height: $header-height;
        margin-right: 30px;
        cursor: pointer;
        &:last-child {
          margin-right: 0;
        }
        .nav {
          position: relative;
          height: $header-height;
          line-height: $header-height;
          padding: 0 10px;
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
