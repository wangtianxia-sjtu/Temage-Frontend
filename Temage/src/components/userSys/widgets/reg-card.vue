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
    <FormItem label="Name" prop="name">
      <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
    </FormItem>
    <FormItem label="E-mail" prop="mail">
      <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
    </FormItem>
    <FormItem label="Hobby" prop="interest">
      <CheckboxGroup v-model="formValidate.interest">
        <Checkbox label="Sports"></Checkbox>
        <Checkbox label="Art"></Checkbox>
        <Checkbox label="Tech"></Checkbox>
        <Checkbox label="Movie"></Checkbox>
        <Checkbox label="Porn"></Checkbox>
      </CheckboxGroup>
    </FormItem>
    <FormItem label="Desc" prop="desc">
      <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formValidate')" class="tmg-btn">注册</Button>
      <Button @click="handleReset('formValidate')" style="margin-left: 8px" class="tmg-btn2">清空</Button>
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
        name: '',
        mail: '',
        interest: [],
        desc: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ],
        interest: [
          { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
          { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
        ],
        desc: [
          { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
          { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          axios
            .post('http://localhost:3030/api/register', this.formInline)
            .then(response => {
              console.log(response)
            })
          this.$Message.success('Success!')
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
  .tmg-btn {
    color: #fff;
    background-color: #2460a0;
    border-color: #2460a0;
    font-size: 16px;
    width: 50%;
    margin-left: -20%;
  }
  .tmg-btn2 {
    font-size: 16px;
    width: 50%;
    /*margin-left: -40%;*/
  }
  .title {
    font-size: 36px;
    margin-bottom: 15px;
    margin-top: -10px;
    margin-left: 20%;
  }
</style>
