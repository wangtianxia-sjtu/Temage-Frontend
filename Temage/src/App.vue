<template>
  <div id="app">
    <sidebar></sidebar>
    <topbar></topbar>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import topbar from './components/fixed/topbar.vue'
import sidebar from './components/fixed/sidebar.vue'
export default {
  name: 'App',
  components: {
    topbar,
    sidebar
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
