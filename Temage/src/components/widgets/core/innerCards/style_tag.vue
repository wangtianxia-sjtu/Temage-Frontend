<template>
<div style='width: 80%; margin-left: 10%'>
  <Row>
  <p class='word'>选择真正适合的风格</p>
  </Row>
  <Button icon="ios-add" type="dashed" style="color: #59aff1; border-color: #59aff1" @click="handleAdd('constellation')">constellation</Button>
  <Button icon="ios-add" type="dashed" style="color: #f1c863; border-color: #f1c863" @click="handleAdd('economics')">economics</Button>
  <Button icon="ios-add" type="dashed" style="color: #90f17a; border-color: #90f17a" @click="handleAdd('education')">education</Button>
  <Button icon="ios-add" type="dashed" style="color: #61f1c0; border-color: #61f1c0" @click="handleAdd('entertainment')">entertainment</Button>
  <Button icon="ios-add" type="dashed" style="color: #f1899e; border-color: #f1899e" @click="handleAdd('fashion')">fashion</Button>
  <Button icon="ios-add" type="dashed" style="color: #eba564; border-color: #eba564" @click="handleAdd('furniture')">furniture</Button>
  <Button icon="ios-add" type="dashed" style="color: #c590f1; border-color: #c590f1" @click="handleAdd('game')">game</Button>
  <Button icon="ios-add" type="dashed" style="color: #88acf1; border-color: #88acf1" @click="handleAdd('lottery')">lottery</Button>
  <Button icon="ios-add" type="dashed" style="color: #73def1; border-color: #73def1" @click="handleAdd('politics')">politics</Button>
  <Button icon="ios-add" type="dashed" style="color: #90f1d2; border-color: #90f1d2" @click="handleAdd('real-estate')">real-estate</Button>
  <Button icon="ios-add" type="dashed" style="color: #9bf197; border-color: #9bf197" @click="handleAdd('science-technology')">science-technology</Button>
  <Button icon="ios-add" type="dashed" style="color: #c4f168; border-color: #c4f168" @click="handleAdd('society')">society</Button>
  <Button icon="ios-add" type="dashed" style="color: #f1bb7d; border-color: #f1bb7d" @click="handleAdd('sport')">sport</Button>
  <Button icon="ios-add" type="dashed" style="color: #f17f77; border-color: #f17f77" @click="handleAdd('stock')">stock</Button>
  <br><br>
  <p>您确认的风格： </p>
  <Tag v-for="item in tags" :key="item" :name="item" closable @on-close="handleClose" color="green">{{ item }}</Tag>
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
    },
    productID: 0
  },
  mounted () {
    this.tags = this.guess_tag
  },
  methods: {
    stylesUpload () {
      this.$emit('handStyles', this.tags)
      // shall be customer's choice
      this.$axios({
        method: 'POST',
        url: process.env.API.workflow.confirm_style,
        data: {styles: this.tags, productID: this.productID},
        withCredentials: true,
        headers: {Authorization: Cookies.get('login_token')}
      }).then(response => {
        if (response.status !== 200) {
          this.$Message.error('服务器状态错误! 错误码:' + response.status)
        } else {
          this.$emit('getHtml', response.data.html)
        }
      })
    },
    handleClose (event, name) {
      const index = this.tags.indexOf(name)
      this.tags.splice(index, 1)
    },
    handleAdd (name) {
      if (this.tags.indexOf(name) === -1) {
        this.tags.push(name)
      } else {
        this.$Message.warning('已经添加过该主题了')
      }
    }
  }
}
</script>
<style>
  .ivu-btn.ivu-btn-dashed{
    margin-bottom: 5px;
  }
  .ivu-tag{
    height: 32px;
    line-height: 32px;
    font-size: 20px;
  }
  .ivu-icon.ivu-icon-ios-close{
    color: #63b350 !important;
  }
</style>
