<template>
    <b-card v-bind:title="title" @click="view()"
                v-bind:img-src="imagesrc"
                img-fluid
                img-alt="image"
                img-top v-on:mouseenter="visible" @mouseleave="invisible" v-bind:header="head">
            <p class="card-text">
                {{maintext}}
            </p>
            <Button @click="closable" :size="buttonSize" icon="ios-download-outline" type="success" v-show="seen">View more</Button>
            <div slot="footer">
                <small class="text-muted">{{foottext}}</small>
            </div>
    </b-card>
</template>

<style src="bootstrap/dist/css/bootstrap.css" scoped>
</style>

<script>
import axios from 'axios'
export default {
  name: 'gallerycard',
  components: {
    axios
  },
  data () {
    return {
      seen: false,
      btnvariant: 'danger',
      btnsize: 'sm',
      buttonSize: 'large'
    }
  },
  props: ['imagesrc', 'title', 'head', 'maintext', 'foottext', 'id'],
  methods: {
    closable () {
    },
    view () {
      let textID = this.id
      const { href } = this.$router.resolve({
        name: 'text',
        params: {
          id: textID
        }
      })
      window.open(href)
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
