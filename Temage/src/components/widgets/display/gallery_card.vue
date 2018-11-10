<template>
    <b-card v-bind:title="title"
                v-bind:img-src="imagesrc"
                img-fluid
                img-alt="image"
                img-top v-on:mouseenter="visible" @mouseleave="invisible" v-bind:header="head">
            <p class="card-text">
                {{maintext}}
            </p>
            <Button @click="closable" :size="buttonSize" icon="ios-download-outline" type="error" v-show="seen">Add to my collection</Button>
            <div slot="footer">
                <small class="text-muted">{{foottext}}</small>
            </div>
    </b-card>
</template>

<style src="bootstrap/dist/css/bootstrap.css" scoped>
</style>

<script>
export default {
  name: 'gallerycard',
  data () {
    return {
      seen: false,
      btnvariant: 'danger',
      btnsize: 'sm',
      buttonSize: 'large',
      imagesrc: require('@/assets/jzm.jpg'),
      title: 'Card title that wraps to a new line',
      head: 'Quote',
      maintext: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit',
      foottext: 'Footer Text'
    }
  },
  methods: {
    closable () {
      this.$Message.info({
        content: 'Successfully add to my collection',
        duration: 3,
        closable: true
      })
    },
    visible: function () {
      this.seen = true
    },
    invisible: function () {
      this.seen = false
    }
  }
}
</script>
