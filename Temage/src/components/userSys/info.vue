<template>
  <div>
    <h1>欢迎使用, Temage!</h1>
    <img :src="imgsrc">
    </div>
</template>

<script>
export default {
  data () {
    return {
      imgsrc: require('@/assets/logo-min.png')
    }
  }
}
</script>
