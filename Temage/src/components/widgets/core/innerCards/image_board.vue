<template>
  <div>
    <el-upload
      ref="upload"
      action="http://localhost:8080/api/workflow/post_picture/"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :auto-upload='false'
      :with-credentials="true"
      :headers="{Authorization: this.user_token}"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
export default {
  name: 'imgBoard',
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      user_token: Cookies.get('login_token')
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
