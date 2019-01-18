<template>
<div>
  <div @click="value1 = true" type="primary">{{this.username}} &nbsp;
      <Avatar shape="square" :icon="this.avator" v-if="no_avator"/>
      <Avatar shape="square" :src="this.avator" />
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
    let usrCookie = Cookies.get('login_token')
    if (usrCookie !== undefined) {
      this.$axios({
        method: 'post',
        url: '/authenticate',
        withCredentials: true,
        headers: {Authorization: usrCookie},
        data: {'token': usrCookie}
      }).then(response => {
        console.log('API: /authenticate------------')
        console.log(response)
        if (response.status === 200) {
          this.username = response.data.username
          this.no_avator = response.data.avator === undefined
          this.avator = (response.data.avator === undefined ? 'ios-person' : response.data.avator)
        } else {
          this.$router.push('/login')
        }
      })
    } else {
      this.$router.push('/')
    }
  }

}
</script>
