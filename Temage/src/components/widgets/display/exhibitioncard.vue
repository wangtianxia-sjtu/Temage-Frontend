<template>
<el-row>
  <el-col :span="6" v-for="(card, index) in cards" :key="index" :offset="(index%3) > 0 ? 2 : 0" style="margin-bottom:60px">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <div style="width: 100%; position: relative; height: 0;overflow: hidden; padding-bottom: 54%;">
      <img :src="card.imgsrc" class="image">
      </div>
      <div style="padding: 14px;">
        <span>{{card.title}}</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">{{ buttonname }}</el-button>

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
  props: {
    cards: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>
