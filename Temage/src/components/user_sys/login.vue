<template>
  <div class="login">
    <login-card></login-card>
  </div>
</template>
<script>
import tmgInput from './widgets/input'
import loginCard from './widgets/login-card'
import axios from 'axios'
export default {
  components: {
    axios,
    tmgInput,
    loginCard
  },
  name: 'login'
}
</script>
<style scoped>
.login{
  background: url('../../assets/tmbg-01.png');
  background-position: center 10%;
  background-size:cover;
  min-height: 100%;
}
</style>
