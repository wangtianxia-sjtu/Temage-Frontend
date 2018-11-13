<template>
    <div>
      <div ref="editor" style="text-align:center;"></div>
      <br>
      <b-button v-on:click="getContent" style="margin: 0px auto;display: table;">需要HTML代码?</b-button>
    </div>
</template>

<script>
import E from 'wangeditor'
export default {
  name: 'editor',
  data () {
    return {
      editorHTML: ''
    }
  },
  methods: {
    getContent: function () {
      alert(this.editorHTML)
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
  },
  props: [ 'editorContent' ]
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

<style scoped>
</style>
