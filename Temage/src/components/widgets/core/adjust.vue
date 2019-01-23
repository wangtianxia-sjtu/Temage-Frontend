<template>
<div>
<prob :guess_lay="guess"></prob>
<tags></tags>
</div>
</template>
<script>
import prob from '@/components/widgets/core/innerCards/guess_prob.vue'
import tags from '@/components/widgets/core/innerCards/style_tag.vue'
export default {
  name: 'adjust',
  data () {
    return {
      spinShow: true,
      text: this.value,
      image: this.url
    }
  },
  methods: {
  },
  components: {
    prob,
    tags
  },
  props: {
    guess: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
