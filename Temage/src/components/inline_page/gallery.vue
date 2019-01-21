<template>
  <div style="margin-right: -25px; height:100%">
  <Scroll :on-reach-bottom="handleReachBottom" :distance-to-edge="[0, 0]">
    <div style="margin-right: 25px">
    <!--<b-card-group columns style="margin-top: 30px">-->
      <Col :span="8">
          <gallerycard v-for="card in cardsCol1" :key='card' v-bind:imagesrc="card.imagesrc" :title="card.title" :head="card.head" :maintext="card.maintext" :foottext="card.foottext" :id="card.id" style="margin:5px; margin-bottom: 5px"></gallerycard>
      </Col>
      <Col :span="8">
        <gallerycard v-for="card in cardsCol2" :key='card' v-bind:imagesrc="card.imagesrc" :title="card.title" :head="card.head" :maintext="card.maintext" :foottext="card.foottext" :id="card.id" style="margin:5px; margin-bottom: 5px"></gallerycard>
      </Col>
      <Col :span="8">
        <gallerycard v-for="card in cardsCol3" :key='card' v-bind:imagesrc="card.imagesrc" :title="card.title" :head="card.head" :maintext="card.maintext" :foottext="card.foottext" :id="card.id" style="margin:5px; margin-bottom: 5px"></gallerycard>
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
      lenOfCols: [0, 0, 0],
      num: 0
    }
  },
  mounted () {
    this.lenOfCols = [0, 0, 0]
    let usrCookie = Cookies.get('login_token')
    if (usrCookie !== undefined) {
      this.$axios({
        method: 'post',
        url: '/api/gallery',
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
        let tmpLen = response.data.length
        for (var i = 0; i < tmpLen; i++) {
          var tmpImg = new Image()
          tmpImg.src = response.data[i].imagesrc
          var shortestColIndex = 0
          if (this.lenOfCols[0] <= this.lenOfCols[1] &&
            this.lenOfCols[0] <= this.lenOfCols[2]) {
            shortestColIndex = 0
          } else if (this.lenOfCols[1] <= this.lenOfCols[0] &&
            this.lenOfCols[1] <= this.lenOfCols[2]) {
            shortestColIndex = 1
          } else {
            shortestColIndex = 2
          }
          var norLen = (tmpImg.height + 0.0) / tmpImg.width + 0.5625
          var tmpA = [this.lenOfCols[0], this.lenOfCols[1], this.lenOfCols[2]]
          tmpA[shortestColIndex] += norLen
          this.lenOfCols = tmpA
          if (shortestColIndex === 0) {
            this.cardsCol1.push(response.data[i])
          } else if (shortestColIndex === 1) {
            this.cardsCol2.push(response.data[i])
          } else {
            this.cardsCol3.push(response.data[i])
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
            url: '/api/gallery/more_cards',
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
              if (this.lenOfCols[0] <= this.lenOfCols[1] &&
              this.lenOfCols[0] <= this.lenOfCols[2]) {
                shortestColIndex = 0
              } else if (this.lenOfCols[1] <= this.lenOfCols[0] &&
              this.lenOfCols[1] <= this.lenOfCols[2]) {
                shortestColIndex = 1
              } else {
                shortestColIndex = 2
              }
              this.lenOfCols[shortestColIndex] += norLen
              console.log(this.lenOfCols)
              if (shortestColIndex === 0) {
                this.cardsCol1.push(response.data[i])
              } else if (shortestColIndex === 1) {
                this.cardsCol2.push(response.data[i])
              } else {
                this.cardsCol3.push(response.data[i])
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
  body{
    overflow: hidden;
  }
</style>
