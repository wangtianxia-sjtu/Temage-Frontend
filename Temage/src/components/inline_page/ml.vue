<template>
  <div id="app">
    <button @click="predict"> click</button>
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
    tf.loadModel('/static/model_wtx.json').then(model => {
      this.model = model
    })
  },
  methods: {
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
      let promiseRes = Promise.resolve(prediction.data())
      promiseRes.then(function (result) { console.log(result) })
    }
  }
}
</script>
