<!--
 * @Date: 2020-06-17 01:14:57
 * @Author: Leo
 * @LastEditors: Leo
 * @LastEditTime: 2020-06-21 12:30:06
 * @Description: Do not edit
 * @FilePath: \code-fe\src\views\layout\index.vue
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

</style>
