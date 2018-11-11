<template>
<div>
<el-card shadow="hover" :body-style="{ padding: '0px' }">
      <img v-bind:src="imagesrc" class="image">
      <div style="padding: 14px;">
        <h3>{{title}}</h3>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">{{buttonname}}</el-button>
        </div>
      </div>
</el-card>
<br><br><br><br>
</div>
</template>

<script>
export default {
  name: 'showcard',
  data () {
    return {
      currentDate: new Date(),
      imagesrc: require('@/assets/cat6.png'),
      title: 'I\'m angry!',
      buttonname: 'Start!'
    }
  }
}
</script>
