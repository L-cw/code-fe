<!--
 * @Date: 2020-12-18 00:51:39
 * @Author: Leo
 * @LastEditors: Leo
 * @LastEditTime: 2020-12-18 01:59:57
 * @Description: Do not edit
 * @FilePath: \toolkitg:\workspace-self\code-fe\src\views\tools\resources\miniApp.vue
-->
<template>
  <div class="mini-app-list-page">
    <div class="page-intro">本页面是小程序球友群的群友提供过的小程序列表，供大家快速查看群友分享的小程序</div>

    <div class="app-list">
      <div
        v-for="(item, index) in appList"
        :key="index"
        class="app-item-wrapper"
      >
        <div class="flex app-basic">
          <div class="app-icon">
            <el-image
              class="img"
              :src="item.avatar" >
            </el-image>
          </div>
          <div class="app-info">
            <div class="app-info-name">{{ item.name }}</div>
            <div class="app-info-desc ellipsis-2lines">{{ item.desc }}</div>
          </div>
        </div>
        <div class="flex dev-info">
          <div class="btn app-id">{{ item.appId }}</div>
          <div class="flex developers">
            <div
              v-for="(developer, index) in item.developers"
              :key="index"
              class="flex developer-item">
              <el-image
                class="img developer-avatar"
                :src="developer.avatar" >
              </el-image>
              <div class="developer-name">{{ developer.name }}</div>
            </div>
          </div>
        </div>
        <div class="flex link-wrapper">
          <div class="link-item" >
            <div class="link-text">体验版</div>
            <el-image 
              class="img link-img"
              :src="item.link.trial" 
              :preview-src-list="[item.link.trial, item.link.release]">
            </el-image>
          </div>
          <div class="link-item">
            <div class="link-text">正式版</div>
            <el-image 
              class="img link-img"
              :src="item.link.release" 
              :preview-src-list="[item.link.trial, item.link.release]">
            </el-image>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { appList } from './mini-app-list'
export default {
  name: 'ToolsMiniAppList',
  data () {
    return {
      appList
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .mini-app-list-page {
    .page-intro {
      padding: 16px;
      margin-bottom: 20px;
      background-color: #fdf6ec;
      color: #e6a23c;
    }

    .app-list {
      .app-item-wrapper {
        width: 400px;
        padding: 16px;
        border: 1px solid #eee;
        border-radius: 6px;
        .app-basic {
          padding-bottom: 16px;
          border-bottom: 1px dashed #eee;
          .app-icon {
            width: 64px;
            height: 64px;
            margin-right: 16px;
            flex-shrink: 0;
          }
          .app-info {
            flex: 1;
            .app-info-name {
              font-size: 16px;
              margin-bottom: 10px;
              color: #333;
            }
            .app-info-desc {
              line-height: 1.5;
              color: #666;
            }
          }
        }

        .dev-info {
          padding: 10px 16px;
          border-bottom: 1px dashed #eee;
          .app-id {
            font-size: 12px;
            margin-right: 16px;
            flex-shrink: 0;
          }
          .developers {
            flex: 1;
            justify-content: flex-end;
            .developer-item {
              .developer-avatar {
                width: 16px;
                height: 16px;
                margin-right: 10px;
                border-radius: 50%;
                overflow: hidden;
              }
              .developer-name {
                font-size: 12px;
                color: #333;
              }
            }
          }
        }
        
        .link-wrapper {
          justify-content: space-around;
          .link-item {
            padding: 16px 10px;
            .link-img {
              width: 80px;
              height: 80px;
            }
            .link-text {
              font-size: 12px;
              margin-bottom: 10px;
              color: #999;
              text-align: center;
            }
          }
        }
      }
    }
  }
</style>
