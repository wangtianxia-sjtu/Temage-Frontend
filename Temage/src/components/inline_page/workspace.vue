<template>
<div>
    <Card>
        <div style="height: 600px">
            <Row>
                <Col :span='8' :offset='4'>
                    <imgBoard></imgBoard>
                </Col>
                <Col :span='8'>
                    <txtBoard></txtBoard>
                </Col>
            </Row>
        </div>
    </Card>
</div>
</template>

<script>
import imgBoard from '@/components/widgets/core/image_board.vue'
import txtBoard from '@/components/widgets/core/text_board.vue'
export default {
  name: 'workspace',
  data () {
    return {
        text: this.value,
        image: this.url
    }
  },
  components: {
    imgBoard,
    txtBoard
  }
}
</script>