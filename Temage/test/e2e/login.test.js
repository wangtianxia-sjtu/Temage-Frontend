module.exports = {
  'Basic e2e Test' (browser) {
    browser
      .url('http://127.0.0.1:8081/#/login')
      .waitForElementVisible('body')
      .setValue('.ivu-input.ivu-input-default', 'username')
      .setValue('#app > div > div > div > div > div > div > form > div:nth-child(2) > div > div > div > input', '123')
      .click('.tmg-btn-lo.ivu-btn.ivu-btn-primary')
      .pause(1000)
      .assert.containsText('#app > div > div > div.topbar.ivu-layout-header > div > div.ivu-col.ivu-col-span-20 > ul > div > div.layout-nav.ivu-col > li > div:nth-child(4) > div.ivu-poptip-rel > div > div', 'username')
      .end()
  }
}

// 用例编号: 202
// 集成测试描述: 模拟用户登录过程
// 用例目的: 验证前端注册过程正确性, 接口/login/submit/正常运行
// 前提条件:
//        1.浏览器Cookies不含有登录用户信息;
//        2.用户信息已经被注册;
//        3.登录字段按需求正确填写
// 特殊的规程说明: 用户名与密码字段要求与数据库内信息一致
// 用例间的依赖关系: 进行注册后再用用户名和密码字段进行登录
// 具体流程:
//    步骤1
//        输入: 用户名: username
//        期望输出: validate正常
//        实际输出: validate正常
//        备注: 无
//    步骤2
//        输入: 用户密码: 123
//        期望输出: validate正常
//        实际输出: validate正常
//        备注: 无
//    步骤3:
//        输入: 点击登录按钮, 提交表单
//        期望输出: 页面跳转至用户主页
//        实际输出: 页面跳转至用户主页
//        备注: 无
// 测试结果综合分析及建议: 测试流程正常, 接口运行正常
// 测试经验总结: 合理安排测试顺序, 体现测试用例关系
