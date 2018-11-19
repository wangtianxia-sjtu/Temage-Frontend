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
            <createBoard></createBoard>
        </div>
        <div v-else-if="status === 1">
            <adjustBoard></adjustBoard>
        </div>
        <div v-else-if="status === 2">
            <reviewBoard></reviewBoard>
        </div>
        <div v-else-if="status === 3">
            <ratingBoard></ratingBoard>
        </div>
        <Row style='margin-top:40px;  margin-bottom: 3%;'>
                <div v-if="status === 0">
                    <Button @click="last" disabled style="width: 20%">Last</Button>
                    <Button type="primary" @click='next' style='float: right;width: 20%'>Next</Button>
                </div>
                <div v-else-if="status === 3">
                    <Row>
                    <Col span='8'><Button @click="last" style="width: 60%">Last</Button></Col>
                    <Col span='8' style='text-align: center'><a href="https://libilibi.cqdulux.cn/full/messi.jpg"  download="messi.png"><Icon size="40" type="md-download" color="black"/></a></Col>
                    <Col span='8'><Button type="primary" @click='save' style='float: right;width: 60%'>Save</Button></Col>
                    </Row>
                </div>
                <div v-else>
                    <Button @click="last" style="width: 20%">Last</Button>
                    <Button type="primary" @click='next' style='float: right;width: 20%'>Next</Button>
                </div>
        </Row>
    </Card>
</div>
</template>
<style>
    .ivu-card-bordered{
        margin: 20px;
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
      text: this.value,
      image: this.url,
      status: 0,
      spinShow: false
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
      console.log('next')
      this.spinShow = true
      setTimeout(() => {
        this.spinShow = false
        this.status++
      }, 1000)
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
