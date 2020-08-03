<template>
  <div class="index-page">
    <div class="content">
      <h1 class="title">Leo 的前端实验室</h1>
      <div class="pic-box">
        <img class="hilarious-img" :src="require('@/assets/images/hilarious.gif')" alt="">
      </div>
      <!-- <ul class="desc-list">
        <li class="desc-item">这里是 Leo 的前端实验室，进行一些前端上的尝试与积累</li>
        <li class="desc-item">组件栏目展示了一些在项目开发中需要用到所以进行了封装的组件，多数为业务强相关的，公用性更强的会选择使用</li>
        <li class="desc-item">工具栏目展示了一些自己在日常中要用到的一些小工具，方便自己的使用</li>
      </ul> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
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
  .index-page {
    .title {
      font-size: 30px;
      color: $ft-color-title;
      font-weight: 500;
      text-align: center;
    }
    .pic-box {
      padding: 50px;
      display: flex;
      justify-content: center;
      .hilarious-img {
        width: 112px;
        height: 112px;
      }
    }
    .desc-list {
      display: flex;
      .desc-item {
        flex: 1;
        padding: 30px 20px;
        margin-right: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .1);
        color: $ft-color-main;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
</style>
