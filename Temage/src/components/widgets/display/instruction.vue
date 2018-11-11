<template>
        <Poptip v-model="visible">
            <Button :size="buttonSize" class = 'instr' icon="md-information-circle" type="primary">instruction</Button>
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
                <Button :size="small" type="primary" class='next-ins' @click='next'>下一条</Button>
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
.instr{
    font-size: 15px!important;
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
    next(){
    }
  }
}
</script>
