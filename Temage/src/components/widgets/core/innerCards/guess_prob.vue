<template>
  <div style="margin:20px;text-align: center">
    <Row>
    <p class='guess'>初步推断，您的风格可能是...</p>
    </Row>
    <ve-liquidfill :data="chartData" :settings="chartSettings" style="margin: 50px;height: 400px; margin-top: -60px"></ve-liquidfill>
    <!--
    <Row style="width: 80%; margin-left: 10%; margin-top: 20px;">
        <Col :span='6'><p class="word_top">"{{this.name[0]}}"</p></Col>
        <Col :span='6'><p class="word">"{{this.name[1]}}"</p></Col>
        <Col :span='6'><p class="word">"{{this.name[2]}}"</p></Col>
        <Col :span='6'><p class="word">"{{this.name[3]}}"</p></Col>
    </Row>
    <Row style="width: 80%;margin-left: 10%">
            <Col :span='6'><el-progress type="circle" :percentage="rate1" color='#47a53e' ></el-progress></Col>
            <Col :span='6'><el-progress type="circle" :percentage="rate2"></el-progress></Col>
            <Col :span='6'><el-progress type="circle" :percentage="rate3"></el-progress></Col>
            <Col :span='6'><el-progress type="circle" :percentage="rate4"></el-progress></Col>
    </Row>
    <Button @click="activate"> more </Button>
    -->
  </div>
</template>
<style>
    .word{
        text-align: center;
        font-size: 30px;
    }
    .word_top{
        text-align: center;
        font-size: 30px;
        color: #47a53e;
    }
    .guess{
        text-align: left;
        margin-left: 60px;
        font-size: 20px;
    }
    #app > div > div > div.ivu-layout.ivu-layout-has-sider > div.ivu-layout > div > div > div > div:nth-child(3) > div > div:nth-child(1) > div.ve-liquidfill{
      height: 500px
    }
</style>
<script>
export default {
  name: 'freq',
  data () {
    this.chartSettings = {
      wave: [[0.7, 0.5, 0.2], [0.1, 0.05], [0.05, 0.02], [0.03, 0.02, 0.01]],
      digit: 5,
      seriesMap: [
        {
          color: ['#8DDD72', '#64D550', '#37993C', '#237A2A'],
          label: {
            formatter (options) {
              const {
                seriesName,
                value
              } = options
              return `${seriesName}\n${value * 100}%`
            },
            fontSize: 30,
            color: 'green',
            insideColor: 'white'
          },
          center: ['50%', '55%'],
          radius: '70%',
          outline: {
            itemStyle: {
              borderColor: '#8DDD72'
            }
          },
          backgroundStyle: {
            color: '#E6FFE3'
          }
        },
        {
          color: ['#70dd8a', '#44BF72', '#2CBB73'],
          label: {
            formatter (options) {
              const {
                seriesName,
                value
              } = options
              return `${seriesName}\n${value * 100}%`
            },
            fontSize: 30,
            color: '#2DBC74'
          },
          center: ['19%', '40%'],
          radius: '40%',
          outline: {
            itemStyle: {
              borderColor: '#70dd8a'
            }
          },
          backgroundStyle: {
            color: '#E9FFEE'
          }
        },
        {
          color: ['#87DDCA', '#5AD6DD', '#41B7B5'],
          label: {
            formatter (options) {
              const {
                seriesName,
                value
              } = options
              return `${seriesName}\n${value * 100}%`
            },
            fontSize: 30,
            color: '#44a1a6'
          },
          center: ['77%', '80%'],
          radius: '30%',
          outline: {
            itemStyle: {
              borderColor: '#5AD6DD'
            }
          },
          backgroundStyle: {
            color: '#e5ffff'
          }
        },
        {
          label: {
            formatter (options) {
              const {
                seriesName,
                value
              } = options
              return `${seriesName}\n${value * 100}%`
            },
            fontSize: 30,
            color: '#5e9eda'
          },
          center: ['80%', '30%'],
          radius: '30%',
          outline: {
            itemStyle: {
              borderColor: '#5e9eda'
            }
          }
        }
      ]
    }
    return {
      name: [],
      rate: [],
      chartData: {
        columns: ['sty', 'percent'],
        rows: [{
          sty: 'x',
          percent: 0.01
        }, {
          sty: 'x',
          percent: 0.01
        }, {
          sty: 'x',
          percent: 0.01
        },
        {
          sty: 'x',
          percent: 0.01
        }]
      }
    }
  },
  mounted () {
    this.name = this.guess_lay.name
    this.rate = this.guess_lay.rate
    let dupArray = []
    for (var i = 0; i < 4; i++) {
      dupArray.push(
        {
          sty: this.name[i],
          percent: this.rate[i]
        }
      )
    }
    this.chartData.rows = dupArray
    // for (var i = 0; i < 4; i++) {
    //   if (this.name[i] === 'science-technology') {
    //     this.chartData.rows[i].sty = 'science\ntechnology'
    //   } else {
    //     this.chartData.rows[i].sty = this.name[i]
    //   }
    //   let round = this.rate[i].toFixed(5)
    //   this.chartData.rows[i].percent = round
    // }
  },
  props: {
    guess_lay: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
  }
}
</script>
