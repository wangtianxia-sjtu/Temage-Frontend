<template>
  <Row>
  <Col :span="8" :offset="8">
    <Card style="margin-top:20%">
      <router-link to="/">
      <img :src="imgsrc" class="image" style="width: 100%">
      </router-link>
      <Row>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline="false">
      <Row>
        <FormItem prop="username">
        <Input type="text" v-model="formInline.username" placeholder="Username" style="width: 180%; margin-left: -40%;">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
        </FormItem>
      </Row>
        <Row>
          <FormItem prop="password">
          <Input type="password" v-model="formInline.password" placeholder="Password" style="width: 180%; margin-left: -40%;">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
          </FormItem>
        </Row>
        <Row>
    <FormItem>
      <Row>
        <Col :span="1"> <Button type="primary" class="tmg-btn-lo" @click="handleSubmit('formInline')">登录</Button></Col>
        <Col :span="6" :offset="12">
          <router-link to="/register">
          <Button type="default" class="tmg-btn2-lo" >注册</Button>
          </router-link>
        </Col>
      </Row>
    </FormItem>
        </Row>
    </Form>
      </Row>
    </Card>
  </Col>
  </Row>
</template>
<script>
import axios from 'axios'
import Cookies from 'js-cookie'
export default {
  components: {
    axios
  },
  data () {
    return {
      formInline: {
        username: '',
        password: ''
      },
      ruleInline: {
        username: [
          { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          { type: 'string', min: 2, message: '密码长度需要大于2位', trigger: 'blur' }
        ]
      },
      imgsrc: require('@/assets/logo-min2.png'),
      validUser: false
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          console.log(this.formInline)
          this.$axios({
            method: 'post',
            url: '/login/submit',
            data: this.formInline,
            withCredentials: true
          }).then(response => {
            console.log('API: /login/submit------------')
            console.log(response)
            if (response.status === 200) {
              Cookies.set('login_token', response.data, {expires: 1})
              this.$Message.success('登陆成功!')
              this.validUser = true
              this.$router.push('/id')
              return 0
            } else if (response.status === 500) {
              this.$Message.error('用户名或者密码错误!')
            } else {
              var errorCode = response.status
              this.$Message.error('服务器状态错误! 错误码:' + errorCode)
            }
          })
        } else {
          this.$Message.error('用户名或者密码错误!')
        }
      })
    }
  }
}
</script>
<style>
  .tmg-btn-lo {
    color: #fff;
    background-color: #2460a0;
    border-color: #2460a0;
    font-size: 16px;
    width: 100px;
    /*margin-left: -40%;*/
  }
  .tmg-btn2-lo {
    font-size: 16px;
    width: 100px;
    /*margin-left: -40%;*/
  }
</style>
