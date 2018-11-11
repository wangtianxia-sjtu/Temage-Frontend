<style scoped>
    .layout{
        border: 0px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 0px;
        overflow: hidden;
        text-align: left;
    }
    .layout-logo{
        width: 100px;
        height: 35px;
        background: rgba(32, 51, 87, 0.185);
        border-radius: 3px;
        float: left;
        position:inherit;
        top: 7px;
        align-self: center;
        text-align: center;
    }
    .layout-nav{
        margin-top:-5px;
        margin-right:-65px;
        float: right;
    }
    .topbar{
        background: #5e9eda;
        height: 50px;
    }
    .logo-min{
        margin-top:2px;
        max-width: 120%;
        max-height: 100%;
        opacity: 0.7;
    }
    .logo-min:hover{
        opacity: 1.0;
    }
    .ivu-btn-primary{
        color:#fff;background-color:#2460a07c;border-color:#2460a0;
    }
    .ivu-btn-primary:hover{
        color:#fff;background-color:#9dc2eb;border-color:#9dc2eb
    }
    .ivu-input-search{
        background:#2460a07c!important;
        border-color:#2460a04f!important;
    }
    .ivu-input-search:hover{
        background:#b3cde9!important;border-color:#b2d0f0!important
    }
    .ivu-btn{
        font-size: 15px;
    }
</style>
<template>
        <div class="layout" style="height: 100%">
            <Layout :style="{background: '#fff',height: '100%'}">
                <Header class='topbar'>
                    <Row>
                        <Col span='4' style='top: 7px; margin-left: -20px;'><Input search enter-button placeholder="Search" /></Col>
                        <Col span='20'>
                        <Menu mode="horizontal" theme="dark" active-name="1" class='topbar'>
                        <Row>
                        <Col  span='3'  offset='9' class="layout-logo" >
                            <router-link to="/">
                            <img class = 'logo-min' src='../assets/logo-min.png' width="100%">
                            </router-link>
                        </Col>
                        <Col  class="layout-nav">
                            <MenuItem name="4">
                                <Button :size="buttonSize" icon="md-add" type="primary">New</Button>
                                <instruct></instruct>
                                <Icon type="md-notifications"></Icon>
                                <Poptip trigger="hover" title='最近通知'><noticeTop></noticeTop>
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
                <Layout  :style="{background: '#fff',height: '100%'}">
                    <Sider hide-trigger :style="{background: '#fff',height: '100%'}">
                        <Menu :style="{background: '#fff',height: '100%'}"  theme="light" width="auto" height="auto" :open-names="['1','2','3']">
                            <Submenu name="1">
                                <template slot="title">
                                    <Icon type="md-home"></Icon>
                                     Homepage
                                </template>
                                <router-link to="/"><MenuItem name="1-0"><Icon type="md-card"></Icon>Display</MenuItem></router-link>
                                <MenuItem name="1-1"><Icon type="md-time"></Icon>Recent Cards</MenuItem>
                                <MenuItem name="1-2"><Icon type="md-heart"></Icon>Collection</MenuItem>
                                <MenuItem name="1-3"></Icon><noticeSide></noticeSide></MenuItem>
                            </Submenu>
                            <Submenu name="2">
                                <template slot="title">
                                    <Icon type="ios-keypad"></Icon>
                                    Gallery
                                </template>
                                <router-link to="/gallery"><MenuItem name="2-2"><Icon type="md-color-palette"></Icon>Community</MenuItem></router-link>
                                <MenuItem name="2-1"><Icon type="md-share"></Icon>Sharing</MenuItem>
                            </Submenu>
                            <Submenu name="3">
                                <template slot="title">
                                    <Icon type="md-easel"></Icon>
                                    Workspace
                                </template>
                                <MenuItem name="3-1"><Icon type="md-create"></Icon>Create </MenuItem>
                                <MenuItem name="3-2"><Icon type="logo-buffer"></Icon>Saved </MenuItem>
                            </Submenu>
                        </Menu>
                    </Sider>
                    <Layout :style="{padding: '0 24px 24px'}">
                        <router-view/>
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
