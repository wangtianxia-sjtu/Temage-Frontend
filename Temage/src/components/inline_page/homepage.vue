<template>
<div width=100%, height=100%, style="margin-left: 50px">
  <br> <!-- {{raw_data}} --> <br>
    <el-row :gutter="25">
    <el-col :span="2"><div class="grid-content bg-purple">
      </div></el-col>
    <el-col :span="24"><div class="grid-content bg-purple">
        <Row><router-link to='/id/recent'><Col :span="1"><Icon type="md-time" size="20"  style="color: #2c3e50; margin-top: 8px"/></Col></router-link><h1>Recent</h1></Row>
        <br>
    </div></el-col>
    </el-row>
    <exhibitioncard :cards="cards_recent"></exhibitioncard>
    <el-row :gutter="25">
    <el-col :span="2"><div class="grid-content bg-purple">
      </div></el-col>
    <el-col :span="24"><div class="grid-content bg-purple">
        <Row><router-link to="/id/collection"><Col :span="1"><Icon type="md-heart" size="20" style="color: #2c3e50; margin-top: 8px"/></Col></router-link><h1>Collections</h1></Row>
        <br>
    </div></el-col>
    </el-row>
    <exhibitioncard :cards="cards_collections"></exhibitioncard>
</div>
</template>

<script>
import exhibitioncard from '@/components/widgets/display/exhibitioncard.vue'
import axios from 'axios'
import Cookies from 'js-cookie'
export default {
  name: 'homepage',
  components: {
    exhibitioncard,
    axios
  },
  mounted () {
    this.$axios({
      method: 'get',
      url: process.env.API.explore.get_home_data,
      headers: {Authorization: Cookies.get('login_token')},
      withCredentials: true
    }).then(response => {
      this.raw_data = response.data
      this.cards_recent = response.data.recent_pics
      this.cards_collections = response.data.collect_pics
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
