<template>
        <div>
            <Row>
            <Col :span='12' style='margin-bottom:10px; margin-top: 30px'><p>请在此处输入纯文本</p></Col>
            <Col :span='10' :offset='0' style='margin-bottom:10px; margin-top: 30px'><p>请在此处插入图片</p></Col>
            </Row>
            <Row>
                <Col :span='11'>
                    <txtBoard ref="textUpload" v-on:handText="setThisText"></txtBoard>
                </Col>
                <Col :span='12' :offset='1'>
                    <imgBoard ref="imgUpload"></imgBoard>
                </Col>
            </Row>
        </div>
</template>
<style>
    .ivu-btn-primary {
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
import imgBoard from '@/components/widgets/core/innerCards/image_board.vue'
import txtBoard from '@/components/widgets/core/innerCards/text_board.vue'
export default {
  name: 'create',
  data () {
    return {
      spinShow: true,
      text: null,
      image: this.url
    }
  },
  methods: {
    setThisText: function (msg) {
      this.text = msg
      this.$emit('setText', this.text)
    }
  },
  components: {
    imgBoard,
    txtBoard
  }
}
</script>
