module.exports = {
  'Basic e2e Test' (browser) {
    browser
      .url('http://0.0.0.0:8081/#/register')
      .waitForElementVisible('body')
      .setValue('#app > div > div > div > div > div > form > div:nth-child(1) > div > div > input', 'name1')
      .setValue('input[type=password]', '123')
      .setValue('#app > div > div > div > div > div > form > div:nth-child(3) > div > div.ivu-input-wrapper.ivu-input-wrapper-default.ivu-input-type > input', '123@sample.com')
      .setValue('#app > div > div > div > div > div > form > div:nth-child(5) > div > div.ivu-input-wrapper.ivu-input-wrapper-default.ivu-input-type > textarea', 'describe')
      .click('#app > div > div > div > div > div > form > div:nth-child(6) > div > button.tmg-btn-re.ivu-btn.ivu-btn-primary')
      .pause(1000)
      .assert.visible('#app > div > div > div > div > div > a > img')
      .end()
  }
}
// 用例编号: 201
// 集成测试描述: 模拟用户注册
// 用例目的: 验证前端注册过程正确性, 接口/api/register/正常运行
// 前提条件:
//        1.浏览器Cookies不含有登录用户信息;
//        2.用户名未被注册;
//        3.注册其他字段按需求完整填写
// 特殊的规程说明: 注册时validate操作需要各个字段按要求完整填写
// 用例间的依赖关系: 无
// 具体流程:
//    步骤1
//        输入: 用户名: name1
//        期望输出: validate正常
//        实际输出: validate正常
//        备注: 无
//    步骤2
//        输入: 用户密码: 123
//        期望输出: validate正常
//        实际输出: validate正常
//        备注: 无
//    步骤3:
//        输入: 电子邮件: 123@sample.com
//        期望输出: validate正常
//        实际输出: validate正常
//        备注: 无
//    步骤4:
//        输入: 个人描述: describe
//        期望输出: validate正常
//        实际输出: validate正常
//        备注: 无
// 测试结果综合分析及建议: 测试流程正常, 接口运行正常
// 测试经验总结: 合理设计测试填充表单, 验证表单验证功能和提示功能
