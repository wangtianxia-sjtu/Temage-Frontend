<template>
  <Input
  v-model="text_content"
  type="textarea"
  :autosize="{minRows: 7,maxRows: 21}"
  placeholder="Enter text here..." />
</template>
<script>
import axios from 'axios'
export default {
  name: 'textBoard',
  data () {
    return {
      text_content: this.value
    }
  },
  methods: {
    textUpload () {
      this.$axios({
        method: 'post',
        url: '/login/submit',
        data: this.formInline,
        withCredentials: true
      }).then(response => {

      })
    }
  },
  components: {
    axios
  }
}
</script>
