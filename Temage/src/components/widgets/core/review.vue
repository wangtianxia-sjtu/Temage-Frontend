<template>
<div style="width:72%; margin-left: 14%; overflow: hidden;">
    <br>
    <editor :editorContent="this.rec_html"
            v-on:finalHtml="handover"
            v-on:newID="emitID"
            ref="editorBoard"></editor>
</div>
</template>

<script>
import editor from '@/components/widgets/core/innerCards/editor.vue'
export default {
  name: 'reviewBoard',
  data () {
    return {
      html: ''
    }
  },
  mounted () {
    this.html = this.rec_html
  },
  components: {
    editor
  },
  methods: {
    handover: function (msg) {
      this.$emit('res_html', msg)
    },
    emitID: function (msg) {
      this.$emit('new_id', msg)
    }
  },
  props: {
    rec_html: ''
  }
}
</script>
