var express = require('express');
const app = express()

// for cors
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  if (req.method === 'OPTIONS') {
    res.sendStatus(200); // 让options请求快速返回
  }
  else {
    next();
  }
});
// data
let user_info = {
  'name':'wxm',
  'id':'516015910018',
  'avator':'/user1_pic.jpg',
}

let homepage_datas = {
  'recent_pics':[
    {
      'name':'cat1_lily',
      'img_url':'/cat1_lily.jpg',
      'prompt':'A lovely cat Lily!',
      'url':'/detail_page' // click at 
    }, 
    {
      'name':'cat1_lily',
      'img_url':'/cat1_lily.jpg',
      'prompt':'A lovely cat Lily!',
      'url':'/detail_page'
    }
  ],
  'gallery_pics':[
    {} // same above
  ],
  'user_info':user_info
};


// send data in route
app.get('/', (req, res) => res.send(homepage_datas))
app.get('/work', (req, res) => res.send('Hello World!'))
app.get('/gallery', (req, res) => res.send('Hello World!'))
app.get('/collection', (req, res) => res.send('Hello World!'))
app.get('/recent', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on http://localhost:3000!'))
