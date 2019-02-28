<template>
  <Input :prefix="logo" placeholder="Enter name" style="width: auto" />
</template>

<script>
export default{
  name: 'input',
  props: {
    logo: {
      default: function () {
        return 'ios-contact'
      }
    }
  }
}
</script>
