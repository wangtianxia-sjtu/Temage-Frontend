<template>
  <div style='text-align: center'>
    <p class='cons'> 成果预览</p>
    <div class='show-res'>
      <Card style="height:600px; overflow: hidden;">
        <iframe id="achievement" :src="this.url" style='width: 108%; height:608px;margin-left:-4%;margin-top:-18px'></iframe>
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

</style>
<script>
import axios from 'axios'
import Cookies from 'js-cookie'
export default {
  name: 'create',
  data () {
    return {
      ID: 0,
      value2: null,
      url: null
    }
  },
  mounted () {
    this.ID = this.work_id
    console.log('is :', this.ID)
    setTimeout(() => {
      this.$axios({
        method: 'post',
        url: process.env.API.workflow.finished_work,
        data: {
          productID: 28
        },
        withCredentials: true,
        headers: {Authorization: Cookies.get('login_token')}
      }).then(response => {
        if (response.status !== 200) {
          this.$Message.error('服务器状态错误! 错误码:' + response.status)
        } else {
          this.url = response.data.url
        }
      })
    }, 2000)
  },
  methods: {
    save () {
    },
    handStars () {
      this.$emit('hearStars', this.value2)
    }
  },
  components: {axios},
  props: {
    work_id: 0
  }
}
</script>
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
