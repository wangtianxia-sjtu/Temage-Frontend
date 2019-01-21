<template>
  <div class="login">
    <div style="width: 95%; margin-left: 2.5%">
      <div style="height: 50px;"></div>
      <el-carousel :interval="2000" type="card" height="300px">
        <el-carousel-item v-for="item in imgsrc" :key="item">
          <img :src="item" style="max-height: 100%;">
          <h3>Temage</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div style="height: 50px;"></div>
    <div>
      <Row>
    <Col span="16" offset="4">
      <el-card shadow="always">
      <img :src="imgsrc[3]" style="max-width: 100%;">
        <Row>
          <Col :span="12">
            <Button class="tmg-btn2-info"  @click="loginFromInfo()">登录</Button>
          </Col>
          <Col :span="12">
            <router-link to="/register">
              <Button type="primary" class="tmg-btn1-info" >注册</Button>
            </router-link>
          </Col>
        </Row>
      </el-card>
    </Col>
      </Row>
      </div>
    <Row>
      <div style="margin-top: 50px; margin-bottom:20px ;color: ghostwhite; font-size: 16px">2019© Temage Develop Group️</div>
  </Row>
    </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  data () {
    return {
      imgsrc: [
        require('@/assets/logo-dark.png'),
        require('@/assets/logo-min.png'),
        require('@/assets/logo-min2.png'),
        require('@/assets/logo.png'),
        require('@/assets/logo-min.png')
      ]
    }
  },
  methods: {
    loginFromInfo () {
      if (Cookies.get('login_token') !== undefined) {
        this.$router.push('/id')
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>
<style>
  .login{
    background: url('../../assets/tmbg-01.png');
    background-position: center 10%;
    background-size:cover;
    min-height: 100%;
  }
  .title {
    font-size: 36px;
    margin-bottom: 15px;
  }
   .el-carousel__item h3 {
     color: #475669;
     font-size: 14px;
     opacity: 0.75;
     line-height: 200px;
     margin: 0;
   }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .tmg-btn1-info {
    color: #fff;
    background-color: #2460a0;
    border-color: #2460a0;
    font-size: 36px;
    width: 90%;
    /*margin-left: -40%;*/
  }
  .tmg-btn2-info {
    font-size: 36px;
    width: 90%;
    /*margin-left: -40%;*/
  }
  body{
    overflow: auto;
  }
</style>
