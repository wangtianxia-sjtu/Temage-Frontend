<template>
<div style="width:72%; margin-left: 14%; overflow: hidden;">
    <br>
    <editor :editorContent="this.rec_html"
            :t_title="this.tmg_title"
            :tmg_style="this.t_style"
            :width="this.width"
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
      html: '',
      tmg_title: 'tmgtmg',
      t_style: ['art', 'sports', 'tec'],
      width: 300
    }
  },
  mounted () {
    this.html = this.rec_html
    // this.tmg_title = this.t_title
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
    rec_html: '',
    t_title: '123123',
    tmg_style: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>
