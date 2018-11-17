<template>
  <div style='text-align: center'>
  <p class='cons'> 成果预览</p>
  <div class='show-res'>
  <Card style="height:600px; overflow: hidden;">
      <iframe id="achievement" src="http://106.15.225.249:8170/" style='width: 108%; height:608px;margin-left:-4%;margin-top:-18px'></iframe>
  </Card>
  <Card>
    <span class="demonstration"><p style='font-size: 25px'>结果如何?</p></span>
    <el-rate
      v-model="value2"
      :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
    </el-rate>
  </Card>
  </div>
</div>
</template>
<style>
  .cons{
      text-align: center;
      font-size: 30px;
      margin-top: 20px;
  }
  .show-res{
      width:50%;
      margin-left: 25%;
  }
</style>
<script>
export default {
  name: 'star',
  data () {
    return {
      value1: null,
      value2: null
    }
  }
}
</script>
