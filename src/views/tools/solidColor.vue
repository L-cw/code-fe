<template>
  <div class="solid-color-page">
    <div class="page-title">生成纯色图片</div>
    <div class="box-wrapper setting-bar">
      <div class="box-wrapper-title">配置栏</div>
      <el-row :gutter="20" type="flex" align="middle" class="setting-cont">
        <el-col :span="6" class="flex-center-all">
          <div class="setting-label">选择颜色</div>
          <el-color-picker
            v-model="color"
            size="mini"
            show-alpha
            :predefine="predefineColors"
          />
        </el-col>
        <el-col :span="18" class="flex-center-all">
          <div class="setting-label">输出尺寸</div>
          <el-input v-model="sizeWith" placeholder="宽">
            <template slot="append">px</template>
          </el-input>
          <el-input v-model="sizeHeight" placeholder="高">
            <template slot="append">px</template>
          </el-input>
        </el-col>
        <el-col :span="6" class="flex-center-all">
          <div class="setting-label">圆角大小</div>
          <el-input v-model="borderRadius" disabled placeholder="宽" />
        </el-col>
        <el-col :span="6" class="flex-center-all">
          <el-checkbox v-model="transparentFlag" disabled>背景透明</el-checkbox>
        </el-col>
      </el-row>
    </div>

    <div class="display-box">
      <canvas id="js_solid-color" width="" />
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      color: 'rgba(255, 69, 0, 0.68)',
      predefineColors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(120, 40, 94, 0.5)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)',
        '#c7158577'
      ],
      sizeWith: '720',
      sizeHeight: '360',
      borderRadius: '0',
      transparentFlag: false
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .solid-color-page {
    .setting-bar {
      .setting-label {
        flex-shrink: 0;
        margin-right: 10px;
      }
    }
  }
</style>
