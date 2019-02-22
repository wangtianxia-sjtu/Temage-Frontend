<template>
  <div class="login">
    <Row style="height: 50px;
                width: 100%;
                background-color: #398eb9;
                position: fixed;
                box-shadow: 0 5px 15px rgba(30,30,30,0.76);
                padding: 5px;z-index: 9999">
      <div class="title-logo">
      <p style="float: left; font-size: 40px; font-weight: bolder; color: white; margin-top: -8px; margin-left: 25px">Temage</p>
      </div>
      <div class="top-sup"
           @click="loginFromInfo">支持</div>
      <router-link to="/register">
        <div class="top-reg" type="primary">注册</div>
      </router-link>
      <div class="top-login"
              @click="loginFromInfo">登录</div>
    </Row>
    <div id="block1" style="height: 750px;
                width: 100%;
                background: rgba(0,0,0,0.65)">
      <img :src="imgsrc[5]" style="max-height: 400px; margin-top: 50px;">
      <div style="text-align: center;
      color: rgba(255,255,255,0.86);
      font-size: 70px;
      font-weight: bold;
      margin-top: -50px">"优雅提高生产力!"</div>
      <div style="text-align: center;
      color: rgba(255,255,255,0.86);
      font-size: 28px;
      font-weight: normal;
      margin-top: -10px">Temage运用强劲的Intel™处理器和AiDecCloud©训练服务</div>
      <div style="text-align: center;
      color: rgba(255,255,255,0.86);
      font-size: 28px;
      font-weight: normal;
      margin-top: -5px">在Tensorflow©框架下生产处高效精确的模型️</div>
      <div style="text-align: center;
      color: rgba(255,255,255,0.86);
      font-size: 28px;
      font-weight: normal;
      margin-bottom: 30px;
      margin-top: -5px">帮您完成优雅高效的图文排版工作️</div>
      <router-link to="/register">
        <Button style="color: #fff;
                background-color: #2460a0;
                border-color: #2460a0;
                width: 200px;
                height: 50px;
                margin-right: 20px;
                font-size: 22px;"
                type="primary">注册</Button>
      </router-link>
      <Button style="height: 50px;
              width: 200px;
              font-size: 22px;
              margin-left: 20px;
              margin-right: 10px"
              @click="loginFromInfo">登录</Button>
    </div>
    <div style="width: 100%; height: 500px; background: #eceff1">
      <div class="img-holder"><img class="img-scroll" :src="imgsrc[6]"></div>
      <div style="font-size: 70px">海量作品, </div>
      <div style="font-size: 70px">灵感闪现</div>
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
        require('@/assets/logo-dark.png'), // 0
        require('@/assets/logo-min.png'), // 1
        require('@/assets/logo-min2.png'), // 2
        require('@/assets/logo.png'), // 3
        require('@/assets/logo-min.png'), // 4
        require('@/assets/logo-big.png'), // 5
        require('@/assets/gallery.png') // 6
      ]
    }
  },
  mounted () {
    this.scroll()
    let block1 = document.querySelector('#block1')
    block1.style.height = window.innerHeight
  },
  methods: {
    loginFromInfo () {
      if (Cookies.get('login_token') !== undefined) {
        this.$router.push('/id')
      } else {
        this.$router.push('/login')
      }
    },
    scroll () {
      window.addEventListener('scroll', function () {
        let pos = document.documentElement.scrollTop
        var galleryImg = document.querySelector('.img-scroll')
        let yy = 0.5 * pos - 500
        galleryImg.style.webkitTransform = 'translate3d(0px, ' + yy + 'px, 0px)'
      })
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
  .title-logo{
    width: 200px;
    height: 50px;
    margin-top: -5px;
    margin-left: -5px;
    background: #2176a6;
    float: left;
  }
  .title-logo:hover{
    background: #2a91cb;
  }
  .top-reg{
    height: 50px;
    line-height: 50px;
    color: #fff;
    background-color: #38699b;
    border-color: #38699b;
    width: 150px;
    font-size: 28px;
    margin-top:-5px;
    margin-right: -5px;
    float: right!important;
  }
  .top-reg:hover{
    background: #4ba1e6;
  }
  .top-login{
    height: 50px;
    line-height: 50px;
    color: #fff;
    background-color: #2176a6;
    border-color: #2176a6;
    width: 150px;
    font-size: 28px;
    margin-top:-5px;
    margin-right: -5px;
    float: right!important;
  }
  .top-login:hover{
    background: #4ba1e6;
  }
  .top-sup{
    height: 50px;
    line-height: 50px;
    color: #fff;
    background-color: #30528e;
    border-color: #30528e;
    width: 150px;
    font-size: 28px;
    margin-top:-5px;
    margin-right: -5px;
    float: right!important;
  }
  .top-sup:hover{
    background: #4ba1e6;
  }
  .img-holder{
    float: left;
    overflow: hidden;
    width: 50%;
    height: 100%;
    background: #888888;
    margin-left: 50px;
  }
  .img-scroll{
    width: 100%;
  }
  body{
    overflow: auto;
  }
</style>
