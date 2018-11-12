<template>
<div width=100%, height=100%, margin-left=-50px>
     <br><br>
    <el-row :gutter="25">
    <el-col :span="2"><div class="grid-content bg-purple">
      </div></el-col>
    <el-col :span="24"><div class="grid-content bg-purple">
        <Row><Col :span="1"><Icon type="md-time" size="40"/></Col><h1>Recent</h1></Row>
        <br>
    </div></el-col>
    </el-row>
    <el-row :gutter="100">
    <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6" :offset="1"><div class="grid-content bg-purple">
        <showcard></showcard>
    </div></el-col>
    <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6" :offset="1"><div class="grid-content bg-purple">
        <showcard></showcard>
        </div></el-col>
    <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6" :offset="1"><div class="grid-content bg-purple">
        <showcard></showcard>
        </div></el-col>
    <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="100">
    <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6" :offset="1"><div class="grid-content bg-purple">
        <showcard></showcard>
    </div></el-col>
    <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6" :offset="1"><div class="grid-content bg-purple">
        <showcard></showcard>
        </div></el-col>
    <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6" :offset="1"><div class="grid-content bg-purple">
        <showcard></showcard>
        </div></el-col>
    <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="100">
    <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6" :offset="1"><div class="grid-content bg-purple">
        <showcard></showcard>
    </div></el-col>
    <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6" :offset="1"><div class="grid-content bg-purple">
        <showcard></showcard>
        </div></el-col>
    <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6" :offset="1"><div class="grid-content bg-purple">
        <showcard></showcard>
        </div></el-col>
    <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
    </el-row>

    <el-row :gutter="100">
    <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6" :offset="1"><div class="grid-content bg-purple">
        <showcard></showcard>
    </div></el-col>
    <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6" :offset="1"><div class="grid-content bg-purple">
        <showcard></showcard>
        </div></el-col>
    <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6" :offset="1"><div class="grid-content bg-purple">
        <showcard></showcard>
        </div></el-col>
    <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
</div>
</template>

<script>
import showcard from '@/components/widgets/display/showcard.vue'
export default {
  name: 'recent',
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
