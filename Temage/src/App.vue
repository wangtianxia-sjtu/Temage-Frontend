<template>
  <div id="app">
    <sideBar></sideBar>
    <img src="./assets/logo.png">
    <img src="./assets/logo.png">
    <img src="./assets/logo.png">
    <img src="./assets/logo.png">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import sideBar from './components/fixed/sidebar.vue'
export default {
  name: 'App',
  components: {
    sideBar
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
