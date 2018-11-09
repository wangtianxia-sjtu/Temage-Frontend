<template>
  <div id="app">
    <topbar></topbar>
    <sidebar></sidebar>
    <img src="./assets/logo.png">
    <card></card>
    <router-view/>
  </div>
</template>

<script>
import topbar from './components/fixed/topbar.vue'
import sidebar from './components/fixed/sidebar.vue'
import card from './components/widgets/display/card.vue'
export default {
  name: 'App',
  components: {
    topbar,
    sidebar,
    card
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
