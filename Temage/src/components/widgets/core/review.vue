<template>
<div style="width:72%; margin-left: 14%; overflow: hidden;">
    <br>
    <editor :editorContent="this.rec_html"
            :t_title="this.t_title"
            :tmg_style="this.tmg_style"
            :tmg_tensor="this.tmg_tensor"
            :width="this.width"
            :product-i-d="this.productID"
            v-on:finalHtml="handover"
            ref="editorBoard"></editor>
</div>
</template>

<script>
import editor from '@/components/widgets/core/innerCards/editor.vue'
export default {
  name: 'reviewBoard',
  data () {
    return {
      html: '',
      tmg_title: '',
      t_style: [],
      width: 300
    }
  },
  mounted () {
    this.html = this.rec_html
    this.tmg_title = this.t_title
    this.t_style = this.tmg_style
  },
  components: {
    editor
  },
  methods: {
    handover: function (msg) {
      this.$emit('res_html', msg)
    }
  },
  props: {
    rec_html: '',
    t_title: '',
    productID: 0,
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
    }
  }
}
</script>
