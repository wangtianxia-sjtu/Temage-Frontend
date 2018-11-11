<template>
<div>
    <br><br>
    <b-card-group columns>
<gallerycard v-for="card in cards" :key='card' v-bind:imagesrc="card.imagesrc" :title="card.title" :head="card.head" :maintext="card.maintext" :foottext="card.foottext"></gallerycard>
</b-card-group>
<br><br><br><br>
</div>
</template>

<style src="bootstrap/dist/css/bootstrap.css" scoped>
</style>

<script>
import gallerycard from '@/components/widgets/display/gallery_card.vue'
export default {
  name: 'gallery',
  data () {
    return {
      cards: [
        {
          imagesrc: require('@/assets/cat1.png'),
          title: 'Card title that wraps to a new line',
          head: 'Quote',
          maintext: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit',
          foottext: 'Footer Text'
        },
        {
          imagesrc: require('@/assets/cat2.png'),
          title: 'Card title that wraps to a new line',
          head: 'Quote',
          maintext: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit',
          foottext: 'Footer Text'
        },
        {
          imagesrc: require('@/assets/cat3.png'),
          title: 'Card title that wraps to a new line',
          head: 'Quote',
          maintext: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit',
          foottext: 'Footer Text'
        },
        {
          imagesrc: require('@/assets/cat4.png'),
          title: 'Card title that wraps to a new line',
          head: 'Quote',
          maintext: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit',
          foottext: 'Footer Text'
        },
        {
          imagesrc: require('@/assets/cat5.png'),
          title: 'Card title that wraps to a new line',
          head: 'Quote',
          maintext: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit',
          foottext: 'Footer Text'
        },
        {
          imagesrc: require('@/assets/cat6.png'),
          title: 'Card title that wraps to a new line',
          head: 'Quote',
          maintext: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit',
          foottext: 'Footer Text'
        }
      ]
    }
  },
  components: {
    gallerycard
  }
}
</script>
