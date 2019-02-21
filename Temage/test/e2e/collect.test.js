module.exports = {
  'Basic e2e Test' (browser) {
    browser
      .url('http://0.0.0.0:8081/#/login')
      .waitForElementVisible('body')
      .setValue('.ivu-input.ivu-input-default', 'qxy')
      .setValue('#app > div > div > div > div > div > div > form > div:nth-child(2) > div > div > div > input', '123')
      .click('.tmg-btn-lo.ivu-btn.ivu-btn-primary')
      .pause(1000)
      .url('http://0.0.0.0:8081/#/id/text/1')
      .waitForElementVisible('body')
      .click('#app > div > div > div.ivu-layout.ivu-layout-has-sider > div.ivu-layout > div > div > div > div:nth-child(7) > div:nth-child(1) > button') // 点击搜索
      .pause(1000)
      .assert.containsText('body > div.ivu-message > div > div > div:nth-child(1) > div > span', '已加入到我的收藏!')
      .end()
  }
}
// 用例编号: 003
// 测试单元描述: 模拟用户收藏行为
// 用例目的: 验证前端收藏过程正确性, 接口/api/collect/正常运行
// 前提条件:
//        1.浏览器Cookies含有登录用户信息;
//        2.被收藏文章作者不是收藏执行用户;
//        3.被收藏文章不再用户收藏夹中
// 特殊的规程说明: 必须首先执行登录, 保证用户Cookies被储存
// 用例间的依赖关系: 登录成功测试后执行本用例
// 具体流程:
//    步骤1
//        输入: 用户名:qxy; 密码:123; 登录操作
//        期望输出: 登陆成功, 跳转到主页
//        实际输出: 登陆成功, 跳转到主页
//        备注: 无
//    步骤2
//        输入: 1号文章地址
//        期望输出: 跳转到该文章
//        实际输出: 跳转到该文章
//        备注: 无
//    步骤3:
//        输入: 收藏操作
//        期望输出: 提示收藏成功
//        实际输出: 提示收藏成功
//        备注: 无
// 测试结果综合分析及建议: 测试流程正常, 接口运行正常
// 测试经验总结: 合理利用已通过的测试构建本测试的测试环境
