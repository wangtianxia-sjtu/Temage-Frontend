<template>
  <Row>
    <Col :span="8" :offset="8">
      <Card style="margin-top: 20%">
        <Row>
          <Col :span="20"><p class="title">新用户注册</p></Col>
          <Col :span="4">
            <router-link to="/login">
            <Button @click="handleReset('formValidate')" style="margin-right: -18px" >登录</Button>
            </router-link>
          </Col>
        </Row>
  <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
    <FormItem label="Name" prop="username">
      <Input v-model="formValidate.username" placeholder="Enter your name"></Input>
    </FormItem>
    <FormItem label="Password" prop="password">
        <Input type="password" v-model="formValidate.password" placeholder="Enter password"></Input>
    </FormItem>
    <FormItem label="E-mail" prop="email">
      <Input v-model="formValidate.email" placeholder="Enter your e-mail"></Input>
    </FormItem>
    <FormItem label="Hobby" prop="interest">
      <CheckboxGroup v-model="formValidate.interest">
        <Checkbox label="constellation" value="true"></Checkbox>
        <Checkbox label="economics" value="true"></Checkbox>
        <Checkbox label="education" value="true"></Checkbox>
        <Checkbox label="entertainment" value="true"></Checkbox>
        <Checkbox label="fashion" value="true"></Checkbox>
        <Checkbox label="furniture" value="true"></Checkbox>
        <Checkbox label="stock" value="true"></Checkbox>
        <Checkbox label="sport" value="true"></Checkbox>
        <Checkbox label="game" value="true"></Checkbox>
        <Checkbox label="lottery" value="true"></Checkbox>
        <Checkbox label="politics" value="true"></Checkbox>
        <Checkbox label="real-estate" value="true"></Checkbox>
        <Checkbox label="science-technology" value="true"></Checkbox>
        <Checkbox label="society" value="true"></Checkbox>
      </CheckboxGroup>
    </FormItem>
    <FormItem label="Desc" prop="desc">
      <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formValidate')" class="tmg-btn-re">注册</Button>
      <Button @click="handleReset('formValidate')" style="margin-left: 8px" class="tmg-btn2-re">清空</Button>
    </FormItem>
    </Form>
      </Card>
    </Col>
  </Row>
</template>
<script>
import axios from 'axios'
export default {
  component: {
    axios
  },
  data () {
    return {
      formValidate: {
        username: '',
        password: '',
        email: '',
        interest: [],
        desc: ''
      },
      ruleValidate: {
        username: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ],
        interest: [
          { required: false, type: 'array', min: 0, message: 'Choose at least one hobby', trigger: 'change' },
          { type: 'array', max: 14, message: 'Choose two hobbies at best', trigger: 'change' }
        ],
        desc: [
          { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
          { type: 'string', min: 2, message: 'Introduce no less than 2 words', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          { type: 'string', min: 2, message: '密码长度需要大于2位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$axios({
            method: 'post',
            url: process.env.API.user.post_register,
            data: this.formValidate,
            withCredentials: true
          })
            .then(response => {
              console.log(response)
              if (response.status === 200) {
                this.$Message.success('Success!')
                this.$Spin.show({
                  render: (h) => {
                    return h('div', [
                      h('Icon', {
                        'class': 'demo-spin-col',
                        props: {
                          type: 'ios-loading',
                          size: 78
                        }
                      }),
                      h('div', '注册成功, 正在跳转!')
                    ])
                  }
                })
                setTimeout(() => {
                  this.$Spin.hide()
                }, 2000)
                this.$router.push('/login')
              } else {
                this.$Message.error('Fail!')
              }
            })
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>
<style>
  .tmg-btn-re {
    color: #fff;
    background-color: #2460a0;
    border-color: #2460a0;
    font-size: 16px;
    width: 50%;
    margin-left: -20%;
  }
  .tmg-btn2-re {
    font-size: 16px;
    width: 50%;
    /*margin-left: -40%;*/
  }
  .title {
    font-size: 36px;
    margin-bottom: 15px;
    margin-top: -10px;
    margin-left: 20%;
  }.
     .demo-spin-col{
       height: 100px;
       position: relative;
       border: 1px solid #eee;
     }
</style>
