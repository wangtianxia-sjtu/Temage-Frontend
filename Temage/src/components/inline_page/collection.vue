<template>
<div width=100%, height=100%, margin-left=-50px>
    <br><br>
    <el-row :gutter="25">
    <el-col :span="2"><div class="grid-content bg-purple">
      </div></el-col>
    <el-col :span="24"><div class="grid-content bg-purple">
        <Row><Col :span="1"><Icon type="md-heart" size="35" margin-top="-3px"/></Col><h1>Collections</h1></Row>
        <br>
    </div></el-col>
    </el-row>
    <exhibitioncard :cards="cards"></exhibitioncard>
</div>
</template>

<script>
import exhibitioncard from '@/components/widgets/display/exhibitioncard.vue'
import axios from 'axios'

export default {
  name: 'collection',
  components: {
    exhibitioncard,
    axios
  },
  mounted () {
    axios
      .get('http://localhost:3030/api/collection')
      .then(response => {
        this.cards = response.data
      })
  },
  data () {
    return {
      cards: null
    }
  }
}
</script>

<style>
.el-col-6 {
  padding-right: 0px !important;
  padding-left: 20px !important;
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
  clear: both;
}
</style>
