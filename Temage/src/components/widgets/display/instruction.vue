<template>
        <Poptip v-model="visible">
            <Button class = 'instr' icon="md-information-circle" type="primary">instruction</Button>
            <div slot="title" class='ins-title'><i>欢迎使用！</i></div>
            <div slot="content" class='ins-con'>
                <Row>
                <img src='../../../assets/logo.png' width='300px'>
                </Row>
                <Row>
                这是一些引导内容。
                </Row>
                <br>
                <Button @click="close">close</Button>
                <Button type="primary" class='next-ins' @click='next'>下一条</Button>
            </div>
        </Poptip>
</template>
<style>
.next-ins{
    float:right;
}
.ins-con{
    color: black;
    font-size: 15px;
}
.ins-title{
    color: black;
    font-size: 25px;
}
.ivu-btn-primary {
    font-size: 15px;
    color: #fff;
    background-color: #2460a0;
    border-color: #2460a0;
  }
.ivu-btn-primary:hover {
    color: rgb(17, 25, 43);
    background-color: #9dc2eb;
    border-color: #9dc2eb
  }
.ivu-btn {
    font-size: 15px;
  }
</style>
<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    close () {
      this.visible = false
    },
    next () {
      this.html('<h1>switch</h1>')
    }
  }
}
</script>
