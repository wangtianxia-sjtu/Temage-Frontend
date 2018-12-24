<template>
<div width=100%, height=100%, margin-left=-50px>
  <br> <!-- {{raw_data}} --> <br>
    <el-row :gutter="25">
    <el-col :span="2"><div class="grid-content bg-purple">
      </div></el-col>
    <el-col :span="24"><div class="grid-content bg-purple">
        <Row><router-link to='/recent'><Col :span="1"><Icon type="md-time" color="black" size="35" margin-top="-3px"/></Col></router-link><h1>Recent</h1></Row>
        <br>
    </div></el-col>
    </el-row>
    <exhibitioncard :cards="cards_recent"></exhibitioncard>
    <el-row :gutter="25">
    <el-col :span="2"><div class="grid-content bg-purple">
      </div></el-col>
    <el-col :span="24"><div class="grid-content bg-purple">
        <Row><router-link to="/collection"><Col :span="1"><Icon type="md-heart" size="35" color="black" margin-top="-3px"/></Col></router-link><h1>Collections</h1></Row>
        <br>
    </div></el-col>
    </el-row>
    <exhibitioncard :cards="cards_collections"></exhibitioncard>
</div>
</template>

<script>
import exhibitioncard from '@/components/widgets/display/exhibitioncard.vue'
import axios from 'axios'

export default {
  name: 'homepage',
  components: {
    exhibitioncard,
    axios
  },
  mounted () {
    axios
      .get('http://localhost:3030/api')
      .then(response => {
        this.raw_data = response.data
        this.cards_recent = response.data.recent_pics
        this.cards_collections = response.data.collect_pics
        console.log(response)
      })
  },
  data () {
    return {
      raw_data: null,
      currentDate: new Date(),
      cards_recent: null,
      cards_collections: null
    }
  }
}
</script>

<style>
.el-col-6 {
    padding-right: 0px!important;
    padding-left: 20px!important;
}
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
