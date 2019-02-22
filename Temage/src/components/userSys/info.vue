<template>
  <div class="login">
    <Row style="height: 70px;
                width: 100%;
                background-color: #7ea9d9;
                position: fixed;
                box-shadow: 0 5px 15px rgba(30,30,30,0.76);
                padding: 10px;z-index: 9999">
      <img :src="imgsrc[1]" style="max-height: 110%; float: left">
      <router-link to="/register">
        <Button style="height: 100%; color: #fff;
                background-color: #2460a0;
                border-color: #2460a0;
                width: 100px;
                font-size: 22px;
                float: right!important;" type="primary">注册</Button>
      </router-link>
      <Button style="height: 100%;
              width: 100px;
              font-size: 22px;
              float: right;
              margin-right: 10px"
              @click="loginFromInfo">登录</Button>
    </Row>
    <div style="height: 700px;
                width: 100%;
                background: rgba(0,0,0,0.52)">
      <img :src="imgsrc[5]" style="max-height: 500px">
      <div style="text-align: center; color: white; font-size: 50px"></div>
    </div>
    <div>
      <Row style="margin-top: 40px;">
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
        require('@/assets/logo-min.png'),
        require('@/assets/logo-big.png')
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
    background-attachment: fixed;
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
