<template>
<div>
    <Card style="overflow:hidden">
            <Spin fix size='large' v-if="spinShow"></Spin>
        <Row>
            <h1 class='wk-title'> Workspace </h1>
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
        <Row style='margin-top:15px; text-align: center'>
        <ButtonGroup>
                <Button @click="last">last</Button>
                <Button type="primary" @click='next'>next</Button>
        </ButtonGroup>
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
export default {
  name: 'workspace',
  data () {
    return {
      text: this.value,
      image: this.url,
      status: 0,
      spinShow: false,
    }
  },
  methods: {
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
      }, 3000)
    }
  },
  components: {
    createBoard,
    adjustBoard,
    reviewBoard
  }
}
</script>
