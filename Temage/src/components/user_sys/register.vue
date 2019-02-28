<template>
  <div class="login">
    <reg-card></reg-card>
  </div>
</template>
<script>
import regCard from './widgets/reg-card.vue'
export default {
  components: {
    regCard
  },
  name: 'register'
}
</script>
<style>
  .login{
    background: url('../../assets/tmbg-01.png');
    background-position: center 10%;
    background-size:cover;
    min-height: 100%;
  }
</style>
