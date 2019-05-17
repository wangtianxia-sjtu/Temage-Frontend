<template>
<div>
    <Card style="overflow:hidden">
            <Spin fix size='large' v-if="spinShow"></Spin>
        <Row>
            <h1 class='wk-title' style="font-size: 2em; font-weight: bold;"> Workspace </h1>
        </Row>
        <el-steps :active=this.status finish-status="success" simple style="margin-top: 0px; width: 105%; margin-left: -2.5%">
                <el-step title="Step1 输入" ></el-step>
                <el-step title="Step2 确认" ></el-step>
                <el-step title="Step3 微调" ></el-step>
                <el-step title="Step4 保存" ></el-step>
        </el-steps>
        <div v-if="status === 0">
            <createBoard ref="createText"
                         v-on:setText="updateText"
                         v-on:setTitle="updateTitle"
                         v-on:setID="updateID">
            </createBoard>
        </div>
        <div v-else-if="status === 1">
            <adjustBoard ref="picStyles" v-bind:guess="style"
                         :product-i-d="this.productID"
                         v-on:setStyle="updateStyle"
                         v-on:handoverHtml="updateHtml"></adjustBoard>
        </div>
        <div v-else-if="status === 2">
            <reviewBoard :rec_html="this.res_html"
                         :t_title="this.title"
                         :tmg_style="this.style_tab"
                         :tmg_tensor="this.tensor"
                         :product-i-d="this.productID"
                         v-on:res_html="updateHtml"
                         ref="reviewBoard"></reviewBoard>
        </div>
        <div v-else-if="status === 3">
            <ratingBoard ref="rateBo"
                         :work_id="this.productID"
                         v-on:hearStars="updateStars"></ratingBoard>
        </div>
        <Row style='margin-top:40px;  margin-bottom: 3%;'>
                <div v-if="status === 0">
                    <Button @click="last"  class='lastt' disabled style="width: 20%">Last</Button>
                    <Button type="primary" @click='next' class='next' style='float: right;width: 20%'>Next</Button>
                </div>
                <div v-else-if="status === 3">
                    <Row>
                    <Col span='8'><Button @click="last"  class='lastt' style="width: 60%">Last</Button></Col>
                    <Col span='8' style='text-align: center'>
                      <Icon size="40" type="md-download" color="black" @click="download"/>
                    </Col>
                    <Col span='8'><Button type="primary" @click='save' style='float: right;width: 60%'>Save</Button></Col>
                    </Row>
                    <img id='downImg' src='' style='display: none;' />
                </div>
                <div v-else>
                    <Button @click="last"  class='lastt' style="width: 20%">Last</Button>
                    <Button type="primary" @click='next' class='nextt' style='float: right;width: 20%'>Next</Button>
                </div>
        </Row>
    </Card>
</div>
</template>
<style>
    .ivu-card-bordered{
        margin: 20px;
    }
    .next{
    }
    .wk-title{
        text-align: center;
        color: rgb(255, 255, 255);
        font-family: 'Courier New', Courier, monospace;
        height: 45px;
        width: 110%;
        margin-left: -5%;
        margin-top:-16px;
        background: #5e9eda;
    }
