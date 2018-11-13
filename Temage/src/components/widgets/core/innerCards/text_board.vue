<template>
  <Input
  v-model="text_content"
  type="textarea"
  :autosize="{minRows: 7,maxRows: 21}"
  placeholder="Enter text here..." />
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
