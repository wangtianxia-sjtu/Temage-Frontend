<template>
  <div>
    <Card style="margin-top: 30px; width: 70%; margin-left: 15%; margin-bottom: 50px">
      <Divider orientation="left" style="font-size: 38px">{{this.title}}</Divider>
      <Row>
        <Col :span="3" :offset="1"><h2>文章风格:</h2></Col>
      <Col :span="10"><el-tag
        v-for="tag in style"
        :key="tag"
        type="success"
        style="margin-right: 10px;">
        {{tag}}
      </el-tag></Col>
      </Row>
      <Divider dashed />
      <div id="text_container" v-html="this.html"></div>
      <Divider dashed />
      <p style="text-align: right; margin-top: -20px; margin-bottom: 20px">作者: {{this.creator.username}}</p>
      <Row>
        <Col :span="6" :offset="0"><Button type="primary" @click="collect" style="width: 100%">Collect</Button></Col>
        <Col :span="6" :offset="3"><Button type="success" style="width: 100%">Fork</Button></Col>
        <Col :span="6" :offset="3"><Button type="default" @click="back" style="width: 100%">Back</Button></Col>
      </Row>
    </Card>
  </div>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie'
export default {
  name: 'text',
  components: {
    axios
  },
  mounted () {
    this.$axios({
      method: 'post',
      url: 'api/text/',
      data: {id: this.id},
      withCredentials: true
    }).then(response => {
      console.log(response.data)
      this.creator = response.data.creator
      this.html = response.data.text
      this.title = response.data.title
      this.style = response.data.style
      this.id = response.data.id
    })
  },
  data () {
    return {
      creator: null,
      html: null,
      title: null,
      style: null,
      id: this.$route.params.id
    }
  },
  methods: {
    back () {
      this.$router.push(this.$router.push('/id/gallery'))
    },
    collect () {
      this.$axios({
        method: 'post',
        url: '/api/collect/',
        data: {id: this.id},
        withCredentials: true,
        headers: {Authorization: Cookies.get('login_token')}
      }).then(response => {
        if (response.status !== 200) {
          this.$Message.error('服务器状态错误! 错误码:' + response.status)
        } else {
          this.$Message.success({
            content: '已加入到我的收藏!',
            duration: 3,
            closable: true
          })
        }
      })
    }
  }
}
</script>

<style>
  body{
    overflow: hidden;
  }
</style>
