<style scoped>
    .layout{
        border: 0px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 0px;
        overflow: hidden;
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
                        <Col  span='2'  offset='9' class="layout-logo" >
                            <img class = 'logo-min' src='../assets/logo-min.png'>
                        </Col>
                        <Col  class="layout-nav">
                            <MenuItem name="1">
                                <Icon type="ios-navigate"></Icon>
                                Item 1
                            </MenuItem >
                            <MenuItem name="2">
                                <Icon type="ios-keypad"></Icon>
                                Item 2
                            </MenuItem>
                            <MenuItem name="3">
                                <Icon type="ios-analytics"></Icon>
                                Item 3
                            </MenuItem>
                            <MenuItem name="4">
                                <Icon type="ios-paper"></Icon>
                                <Poptip trigger="hover" title='最近通知'><notice></notice>
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
                        <Menu :style="{background: '#fff',height: '100%'}" active-name="1" theme="light" width="auto" height="auto" :open-names="['1','2','3']">
                            <Submenu name="1">
                                <template slot="title">
                                    <Icon type="ios-navigate"></Icon>
                                    Item 1
                                </template>
                                <MenuItem name="1-1">Option 1</MenuItem>
                                <MenuItem name="1-2">Option 2</MenuItem>
                                <MenuItem name="1-3">Option 3</MenuItem>
                            </Submenu>
                            <Submenu name="2">
                                <template slot="title">
                                    <Icon type="ios-keypad"></Icon>
                                    Item 2
                                </template>
                                <MenuItem name="2-1">Option 1</MenuItem>
                                <MenuItem name="2-2">Option 2</MenuItem>
                            </Submenu>
                            <Submenu name="3">
                                <template slot="title">
                                    <Icon type="ios-analytics"></Icon>
                                    Item 3
                                </template>
                                <MenuItem name="3-1">Option 1 </MenuItem>
                                <MenuItem name="3-2">Option 2 </MenuItem>
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
import notice from './widgets/display/notification.vue'
export default {
  name: 'blade',
  components: {
    notice
  }
}
</script>
