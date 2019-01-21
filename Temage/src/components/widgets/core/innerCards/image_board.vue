<template>
  <div>
    <el-upload
      ref="upload"
    action="http://localhost:3030/api/pic_post"
    list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :file-list="fileList"
    :on-remove="handleRemove"
    :auto-upload='false'
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'imgBoard',
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    handleRemove (file, fileList) {},
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    submitUpload () {
      this.$refs.upload.submit()
    }
  }
}
</script>
