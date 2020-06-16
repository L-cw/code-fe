<!--
 * @Author: Leo
 * @Date: 2020-06-16 23:51:30
 * @LastEditTime: 2020-06-17 01:35:59
 * @LastEditors: Leo
 * @Description: footer
 * @FilePath: \code-fe\src\views\layout\Footer.vue
--> 
<template>
  <footer class="footer">
    <div class="content copyright">
      Copyright © {{ new Date().getFullYear() }} 鲁ICP备18003483号
    </div>
  </footer>
</template>

<script>
export default {
  name: 'VFooter',
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
  .footer {
    height: $footer-height;
    background-color: #2c3e50;
    .copyright {
      height: $footer-height;
      line-height: $footer-height;
      text-align: center;
      color: #fff;
    }
  }
</style>

