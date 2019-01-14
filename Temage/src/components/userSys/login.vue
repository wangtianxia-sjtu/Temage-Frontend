<template>
  <div>
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
