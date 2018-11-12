<template>
  <Input v-model="text_content" type="textarea" :autosize="{minRows: 5,maxRows: 10}" placeholder="Enter text here..." />
</template>
<script>
  export default {
    name: 'textBoard',
    data () {
      return {
        text_content: this.value
      }
    }
  }
</script>