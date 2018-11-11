<template>
<div>
  <div @click="value1 = true" type="primary"><Icon type="md-notifications"></Icon>&nbsp;Notification</div>
  <Drawer title="事件" :closable="false" v-model="value1">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Drawer>
</div>
</template>
<script>
export default {
  name: 'noticeSide',
  data () {
    return {
      value1: false
    }
  }
}
</script>
