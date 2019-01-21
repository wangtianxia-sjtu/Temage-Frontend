<template>
  <div>
    <Card style="margin-top: 30px">
      <h1>{{this.id}}</h1>
      <div id="text_container" v-html="this.html"></div>
    </Card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'text',
  components: {
    axios
  },
  mounted () {
    this.$axios({
      method: 'post',
      url: 'api/text',
      data: {id: this.id},
      withCredentials: true
    }).then(response => {
      console.log(response.data)
      this.creator = response.data.creator
      this.html = response.data.text
      this.id = response.data.id
    })
  },
  data () {
    return {
      creator: null,
      html: null,
      id: this.$route.params.id
    }
  }
}
</script>

<style>

</style>
