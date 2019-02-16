<template>
  <div style="margin-right: -20px; height:100%">
    <Scroll :on-reach-bottom="handleReachBottom" :distance-to-edge="[0, 0]">
      <div style="margin-right: 1vw; margin-left: 1vw">
      <!--<b-card-group columns style="margin-top: 30px">-->
        <Col :span="4">
            <gallerycard v-for="card in cardsCol1" :key='card' v-bind:imagesrc="card.imagesrc" :title="card.title" :head="card.head" :maintext="card.maintext" :foottext="card.foottext" :id="card.id"
                         style="margin-right:-2vw; margin-bottom: 1vw;box-shadow: 0px 0px 10px #888888"></gallerycard>
        </Col>
        <Col :span="4" :offset="1">
          <gallerycard v-for="card in cardsCol2" :key='card' v-bind:imagesrc="card.imagesrc" :title="card.title" :head="card.head" :maintext="card.maintext" :foottext="card.foottext" :id="card.id"
                       style="margin-left:-1vw; margin-right: -2vw; margin-bottom: 1vw;box-shadow: 0px 0px 10px #888888"></gallerycard>
        </Col>
        <Col :span="4" :offset="1">
          <gallerycard v-for="card in cardsCol3" :key='card' v-bind:imagesrc="card.imagesrc" :title="card.title" :head="card.head" :maintext="card.maintext" :foottext="card.foottext" :id="card.id"
                       style="margin-left:-1vw; margin-right: -1vw; margin-bottom: 1vw;box-shadow: 0px 0px 10px #888888"></gallerycard>
        </Col>
        <Col :span="4" :offset="1">
          <gallerycard v-for="card in cardsCol4" :key='card' v-bind:imagesrc="card.imagesrc" :title="card.title" :head="card.head" :maintext="card.maintext" :foottext="card.foottext" :id="card.id"
                       style="margin-left:-2vw; margin-right: -1vw; margin-bottom: 1vw;box-shadow: 0px 0px 10px #888888"></gallerycard>
        </Col>
        <Col :span="4" :offset="1">
          <gallerycard v-for="card in cardsCol5" :key='card' v-bind:imagesrc="card.imagesrc" :title="card.title" :head="card.head" :maintext="card.maintext" :foottext="card.foottext" :id="card.id"
                       style="margin-left:-2vw;  margin-bottom: 1vw;box-shadow: 0px 0px 10px #888888"></gallerycard>
        </Col>
      <!--</b-card-group>-->
      </div>
    </Scroll>
  </div>
</template>

<style src="bootstrap/dist/css/bootstrap.css" scoped>
</style>

<script>
import gallerycard from '@/components/widgets/display/gallery_card.vue'
import axios from 'axios'
import Cookies from 'js-cookie'
export default {
  name: 'gallery',
  data () {
    return {
      cards: null,
      cardsCol1: null,
      cardsCol2: null,
      cardsCol3: null,
      cardsCol4: null,
      cardsCol5: null,
      lenOfCols: [0, 0, 0, 0, 0],
      num: 0
    }
  },
  mounted () {
    this.lenOfCols = [0, 0, 0, 0, 0]
    let usrCookie = Cookies.get('login_token')
    if (usrCookie !== undefined) {
      this.$axios({
        method: 'post',
        url: '/api/gallery/',
        withCredentials: true,
        headers: {Authorization: usrCookie},
        data: {'token': usrCookie}
      }).then(response => {
        console.log('API: /api/gallery------------')
        console.log(response)
        this.cards = response.data
        this.cardsCol1 = []
        this.cardsCol2 = []
        this.cardsCol3 = []
        this.cardsCol4 = []
        this.cardsCol5 = []
        let tmpLen = response.data.length
        for (var i = 0; i < tmpLen; i++) {
          var tmpImg = new Image()
          tmpImg.src = response.data[i].imagesrc
          var shortestColIndex = 0
          for (var j = 0; j < this.lenOfCols.length; j++) {
            if (this.lenOfCols[j] < this.lenOfCols[shortestColIndex]) {
              shortestColIndex = j
            }
          }
          var norLen = (tmpImg.height + 0.0) / tmpImg.width + 0.5625
          var tmpA = [this.lenOfCols[0], this.lenOfCols[1], this.lenOfCols[2], this.lenOfCols[3], this.lenOfCols[4]]
          tmpA[shortestColIndex] += norLen
          this.lenOfCols = tmpA
          if (shortestColIndex === 0) {
            this.cardsCol1.push(response.data[i])
          } else if (shortestColIndex === 1) {
            this.cardsCol2.push(response.data[i])
          } else if (shortestColIndex === 2) {
            this.cardsCol3.push(response.data[i])
          } else if (shortestColIndex === 3) {
            this.cardsCol4.push(response.data[i])
          } else if (shortestColIndex === 4) {
            this.cardsCol5.push(response.data[i])
          }
        }
      })
    }
  },
  components: {
    gallerycard,
    axios
  },
  methods: {
    handleReachBottom () {
      console.log('loading')
      return new Promise(resolve => {
        setTimeout(() => {
          let usrCookie = Cookies.get('login_token')
          this.$axios({
            method: 'post',
            url: '/api/gallery/more_cards/',
            withCredentials: true,
            headers: {Authorization: usrCookie},
            data: {
              'token': usrCookie,
              'count': this.num
            }
          }).then(response => {
            console.log('API: /api/gallery/more_cards-')
            console.log(response)
            var tmpCards = []
            var oldLen = this.cards.length
            for (var k = 0; k < oldLen; k++) {
              tmpCards.push(this.cards[k])
            }
            var newLen = response.data.length
            for (var j = 0; j < newLen; j++) {
              tmpCards.push(response.data[j])
            }
            this.cards = tmpCards
            /* distribution */
            let tmpLen = response.data.length
            for (var i = 0; i < tmpLen; i++) {
              var tmpImg = new Image()
              tmpImg.src = response.data[i].imagesrc
              var norLen = (tmpImg.height + 0.0) / tmpImg.width + 0.5625
              var shortestColIndex = 0
              for (var p = 0; p < 5; p++) {
                if (this.lenOfCols[p] < this.lenOfCols[shortestColIndex]) {
                  shortestColIndex = p
                }
              }
              this.lenOfCols[shortestColIndex] += norLen
              console.log(this.lenOfCols)
              if (shortestColIndex === 0) {
                this.cardsCol1.push(response.data[i])
              } else if (shortestColIndex === 1) {
                this.cardsCol2.push(response.data[i])
              } else if (shortestColIndex === 2) {
                this.cardsCol3.push(response.data[i])
              } else if (shortestColIndex === 3) {
                this.cardsCol4.push(response.data[i])
              } else if (shortestColIndex === 4) {
                this.cardsCol5.push(response.data[i])
              }
            }
          })
          this.num++
          resolve()
        }, 1000)
      })
    }
  }
}
</script>
<style>
  .ivu-scroll-wrapper{
    height: 100%;
  }
  .ivu-scroll-container{
    height: 100%!important;
  }
  .box::-webkit-scrollbar {
    display: none;
  }
  .ivu-layout-sider{
    display: none;
  }
  .ivu-layout{
    background-color: #eceff1;
    padding-left: 0px!important;
  }
  .ivu-scroll-content{
    margin-top: 5px;
    margin-right: -4px;
  }
  .ivu-scroll-container{
    margin-right: -4px;
  }
  body{
    overflow: hidden;
  }
</style>
