<template>
<div>
<prob :guess_lay="this.guess"></prob>
<tags ref="styleRes" :guess_tag="guess.name" :product-i-d="this.productID"
      v-on:handStyles="setThisStyle"
      v-on:getHtml="passHtml"></tags>
</div>
</template>
<script>
import prob from '@/components/widgets/core/innerCards/guess_prob.vue'
import tags from '@/components/widgets/core/innerCards/style_tag.vue'
export default {
  name: 'adjust',
  data () {
    return {
      confirmed_style: []
    }
  },
  methods: {
    setThisStyle: function (msg) {
      this.confirmed_style = msg
      this.$emit('setStyle', this.confirmed_style)
    },
    passHtml: function (msg) {
      this.$emit('handoverHtml', msg)
    }
  },
  components: {
    prob,
    tags
  },
  props: {
    guess: {
      type: Object,
      default: () => {}
    },
    productID: 0
  }
}
</script>
