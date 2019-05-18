<template>
    <div>
      <div ref="editor" style="text-align:left;"></div>
      <br>
      <el-button  v-on:click="getContent" type="primary" round style="margin-left: 40%">需要HTML代码？</el-button>
      <!-- <el-input type="textarea" autosize v-model="editorHTML"></el-input> -->
    </div>
</template>

<script>
import E from 'wangeditor'
import axios from 'axios'
import Cookies from 'js-cookie'
export default {
  name: 'editor',
  data () {
    return {
      editorHTML: ''
    }
  },
  props: {
    tmg_style: {
      type: Array,
      default: function () {
        return []
      }
    },
    tmg_tensor: {
      type: Array,
      default: function () {
        return []
      }
    },
    t_title: '',
    editorContent: '',
    width: 0,
    productID: 0
  },
  components: {axios},
  methods: {
    getContent: function () {
      alert(this.editorHTML)
    },
    storeHtml () {
      this.$axios({
        method: 'post',
        url: process.env.API.workflow.store_passage,
        data: {
          res_html: this.editorHTML,
          styles: this.tmg_style,
          t_width: this.width,
          title: this.t_title,
          tensor: this.tmg_tensor,
          productID: this.productID
        },
        withCredentials: true,
        headers: {Authorization: Cookies.get('login_token')}
      }).then(response => {
        if (response.status !== 200) {
          this.$Message.error('服务器状态错误! 错误码:' + response.status)
        } else {
          let prdID = response.data.ID
          console.log('myID', prdID)
          this.$emit('updateId', prdID)
          this.$emit('finalHtml', this.editorHTML)
        }
      })
    }
  },
  mounted () {
    var editor = new E(this.$refs.editor)
    editor.customConfig.onchange = (html) => {
      this.editorHTML = html
    }
    this.editorHTML = this.editorContent
    editor.create()
    editor.txt.html(this.editorHTML)
    editor.change()
  }
  // props: [ 'editorContent' ]
  /* name: 'editor',
  methods: {
    getContent: function () {
      alert(this.editorContent)
    }
  },
  mounted () {
    var editor = new E(this.$refs.editor)
    editor.customConfig.onchange = (html) => {
      this.editorContent = html
    }
    editor.create()
    editor.txt.html(this.editorContent)
    editor.change()
  },
  props: [ 'editorContent' ] */
}
</script>

<style>
.w-e-text-container{
  height: auto!important
}
</style>
