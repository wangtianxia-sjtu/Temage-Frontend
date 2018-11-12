<style scoped>
  .layout {
    border: 0px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 0px;
    overflow: hidden;
    text-align: left;
  }

  .layout-logo {
    width: 100px;
    height: 35px;
    border-radius: 3px;
    float: left;
    position: inherit;
    top: 7px;
    align-self: center;
    text-align: center;
  }
  .layout-logo:hover {
    width: 100px;
    height: 35px;
    border-radius: 3px;
    float: left;
    position: inherit;
    top: 7px;
    align-self: center;
    text-align: center;
  }

  .layout-nav {
    margin-top: -5px;
    margin-right: -102px;
    float: right;
  }

  .topbar {
    background: #5e9eda;
    height: 50px;
  }

  .logo-min {
    margin: -11px;
    max-width:90%;
    opacity: 1.0;
  }
  .ivu-btn-primary {
    color: #fff;
    background-color: #2460a0;
    border-color: #2460a0;
  }

  .ivu-btn-primary:hover {
    color: rgb(17, 25, 43);
    background-color: #9dc2eb;
    border-color: #9dc2eb
  }
  .ivu-btn {
    font-size: 15px;
  }
  .ivu-menu-item {
    color: rgb(35, 50, 85);
  }
</style>
<template>
  <div class="layout" style="height: 100%">
    <Layout :style="{background: '#fff',height: '100%'}">
      <Header class='topbar'>
        <Row>
          <Col span='4' style='top: 7px; margin-left: -40px;'><Input search enter-button placeholder="Search" /></Col>
          <Col span='20'>
          <Menu mode="horizontal" theme="dark" active-name="1" class='topbar'>
            <Row>
              <Col span='3' offset='10' class="layout-logo">
              <router-link to="/">
                <Button type="primary" style="margin-top:-25px"><img class='logo-min' src='../assets/logo-min.png'></Button>
              </router-link>
              </Col>
              <Col class="layout-nav">
              <MenuItem name='i'>
                <router-link to="/work">
              <Button icon="md-add" type="primary">New</Button>
                </router-link>
              <instruct></instruct>
              <Icon type="md-notifications"></Icon>
              <Poptip trigger="hover" title='最近通知'>
                <noticeTop></noticeTop>
                <div class="api" slot="content" style="color:#000">
                  test
                </div>
              </Poptip>
              </MenuItem>
              </Col>
            </Row>
          </Menu>
          </Col>
        </Row>
      </Header>
      <Layout :style="{background: '#fff',height: '100%'}">
        <Sider hide-trigger :style="{background: '#fff',height: '100%'}">
          <Menu :style="{background: '#fff',height: '100%'}" theme="light" width="auto" height="auto" :open-names="['1','2','3']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="md-home"></Icon>
                Homepage
              </template>
              <router-link to="/">
                <MenuItem name="1-0">
                <Icon type="md-card"></Icon>
                Display
                </MenuItem>
              </router-link>

              <router-link to="/recent">
                <MenuItem name="1-1">
                <Icon type="md-time"></Icon>
                Recent Cards
                </MenuItem>
              </router-link>

              <MenuItem name="1-2">
              <Icon type="md-heart"></Icon>
              Collection
              </MenuItem>
              <MenuItem name="1-3">
              <noticeSide></noticeSide>
              </MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                Gallery
              </template>
              <router-link to="/gallery">
                <MenuItem name="2-2">
                <Icon type="md-color-palette"></Icon>
                Community
                </MenuItem>
              </router-link>
              <MenuItem name="2-1">
              <Icon type="md-share"></Icon>
              Sharing
              </MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="md-easel"></Icon>
                Workspace
              </template>
                <router-link to="/work">
              <MenuItem name="3-1">
              <Icon type="md-create"></Icon>
              Create
              </MenuItem>
                </router-link>
              <MenuItem name="3-2">
              <Icon type="logo-buffer"></Icon>
              Saved
              </MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <router-view />
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import noticeTop from './widgets/display/notification-top.vue'
import noticeSide from './widgets/display/notification-side.vue'
import instruct from './widgets/display/instruction.vue'
export default {
  name: 'blade',
  components: {
    noticeTop,
    noticeSide,
    instruct
  }
}
</script>
