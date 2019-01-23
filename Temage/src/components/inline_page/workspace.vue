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
            <adjustBoard v-bind:guess="style"></adjustBoard>
        </div>
        <div v-else-if="status === 2">
            <reviewBoard></reviewBoard>
        </div>
        <div v-else-if="status === 3">
            <ratingBoard></ratingBoard>
        </div>
        <Row style='margin-top:40px;  margin-bottom: 3%;'>
                <div v-if="status === 0">
                    <Button @click="last"  class='lastt' disabled style="width: 20%">Last</Button>
                    <Button type="primary" @click='next' class='next' style='float: right;width: 20%'>Next</Button>
                </div>
                <div v-else-if="status === 3">
                    <Row>
                    <Col span='8'><Button @click="last"  class='lastt' style="width: 60%">Last</Button></Col>
                    <Col span='8' style='text-align: center'><a href="https://libilibi.cqdulux.cn/full/messi.jpg"  download="messi.png"><Icon size="40" type="md-download" color="black"/></a></Col>
                    <Col span='8'><Button type="primary" @click='save' style='float: right;width: 60%'>Save</Button></Col>
                    </Row>
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
export default {
  name: 'workspace',
  data () {
    return {
      text: null,
      image: this.url,
      status: 0,
      spinShow: false,
      style: {},
      style_tab: []
    }
  },
  methods: {
    save () {
    },
    download () {
    },
    last () {
      console.log('last')
      this.status--
    },
    next () {
      /*
       * Step One: Upload + inferance
       */
      if (this.status === 0) {
        this.spinShow = true
        // loading...
        this.$refs.createText.$refs.imgUpload.submitUpload()
        this.$refs.createText.$refs.textUpload.textUpload()
        console.log('text:' + this.text)
        // infer style form modal according to this.text
        let resultFormModal = {
          name: ['sports', 'movie', 'art', 'tec'],
          rate: [0.841, 0.32, 0.21, 0.102]
        }
        this.style = resultFormModal
        // if everything is fine
        this.status++
        // end loading
        this.spinShow = false
      } else if (this.status === 1) {
        // do
      } else if (this.status === 2) {
        // do
      }
    },
    updateText: function (msg) {
      this.text = msg
    }
  },
  components: {
    createBoard,
    adjustBoard,
    reviewBoard,
    ratingBoard
  }
}
</script>
