<template>
  <Row>
  <Col :span="8" :offset="8" style="margin-top:300px">
    <Card>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
      <Row>
        <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="Username">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
        </FormItem>
      </Row>
        <Row>
          <FormItem prop="password">
          <Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
          </FormItem>
        </Row>
        <Row>
    <FormItem>
      <Button type="primary" id="tmg-btn" @click="handleSubmit('formInline')">登录</Button>
    </FormItem>
        </Row>
    </Form>
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
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度需要大于6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
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
  #tmg-btn {
    color: #fff;
    background-color: #2460a0;
    border-color: #2460a0;
    font-size: 16px;
    width: 100%;
  }
</style>
