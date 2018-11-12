<template>
<el-row>
  <el-col :span="6" v-for="(card, index) in cards" :key="card" :offset="(index%3) > 0 ? 2 : 0" style="margin-bottom:40px">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="card.imgsrc" class="image" max-height="100px">
      <div style="padding: 14px;">
        <span>{{card.title}}</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">{{buttonname}}</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</template>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
</style>

<script>
export default {
  name: 'exhibitioncard',
  data () {
    return {
      currentDate: new Date(),
      buttonname: 'start'
    }
  },
  props: ['cards']
}
</script>
