<template>
  <div id="app" style="min-height: 100%">
    <router-view></router-view>
  </div>
</template>

<script>
import blade from './components/blade.vue'
export default {
  name: 'App',
  components: {
    blade
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
  height: 100%;
}
</style>
