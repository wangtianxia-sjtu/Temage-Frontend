<template>
<div>
  <div @click="value1 = true" type="primary">Notification &nbsp;
      <Avatar shape="square" icon="ios-person" />
  </div>
  <Drawer title="事件" :closable="false" v-model="value1">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Drawer>
</div>
</template>
<script>
import axios from 'axios'
import Cookies from 'js-cookie'
export default {
  name: 'notice-top',
  component: axios,
  data () {
    return {
      value1: false
    }
  },
  mounted () {
    let isLogin = Cookies.get('is_login')
    if (isLogin !== undefined) {
      this.$axios({
        method: 'post',
        url: 'http://192.168.1.123:80/authenticate',
        data: isLogin,
        withCredentials: true
      })
    } else {
      this.$router.push('/')
    }
  }

}
</script>
