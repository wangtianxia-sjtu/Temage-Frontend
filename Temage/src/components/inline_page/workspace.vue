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
            <createBoard ref="createText" v-on:setText="updateText"></createBoard>
        </div>
        <div v-else-if="status === 1">
            <adjustBoard ref="picStyles" v-bind:guess="style"
                         v-on:setStyle="updateStyle"
                         v-on:handoverHtml="updateHtml"></adjustBoard>
        </div>
        <div v-else-if="status === 2">
            <reviewBoard :rec_html="this.res_html"
                         v-on:res_html="updateHtml"
                         v-on:new_id="updateID"
                         ref="reviewBoard"></reviewBoard>
        </div>
        <div v-else-if="status === 3">
            <ratingBoard ref="rateBo"
                         :work_id="this.workID"></ratingBoard>
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
export default {
  name: 'workspace',
  data () {
    return {
      text: null,
      image: this.url,
      status: 0,
      spinShow: false,
      style: {},
      style_tab: [],
      res_html: '',
      workID: 0,
      work_url: '',
      download_url: '',
      title: null
    }
  },
  methods: {
    save () {
      this.$axios({
        method: 'post',
        url: '/api/confirm_store/',
        data: {workID: this.workID},
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
        url: '/api/download/',
        data: {workID: this.workID},
        withCredentials: true,
        headers: {Authorization: Cookies.get('login_token')}
      }).then(response => {
        if (response.status !== 200) {
          this.$Message.error('服务器状态错误! 错误码:' + response.status)
        } else {
          this.$Message.success('下载中')
          let imgsrc = response.data.url
          let imgname = 'Temage-NO' + this.workID + '.png'
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
      console.log('last')
      this.status--
    },
    next () {
      /*
       * When click next btn
       */
      if (this.status === 0) {
        /*
         * Step One: Upload + inference
         */
        this.$Spin.show()
        // loading...
        this.$refs.createText.$refs.imgUpload.submitUpload()
        this.$refs.createText.$refs.textUpload.textUpload()
        console.log('text:' + this.text)
        // infer style form modal according to this.text
        let resultFormModal = {
          name: ['Sports', 'Movie', 'Art', 'Tec'],
          rate: [0.841, 0.32, 0.21, 0.102]
        }
        this.style = resultFormModal
        // if everything is fine
        // end loading; status ++
        setTimeout(() => {
          this.$Spin.hide()
          this.status++
        }, 1000)
      } else if (this.status === 1) {
        /*
         * Step Two: Choose right styles + Upload
         */
        this.$Spin.show()
        // loading...
        this.$refs.picStyles.$refs.styleRes.stylesUpload()
        setTimeout(() => {
          this.$Spin.hide()
          this.status++
        }, 1000)
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
    updateStyle: function (msg) {
      this.style_tab = msg
    },
    updateHtml: function (msg) {
      this.res_html = msg
    },
    updateID: function (msg) {
      this.workID = msg
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
