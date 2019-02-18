<template>
<div style='width: 80%; margin-left: 10%'>
  <Row>
  <p class='word'>选择真正适合的风格</p>
  </Row>
  <Tag color="magenta">magenta</Tag>
  <Tag color="red">red</Tag><Tag color="volcano">volcano</Tag><Tag color="orange">orange</Tag>
  <Tag color="gold">gold</Tag>  <Tag color="yellow">yellow</Tag><Tag color="lime">lime</Tag>
  <Tag color="green">green</Tag><Tag color="cyan">cyan</Tag> <Tag color="blue">blue</Tag>
  <Tag color="geekblue">geekblue</Tag><Tag color="purple">purple</Tag>
  <Tag color="magenta">magenta</Tag>
  <Tag color="red">red</Tag><Tag color="volcano">volcano</Tag><Tag color="orange">orange</Tag>
  <Tag color="gold">gold</Tag>  <Tag color="yellow">yellow</Tag><Tag color="lime">lime</Tag>
  <Tag color="green">green</Tag><Tag color="cyan">cyan</Tag> <Tag color="blue">blue</Tag>
  <Tag color="geekblue">geekblue</Tag><Tag color="purple">purple</Tag>
  <Tag color="magenta">magenta</Tag>
  <Tag color="red">red</Tag><Tag color="volcano">volcano</Tag><Tag color="orange">orange</Tag>
  <Tag color="gold">gold</Tag>  <Tag color="yellow">yellow</Tag><Tag color="lime">lime</Tag>
  <Tag color="green">green</Tag><Tag color="cyan">cyan</Tag> <Tag color="blue">blue</Tag>
  <Tag color="geekblue">geekblue</Tag><Tag color="purple">purple</Tag>
  <Tag color="magenta">magenta</Tag>
  <Tag color="red">red</Tag><Tag color="volcano">volcano</Tag><Tag color="orange">orange</Tag>
  <Tag color="gold">gold</Tag>  <Tag color="yellow">yellow</Tag><Tag color="lime">lime</Tag>
  <Tag color="green">green</Tag><Tag color="cyan">cyan</Tag> <Tag color="blue">blue</Tag>
  <Tag color="geekblue">geekblue</Tag><Tag color="purple">purple</Tag>
  <Tag color="magenta">magenta</Tag>
  <Tag color="red">red</Tag><Tag color="volcano">volcano</Tag><Tag color="orange">orange</Tag>
  <Tag color="gold">gold</Tag>  <Tag color="yellow">yellow</Tag><Tag color="lime">lime</Tag>
  <Tag color="green">green</Tag><Tag color="cyan">cyan</Tag> <Tag color="blue">blue</Tag>
  <Tag color="geekblue">geekblue</Tag><Tag color="purple">purple</Tag>
  <br><br>
  <p>您确认的风格： </p>
  <Tag type="border" closable color="success">Sport</Tag>
  <Tag type="border" closable color="primary">Tec</Tag>
  <Tag type="border" closable color="error">Movie</Tag>
  <Tag type="border" closable color="warning">Music</Tag>
</div>
</template>
<script>
import axios from 'axios'
import Cookies from 'js-cookie'
export default {
  name: 'tags',
  data () {
    return {
      tags: []
    }
  },
  components: {
    axios
  },
  props: {
    guess_tag: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    this.tags = this.guess_tag
    console.log(this.tags)
  },
  methods: {
    stylesUpload () {
      this.$emit('handStyles', this.tags)
      // shall be customer's choice
      this.$axios({
        method: 'POST',
        url: '/api/ret_html/',
        data: {styles: this.tags},
        withCredentials: true,
        headers: {Authorization: Cookies.get('login_token')}
      }).then(response => {
        if (response.status !== 200) {
          this.$Message.error('服务器状态错误! 错误码:' + response.status)
        } else {
          this.$emit('getHtml', response.data.html)
        }
      })
    }
  }
}
</script>
