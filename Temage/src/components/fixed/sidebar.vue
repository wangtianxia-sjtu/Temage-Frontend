<template>
  <div>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @click="logStable"
          @close="handleClose">
          <br><br><br>
          <el-menu-item index="1" >
            <i class="el-icon-menu"></i>
            <span slot="title">我的主页</span>
          </el-menu-item>

          <el-menu-item index="2">
                <i class="el-icon-star-off"></i>
                <span slot="title">Gallery</span>
          </el-menu-item>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-edit-outline"></i>
              <span>工作区</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="3-1">
                    <i class="el-icon-circle-plus-outline"></i>
                    <span slot="title">新建卡片</span>
                </el-menu-item>
                <el-menu-item index="3-2">
                    <i class="el-icon-view"></i>
                    <span slot="title">我的卡片</span>
                </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
  <style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 100%;
      float: left;
      position:fixed;
      font-family: Helvetica, Arial, sans-serif;
    }
  </style>

<script>
export default {
  name: 'sideBar',
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    logStable () {
      console.log(123123)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