</style>
<script>
import createBoard from '@/components/widgets/core/create.vue'
import adjustBoard from '@/components/widgets/core/adjust.vue'
import reviewBoard from '@/components/widgets/core/review.vue'
import ratingBoard from '@/components/widgets/core/rating.vue'
import axios from 'axios'
import Cookies from 'js-cookie'
import * as tf from '@tensorflow/tfjs'
export default {
  name: 'workspace',
  data () {
    return {
      text: null,
      image: this.url,
      status: 0,
      spinShow: false,
      model: null,
      response_mtx: null,
      tensor: [],
      style: {},
      style_tab: [],
      res_html: '',
      productID: 0,
      work_url: '',
      download_url: '',
      title: null,
      stars: 0,
      done: false
    }
  },
  created () {
    tf.loadModel('/static/text_classification.json').then(model => {
      this.model = model
    })
  },
  methods: {
    save () {
      this.$refs.rateBo.handStars()
      this.$axios({
        method: 'post',
        url: process.env.API.workflow.confirm_store,
        data: {productID: this.productID, stars: this.stars},
        withCredentials: true,
        headers: {Authorization: Cookies.get('login_token')}
      }).then(response => {
        if (response.status !== 200) {
          this.$Message.error('服务器状态错误! 错误码:' + response.status)
        } else {
          this.$Message.success('保存成功')
          this.$router.push('/id/recent')
        }
      })
    },
    download () {
      this.$axios({
        method: 'post',
        url: process.env.API.workflow.download_picture,
        data: {productID: this.productID},
        withCredentials: true,
        headers: {Authorization: Cookies.get('login_token')}
      }).then(response => {
        if (response.status !== 200) {
          this.$Message.error('服务器状态错误! 错误码:' + response.status)
        } else {
          this.$Message.success('下载中')
          let imgsrc = response.data.url
          let imgname = 'Temage-NO' + this.productID + '.png'
          this.downloadIamge(imgsrc, imgname)
        }
      })
    },
    downloadIamge (imgsrc, name) {
      var image = new Image()
      image.setAttribute('crossOrigin', 'anonymous')
      image.onload = function () {
        var canvas = document.createElement('canvas')
        canvas.width = image.width
        canvas.height = image.height
        var context = canvas.getContext('2d')
        context.drawImage(image, 0, 0, image.width, image.height)
        var url = canvas.toDataURL('image/png')
        var a = document.createElement('a')
        var event = new MouseEvent('click')
        a.download = name || 'photo'
        a.href = url
        a.dispatchEvent(event)
      }
      image.src = imgsrc
    },
    last () {
      this.status--
    },
    next () {
      /*
       * When click next btn
       */
      let resVec = []
      let resModel = {}
      let _this = this
      if (this.status === 0) {
        /*
         * Step One: Upload + inference
         */
        this.$Spin.show()
        // loading...
        this.$refs.createText.$refs.textUpload.textUpload().then(response => {
          this.$refs.createText.$refs.imgUpload.submitUpload()
        }).catch(err => {
          console.log(err)
        })
        // infer style form modal according to this.text
        // get matrix from back end
        this.$axios({
          method: 'post',
          url: process.env.API.deepLearning.get_embedding,
          withCredentials: true,
          headers: {Authorization: Cookies.get('login_token')},
          data: {text: this.text}
        }).then(response => {
          if (response.status !== 200) {
            this.$Message.error('服务器状态错误! 错误码:' + response.status)
          } else {
            this.response_mtx = response.data
            // run with model
            const buffer = tf.buffer([1, 20, 1024, 1])
            for (let i = 0; i < 20; i++) {
              for (let j = 0; j < 1024; j++) {
                buffer.set(this.response_mtx[0][i][j][0], 0, i, j, 0) // all 1
              }
            }
            let inputData = buffer.toTensor()
            const prediction = this.model.predict(inputData)
            prediction.print()
            let promiseRes = Promise.resolve(prediction.data())
            let _this = this
            promiseRes.then(function (result) {
              console.log('TensorRes ', result)
              for (var i = 0; i < 15; i++) {
                resVec.push(parseFloat(result[i].toFixed(4)))
              }
              resVec_sorted = resVec.slice(0)
              resVec_sorted.sort()
              resVec_sorted.reverse()
              // set result
              let nameIndex = [[-1, 0], [-1, 0], [-1, 0], [-1, 0]]

              for (var j = 0; j < 4; ++j) {
                let rate = resVec_sorted[j]
                for (var k = 0; k < 15; ++k) {
                  if (rate == resVec[k]) {
                    nameIndex[j] = [rate, k]
                  }
                }
              }

              /* for (var j = 0; j < 15; j++) {
                let rate = resVec[j]
                for (var k = 0; k < 4; k++) {
                  if (rate > nameIndex[k][0]) {
                    nameIndex[k] = [rate, j]
                    break
                  }
                }
              } */
              console.log('infer ', nameIndex)
              let namesTable = process.env.styleNames
              let resName = []
              let resRate = []
              for (var n = 0; n < 4; n++) {
                resRate.push(nameIndex[n][0].toFixed(5))
                resName.push(namesTable[nameIndex[n][1]])
              }
              if (nameIndex[n][0] == 1) {
                let div = Math.random() * 6.18
                nameIndex[n][0] = (0.80 - div).toFixed(5)
                nameIndex[n][1] = (0.10 + 0.5 * div).toFixed(5)
                nameIndex[n][1] = (0.5 + 0.3 * div).toFixed(5)
                nameIndex[n][1] = (0.5 + 0.2 * div).toFixed(5)
              }
              let resultFormModal = {
                name: resName,
                rate: resRate
              }
              resModel = resultFormModal
              _this.style = resModel
              _this.tensor = resVec
              _this.$Spin.hide()
              _this.status++
              console.log('infer2 ', _this.style)
            })
          }
          // setTimeout(() => {
          // }, 500)
        })
        // if everything is fine
        // end loading; status ++
      } else if (this.status === 1) {
        /*
         * Step Two: Choose right styles + Upload
         */
        this.$Spin.show()
        // loading...
        this.$axios({
          method: 'post',
          url: '/api/workflow/push_match_event/',
          withCredentials: true,
          headers: {
            Authorization: Cookies.get('login_token'),
            Connection: 'Keep-Alive: timeout=500'
          },
          data: {productID: this.productID}
        }).then(response => {
          console.log('pme', response)
          _this.done = true
          this.$refs.picStyles.$refs.styleRes.stylesUpload()
        })
        // setTimeout(() => {
        //   this.$Spin.hide()
        //   this.status++
        // }, 1000)
      } else if (this.status === 2) {
        /*
         * Step Three: Save reviewed html
         */
        this.$Spin.show()
        // loading...
        this.$refs.reviewBoard.$refs.editorBoard.storeHtml()
        setTimeout(() => {
          this.$Spin.hide()
          this.status++
        }, 1000)
      } else if (this.status === 3) {
      }
    },
    updateText: function (msg) {
      this.text = msg
    },
    updateTitle: function (msg) {
      this.title = msg
    },
    updateStyle: function (msg) {
      this.style_tab = msg
    },
    updateHtml: function (msg) {
      this.res_html = msg
      this.$Spin.hide()
      this.status++
    },
    updateID: function (msg) {
      this.productID = msg
    },
    updateStars: function (msg) {
      this.stars = msg
    }
  },
  components: {
    createBoard,
    adjustBoard,
    reviewBoard,
    ratingBoard,
    axios
  }
}
</script>
