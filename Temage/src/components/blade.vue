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
        height: 30px;
        background: rgba(32, 51, 87, 0.185);
        border-radius: 3px;
        float: left;
        position:inherit;
        top: 10px;
    }
    .layout-nav{
        width: 420px;
        margin-top:-5px;
        float: right;
    }
</style>
<template>
        <div class="layout" style="height: 100%">
            <Layout :style="{background: '#fff',minHeight: '100%'}">
                <Header style="background: #5e9eda; height: 50px;">
                    <Menu mode="horizontal" theme="dark" active-name="1" style="background: #5e9eda; height: 50px;">
                        <div class="layout-logo">
                            <h2 style="margin-top:-16px; color:#FFF">Temage</h2>
                        </div>
                        <div class="layout-nav">
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
                                Item 4
                            </MenuItem>
                        </div>
                    </Menu>
                </Header>
                <Layout  :style="{background: '#fff',minHeight: '100%'}">
                    <Sider hide-trigger :style="{background: '#fff',minHeight: '100%'}">
                        <Menu active-name="1" theme="light" width="auto" height="auto" :open-names="['1','2','3']">
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
export default {
  name: 'blade'
}
</script>
