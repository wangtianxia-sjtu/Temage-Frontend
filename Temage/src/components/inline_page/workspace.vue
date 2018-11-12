<template>
<div>
    <Card style="overflow:hidden">
        <Row>
            <h1 class='wk-title'> Workspace </h1>
        </Row>
        <el-steps :active="0" finish-status="success" simple style="margin-top: 20px; width: 105%; margin-left: -20px">
                <el-step title="步骤 1" ></el-step>
                <el-step title="步骤 2" ></el-step>
                <el-step title="步骤 3" ></el-step>
        </el-steps>
        <createBoard></createBoard>
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
export default {
  name: 'workspace',
  data () {
    return {
      text: this.value,
      image: this.url
    }
  },
  components: {
    createBoard
  }
}
</script>
