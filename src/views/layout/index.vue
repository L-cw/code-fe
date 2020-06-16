<!--
 * @Date: 2020-06-17 01:14:57
 * @Author: Leo
 * @LastEditors: Leo
 * @LastEditTime: 2020-06-17 01:24:16
 * @Description: Do not edit
 * @FilePath: \code-fe\src\views\layout\index.vue
--> 
<template>
  <div class="page">
    <v-header />
    <router-view class="page-cont"></router-view>
    <v-footer />
  </div>
</template>

<script>
import VHeader from './Header'
import VFooter from './Footer'
export default {
  name: 'Layout',
  components: {
    VHeader,
    VFooter
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
