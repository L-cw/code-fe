<!--
 * @Date: 2020-06-17 01:14:57
 * @Author: Leo
 * @LastEditors: Leo
 * @LastEditTime: 2020-12-18 00:42:58
 * @Description: Do not edit
 * @FilePath: \toolkitg:\workspace-self\code-fe\src\views\layout\index.vue
--> 
<template>
  <div class="page">
    <github-corner />
    <v-header />
    <router-view class="page-cont"></router-view>
    <v-footer />
  </div>
</template>

<script>
import VHeader from './Header'
import VFooter from './Footer'
import GithubCorner from './GithubCorner'
export default {
  name: 'Layout',
  components: {
    VHeader,
    VFooter,
    GithubCorner
  },
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
  .page {
    min-width: $type-area;
  }
</style>
