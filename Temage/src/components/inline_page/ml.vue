<template>
  <div id="app">
    <button @click="predict"> click</button>
    <div class="clear" @click="clear">clear</div>
    <p class="result">识别结果：{{result}} </p>
  </div>
</template>
<script>
import * as tf from '@tensorflow/tfjs'
import axios from 'axios'
import Cookies from 'js-cookie'
export default {
  name: 'ml',
  data () {
    return {
      result: '',
      loading: true,
      modelLoadingProgress: 0,
      response_mtx: null
    }
  },
  components: {
    axios
  },
  mounted () {
    this.$axios({
      method: 'post',
      url: '/api/matrix',
      withCredentials: true,
      headers: {Authorization: Cookies.get('login_token')}
    }).then(response => {
      if (response.status !== 200) {
        this.$Message.error('服务器状态错误! 错误码:' + response.status)
      } else {
        this.response_mtx = response.data
        console.log(this.response_mtx)
      }
    })
  },
  created () {
    tf.loadModel('http://0.0.0.0:8081/static/model_wtx.json').then(model => {
      this.model = model
    })
  },
  methods: {
    handleLoadingProgress (progress) {
      this.modelLoadingProgress = Math.round(progress)
    },
    drawEnd () {
      if (!this.listenMouseMove) return
      this.listenMouseMove = false
      delete this.previousX
      delete this.previousY
      this.predict()
    },
    drawLine (x, y) {
      const {
        canvas
      } = this.$refs
      const ctx = canvas.getContext('2d')
      ctx.lineWidth = 20
      ctx.lineJoin = ctx.lineCap = 'round'
      ctx.strokeStyle = '#393E46'
      ctx.beginPath()
      const {
        previousX,
        previousY
      } = this
      if (previousX !== undefined) {
        ctx.moveTo(previousX, previousY)
      } else {
        ctx.moveTo(x, y)
      }
      ctx.lineTo(x, y)
      ctx.stroke()
      this.previousX = x
      this.previousY = y
    },
    predict () {
      console.log('hello')
      const buffer = tf.buffer([1, 20, 1024, 1])
      for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 1024; j++) {
          buffer.set(this.response_mtx[0][i][j][0], 0, i, j, 0) // all 1
        }
      }
      let inputData = buffer.toTensor()
      console.log(inputData)
      const prediction = this.model.predict(inputData)
      prediction.print()
      console.log(prediction.data())
    },
    clear () {
      const {
        canvas
      } = this.$refs
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, 280, 280)
      this.result = 'hello'
    }
  }
}
</script>
