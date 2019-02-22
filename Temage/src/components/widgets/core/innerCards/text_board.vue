<template>
  <div>
    <Input
      v-model="text_title"
      type="textarea"
      :autosize="{minRows: 1,maxRows: 1}"
      placeholder="Enter title here..." />
    <p style="margin-top: 15px; margin-bottom: 10px">请在此输入正文 (段落间换行)</p>
    <Input
    v-model="text_content"
    type="textarea"
    :autosize="{minRows: 7,maxRows: 21}"
    placeholder="Enter text here..." />
  </div>
</template>
<script>
import axios from 'axios'
import Cookies from 'js-cookie'
export default {
  name: 'textBoard',
  data () {
    return {
      text_content: this.value,
      text_title: ''
    }
  },
  methods: {
    textUpload () {
      this.$emit('handText', this.text_content)
      this.$emit('handTitle', this.text_title)
      let ajax = this.$axios
      return new Promise((resolve, reject) => {
        ajax({
          method: 'post',
          url: '/api/text_post/',
          data: {text: this.text_content},
          withCredentials: true,
          headers: {Authorization: Cookies.get('login_token')}
        }).then(response => {
          this.$emit('newID', response.data.productID)
          console.log('id:\n', response.data.productID)
          resolve(response)
        })
      })
    }
  },
  components: {
    axios
  }
}
</script>
