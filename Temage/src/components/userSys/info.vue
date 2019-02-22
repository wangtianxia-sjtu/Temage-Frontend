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
    <div id="block1" style="min-height: 750px!important;
                width: 100%;
                background: linear-gradient(rgba(0,0,0, 0.65), rgba(0, 0, 0, 0.35))">
      <img :src="imgsrc[5]" style="max-height: 400px; margin-top: 50px;">
      <div style="text-align: center;
      color: rgba(255,255,255,0.86);
      font-size: 70px;
      font-weight: bold;
      margin-top: -50px">"优雅提高生产力!"</div>
      <div style="text-align: center;
      color: rgba(255,255,255,0.91);
      font-size: 28px;
      font-weight: normal;
      margin-top: -10px">Temage运用强劲的intel™处理器和AiDecCloud©训练服务</div>
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
    <div style="width: 100%; height: 500px; background: #eceff1;">
    <div class="img-holder"><img class="img-scroll" :src="imgsrc[6]"></div>
    <Row>
      <Col style="font-size: 70px; margin-bottom: -20px; margin-top:20px; font-weight: bolder">海量作品, &nbsp;&nbsp;&nbsp;</Col>
      <Col style="font-size: 70px; font-weight: bolder">&nbsp;&nbsp;&nbsp;&nbsp;灵感闪现。</Col>
      <Col style="font-size: 28px; margin-top: 60px">Temage画廊集合了所有广受好评的作品</Col>
      <Col style="font-size: 28px;">为您的工作提供灵感</Col>
      <Col style="font-size: 28px;">画廊的智能推荐系统</Col>
      <Col style="font-size: 28px;">让您一见倾心</Col>
    </Row>
  </div>
    <div style="width: 100%; height: 620px; background: rgba(33,118,166,0.91);">
      <div style="color: white; font-size: 50px; font-family: Georgia, cursive;padding-top: 20px">"Count to four, come with me..."</div>
      <img :src="imgsrc[7]" id="count-four">
      <div style="color: white; font-size: 70px; font-weight: bolder">简单四步</div>
      <div style="color: white; font-size: 50px;">Temage完成极简工作流</div>
    </div>
    <div style="width: 100%; height: 550px; background: rgb(70,94,118);">
      <div style="width: 35%; float: left">
      <img :src="imgsrc[8]" id="count-one" style="height: 250px; padding-top: 50px;">
        <div style="color: white; font-size: 70px; font-weight: bolder">第一步</div>
      <div style="color: white; font-size: 28px; margin-top: 10px">扁平输入:</div>
        <div style="color: white; font-size: 28px;">标题, 正文, 图片</div>
      </div>
      <div style="float: right; width: 65%; padding-right: 50px; padding-top: 70px"> <img :src="imgsrc[9]" style="width: 800px;box-shadow: 0 10px 145px #22292d;" id="work-one"></div>
    </div>
    <div style="width: 100%; height: 550px; background: rgb(236,239,241);">
      <div style="width: 35%; float: right">
        <img :src="imgsrc[8]" id="count-two" style="height: 250px; padding-top: 50px;">
        <div style=" font-size: 70px; font-weight: bolder">第二步</div>
        <div style=" font-size: 28px; margin-top: 10px">风格选择:</div>
        <div style=" font-size: 28px;">验证模型的猜测</div>
      </div>
      <div style="float: left; width: 65%; padding-left: 50px; padding-top: 70px"> <img :src="imgsrc[9]" style="width: 800px;box-shadow: 0 10px 145px #22292d;" id="work-two"></div>
    </div>
    <div style="width: 100%; height: 550px; background: rgb(70,94,118);">
      <div style="width: 35%; float: left">
        <img :src="imgsrc[8]" id="count-three" style="height: 250px; padding-top: 50px;">
        <div style="color: white; font-size: 70px; font-weight: bolder">第三步</div>
        <div style="color: white; font-size: 28px; margin-top: 10px">自由编辑:</div>
        <div style="color: white; font-size: 28px;">小修小补, 臻于完美</div>
      </div>
      <div style="float: right; width: 65%; padding-right: 50px; padding-top: 70px"> <img :src="imgsrc[9]" style="width: 800px;box-shadow: 0 10px 145px #22292d;" id="work-three"></div>
    </div>
    <div style="width: 100%; height: 550px; background: rgb(33,118,166);">
      <div style="width: 35%; float: right">
        <img :src="imgsrc[8]" id="count-finish" style="height: 250px; padding-top: 50px;">
        <div style="color: white; font-size: 70px; font-weight: bolder">第四步</div>
        <div style="color: white; font-size: 28px; margin-top: 10px">下载作品:</div>
        <div style="color: white; font-size: 28px;">确认保存并给出评价</div>
      </div>
      <div style="float: left; width: 65%; padding-left: 50px; padding-top: 70px"> <img :src="imgsrc[9]" style="width: 800px;box-shadow: 0 10px 145px #22292d;" id="work-four"></div>
    </div>
    <div style="width: 100%; height: 500px; background: rgba(48,82,142,0.81)">
      <div style="font-size: 70px; color: white; font-weight: bolder; padding-top: 50px">感谢!</div>
      <div style="color: white; font-size: 28px;">intel®以及AIDevCloud©训练集群</div>
      <div style="color: white; font-size: 28px;">TensorFlow®机器学习训练框架</div>
      <div style="color: white; font-size: 28px;">Vue®开源前端框架</div>
      <div style="color: white; font-size: 28px;">ElementUI®前端组件库</div>
      <div style="color: white; font-size: 28px;">iView®前端组件库</div>
      <div style="color: white; font-size: 28px;">待填充</div>
    <Row>
      <div style="margin-top: 50px; margin-bottom:20px ;color: ghostwhite; font-size: 16px">2019© Temage Develop Group️</div>
    </Row>
    </div>
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
        require('@/assets/gallery.png'), // 6
        require('@/assets/four.png'), // 7
        require('@/assets/one.png'), // 8
        require('@/assets/work1.png') // 9
      ]
    }
  },
  mounted () {
    window.addEventListener('scroll', function () {
      let pos = document.documentElement.scrollTop
      var galleryImg = document.querySelector('.img-scroll')
      let yy = 0.5 * pos - 500
      galleryImg.style.webkitTransform = 'translate3d(0px, ' + yy + 'px, 0px)'
      var c4 = document.querySelector('#count-four')
      let yy1 = -0.5 * pos + 550
      if (yy1 < 0) {
        yy1 = 0
      }
      c4.style.webkitTransform = 'translate3d(0px, ' + yy1 + 'px, 0px)'
      c4.style.opacity = 1 - yy1 * 0.01
      var c1 = document.querySelector('#count-one')
      let yy2 = -0.5 * pos + 850
      if (yy2 < 0) {
        yy2 = 0
      }
      c1.style.webkitTransform = 'translate3d(0px, ' + yy2 + 'px, 0px)'
      c1.style.opacity = 1 - yy2 * 0.01
      var w1 = document.querySelector('#work-one')
      w1.style.opacity = 1 - yy2 * 0.01
    })
    let block1 = document.querySelector('#block1')
    block1.style.height = window.innerHeight + 'px'
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
