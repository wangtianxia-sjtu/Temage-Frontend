<template>
  <Row>
  <Col :span="8" :offset="8" style="margin-top:10%">
    <Card>
      <router-link to="/">
      <img :src="imgsrc" class="image" style="width: 100%">
      </router-link>
      <Row>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline="false">
      <Row>
        <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="Username" style="width: 180%; margin-left: -40%;">
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
        <Col :span="1"> <Button type="primary" class="tmg-btn" @click="handleSubmit('formInline')">登录</Button></Col>
        <Col :span="6" :offset="12"><Button type="default" class="tmg-btn2" @click="handleSubmit('formInline')">注册</Button></Col>
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
        user: [
          { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          { type: 'string', min: 2, message: '密码长度需要大于2位', trigger: 'blur' }
        ]
      },
      imgsrc: require('@/assets/logo-min2.png')
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          axios
            .post('http://192.168.1.227:8000/login/submit', this.formInline)
            .then(response => {
              console.log(response)
            })
          this.$Message.success('Success!')
        } else {
          this.$Message.error('用户名或者密码错误!')
        }
      })
    }
  }
}
</script>
<style>
  .tmg-btn {
    color: #fff;
    background-color: #2460a0;
    border-color: #2460a0;
    font-size: 16px;
    width: 100px;
    /*margin-left: -40%;*/
  }
  .tmg-btn2 {
    font-size: 16px;
    width: 100px;
    /*margin-left: -40%;*/
  }
</style>
