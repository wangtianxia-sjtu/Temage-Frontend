<template>
  <Input v-model="text_content" type="textarea" :autosize="{minRows: 15,maxRows: 20}" placeholder="Enter text here..." />
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
