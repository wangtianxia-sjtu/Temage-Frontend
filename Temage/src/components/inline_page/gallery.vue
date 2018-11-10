<template>
<div>
    <br><br>
    <b-card-group columns>
<gallerycard></gallerycard>
<gallerycard></gallerycard>
<gallerycard></gallerycard>
<gallerycard></gallerycard>
<gallerycard></gallerycard>
<gallerycard></gallerycard>
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
  components: {
    gallerycard
  }
}
</script>
