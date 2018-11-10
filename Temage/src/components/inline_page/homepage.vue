<template>
<div width=100%, height=100%>
  <br><br>
    <Icon type="ios-time-outline" size="40" color="blue" style="justify-content:left"/>
    <el-row :gutter="100">
    <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">
        <showcard></showcard>
    </div></el-col>
    <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">
        <showcard></showcard>
        </div></el-col>
    <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">
        <showcard></showcard>
        </div></el-col>
    <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <Icon type="ios-heart" size="40" color="red"/>
    <el-row :gutter="100">
    <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">
        <showcard></showcard>
    </div></el-col>
    <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">
        <showcard></showcard>
        </div></el-col>
    <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">
        <showcard></showcard>
        </div></el-col>
    <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <Icon type="ios-photos" size="40"/>
    <el-row :gutter="100">
    <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">
        <showcard></showcard>
    </div></el-col>
    <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">
        <showcard></showcard>
        </div></el-col>
    <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">
        <showcard></showcard>
        </div></el-col>
    <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
</div>
</template>

<script>
import showcard from '@/components/widgets/display/showcard.vue'
export default {
  name: 'homepage',
  components: {
    showcard
  },
  data () {
    return {
      currentDate: new Date()
    }
  }
}
</script>

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
