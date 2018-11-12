<template>
<div>
    <Card style="overflow:hidden">
        <Row>
            <h1 class='wk-title'> Workspace </h1>
        </Row>
        <el-steps :active="0" finish-status="success" simple style="margin-top: 20px; width: 105%; margin-left: -2.5%">
                <el-step title="Step1 输入" ></el-step>
                <el-step title="Step2 确认" ></el-step>
                <el-step title="Step3 微调" ></el-step>
                <el-step title="Step4 保存" ></el-step>
        </el-steps>
        <div v-if="true">
            <createBoard></createBoard>
        </div>
        <div v-else-if="type === 'B'">
            <adjustBoard></adjustBoard>
        </div>
        <div v-else-if="type === 'C'">
            <reviewBoard></reviewBoard>
        </div>
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
        height: 40px;
        width: 110%;
        margin:-20px;
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
      image: this.url
    }
  },
  components: {
    createBoard,
    adjustBoard,
    reviewBoard
  }
}
</script>
