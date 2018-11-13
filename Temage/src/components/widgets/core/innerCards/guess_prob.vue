<template>
  <div style="margin:20px;text-align: center">
    <Row>
    <p class='guess'>初步推断，您的风格可能是...</p>
    </Row>
    <Row style="width: 80%; margin-left: 10%; margin-top: 20px;">
        <Col :span='6'><p class="word_top">"Sport"</p></Col>
        <Col :span='6'><p class="word">"Tec"</p></Col>
        <Col :span='6'><p class="word">"Movie"</p></Col>
        <Col :span='6'><p class="word">"Music"</p></Col>
    </Row>
    <Row style="width: 80%;margin-left: 10%">
            <Col :span='6'><el-progress type="circle" :percentage="80" color='#47a53e' ></el-progress></Col>
            <Col :span='6'><el-progress type="circle" :percentage="30"></el-progress></Col>
            <Col :span='6'><el-progress type="circle" :percentage="20"></el-progress></Col>
            <Col :span='6'><el-progress type="circle" :percentage="10"></el-progress></Col>
    </Row>
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
        margin-left: 15%;
        font-size: 20px;
    }
</style>
<script>
export default {
  name: 'freq'
}
</script>
