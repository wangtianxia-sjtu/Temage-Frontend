<template>
<div>
  <div @click="value1 = true" type="primary"><Icon type="md-notifications"></Icon>&nbsp; Notification</div>
  <Drawer title="事件" :closable="false" v-model="value1">
    <li v-for="item in events" :key='item.name'>
      {{item.name}}
      <p>{{item.content}}</p>
      <p>{{item.time}}</p>
    </li>
  </Drawer>
</div>
</template>
<script>
export default {
  name: 'noticeSide',
  data () {
    return {
      value1: false,
      events: [
        {
          name: '新的收藏',
          content: '你收到了来自用户"username2"的收藏',
          time: '2018-12-24'
        },
        {
          name: '新的喜欢',
          content: '你收到了来自用户"username2"的喜欢',
          time: '2018-12-24'},
        {
          name: '新的评论',
          content: '你收到了来自用户"username2"的评论',
          time: '2018-12-24'
        }
      ]
    }
  }
}
</script>
