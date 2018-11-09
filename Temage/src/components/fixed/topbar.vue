<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" v-bind:style="topbarstyle">
  <el-menu-item index="1" class="el-menu-item1">选项</el-menu-item>
  <el-submenu index="2">
    <template slot="title" class="el-menu-item1">我的工作台</template>
    <el-menu-item index="2-1" class="el-menu-item1">选项1</el-menu-item>
    <el-menu-item index="2-2" class="el-menu-item1">选项2</el-menu-item>
    <el-menu-item index="2-3" class="el-menu-item1">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title" class="el-menu-item1">选项4</template>
      <el-menu-item index="2-4-1" class="el-menu-item1">选项1</el-menu-item>
      <el-menu-item index="2-4-2" class="el-menu-item1">选项2</el-menu-item>
      <el-menu-item index="2-4-3" class="el-menu-item1">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled class="el-menu-item1">消息中心</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu>
</template>

<script>
export default {
  name: 'topbar',
  data () {
    return {
      activeIndex: '1',
      topbarstyle: {
        position: 'fixed',
        width: '100%'
      }
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
