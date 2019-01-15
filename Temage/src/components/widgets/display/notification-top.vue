<template>
<div>
  <div @click="value1 = true" type="primary">{{this.username}} &nbsp;
      <Avatar shape="square" :icon="this.avator" v-if="no_avator"/>
      <Avatar shape="square" :src="this.avator" v-else/>
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
      value1: false,
      username: null,
      avator: null,
      no_avator: false
    }
  },
  mounted () {
    let isLogin = Cookies.get('login_token')
    if (isLogin !== undefined) {
      this.$axios({
        method: 'post',
        url: '/authenticate',
        data: {'token': isLogin},
        withCredentials: true
      }).then(response => {
        console.log(response)
        this.username = response.data.username
        this.no_avator = response.data.avator === undefined
        this.avator = response.data.avator === undefined ? 'ios-person' : response.data.avator
      })
    } else {
      this.$router.push('/')
    }
  }

}
</script>
