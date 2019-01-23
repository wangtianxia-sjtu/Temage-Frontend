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
      this.$emit('handText', this.text_content)
      this.$axios({
        method: 'post',
        url: '/api/text_post',
        data: {text: this.text_content},
        withCredentials: true
      }).then(response => {
        if (response.status !== 200) {
          this.$Message.error('服务器状态错误! 错误码:' + response.status)
        }
      })
    }
  },
  components: {
    axios
  }
}
</script>
