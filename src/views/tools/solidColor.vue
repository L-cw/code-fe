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
            @change="handleColorChange"
          />
        </el-col>
        <el-col :span="18" class="flex-center-all">
          <div class="setting-label">输出尺寸</div>
          <el-input
            v-model="sizeWith"
            placeholder="宽"
            disabled
            @input="handleWidthChange"
          >
            <template slot="append">px</template>
          </el-input>
          <el-input
            v-model="sizeHeight"
            placeholder="高"
            disabled
            @input="handleHeightChange"
          >
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
      <div class="display-box-title">预览：</div>
      <canvas id="js_solid-color-canvas" />
    </div>

    <div class="download-box">
      <a :href="imgBase64" download="纯色图片" class="download-btn">点击下载</a>
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
      imgBase64: '',
      transparentFlag: false
    }
  },
  mounted () {
    this.draw()
  },
  methods: {
    draw () {
      const canvas = document.getElementById('js_solid-color-canvas')
      const ctx = canvas.getContext('2d')

      canvas.width = this.sizeWith
      canvas.height = this.sizeHeight
      ctx.rect(0, 0, this.sizeWith, this.sizeHeight);
      ctx.fillStyle = this.color
      ctx.fill()

      this.imgBase64 = canvas.toDataURL('image/png')

    },

    handleColorChange () {
      this.draw()
    },
    handleWidthChange (e) {
      console.log(e)
    },
    handleHeightChange (e) {
      console.log(e)
    }
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

    .display-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      .display-box-title {
        font-size: 16px;
        width: 100%;
        font-weight: 500;
        margin-bottom: 20px;
      }
    }

    .download-box {
      display: flex;
      justify-content: center;
      .download-btn {
        position: relative;
        display: block;
        padding: 0 14px;
        height: 36px;
        line-height: 36px;
        border-radius: 6px;
        border: 1px solid #ccc;
        &:hover {
          border: 1px solid $theme-color;
          color: #fff;
          &:after {
            width: 100%;
          }
        }
        &:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 36px;
          border-radius: 6px;
          z-index: -1;
          background-color: $theme-color;
          transition: width .3s;
        }
      }
    }
  }
</style>
