<template>
<div>
  <div @click="value1 = true" type="primary">Notification &nbsp;
      <Avatar shape="square" icon="ios-person" />
  </div>
  <Drawer title="事件" :closable="false" v-model="value1">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Drawer>
</div>
</template>
<script>
export default {
  name: 'notice-top',
  data () {
    return {
      value1: false
    }
  }
}
</script>
