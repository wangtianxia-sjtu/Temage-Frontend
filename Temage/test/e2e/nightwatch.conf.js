require('babel-register')

// http://nightwatchjs.org/gettingstarted#settings-file
module.exports = {
  'webdriver': {
    'server_path': './chromedriver', // 浏览器 driver 的 bin 执行路径
    'start_process': true, // 需要启动 driver
    'port': 9515 // driver 启动的端口, 一般是 9515 或 4444
  },
  'test_settings': {
    'default': {
      'desiredCapabilities': {
        'browserName': 'chrome' // 浏览器的名字叫 safari
      }
    }
  }
}
