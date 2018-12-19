var express = require('express');
const app = express()
app.use(express.static('src'));

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

let usr_card = {
  'name':'cat1_lily',
  'img_url':'/cat1_lily.jpg',
  'prompt':'A lovely cat Lily!',
  'url':'/detail_page' // click at
}

let show_card = {
  'name':'cat1_lily',
  'img_url':'/cat1_lily.jpg',
  'prompt':'A lovely cat Lily!',
  'url':'/detail_page', // click at
  'creator':user_info,
}

let homepage_data = {
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

let work_data = {
  'guess_style':[
    {
      'name' : 'sport',
      'possibility': '80%',
    },
    {
      'name' : 'art',
      'possibility' : '45%',
    },
    {
      'name' : 'history',
      'possibility': '25%',
    }
  ],
  'all_style':[
    'style_1','style_2','style_4','style_5',
    'style_6','style_7','style_8','style_9',
    'style_a','style_b','style_c','style_d',
    'style_e','style_f','style_g','style_h',
    'style_i','style_j','style_k','style_l',
  ],
  'temage' : "<html><head> </head> <body> <h1>Hello, Temage!</h1> </body> </html>",
};

let gallery_data = [
  {
    'name':'cat1_lily',
    'img_url':'/cat1_lily.jpg',
    'prompt':'A lovely cat Lily!',
    'url':'/detail_page',
    'creator':user_info,
  },
  {
    'name':'cat1_lily',
    'img_url':'/cat1_lily.jpg',
    'prompt':'A lovely cat Lily!',
    'url':'/detail_page',
    'creator':user_info,
  },
  {
    'name':'cat1_lily',
    'img_url':'/cat1_lily.jpg',
    'prompt':'A lovely cat Lily!',
    'url':'/detail_page',
    'creator':user_info,
  },
  {
    'name':'cat1_lily',
    'img_url':'/cat1_lily.jpg',
    'prompt':'A lovely cat Lily!',
    'url':'/detail_page',
    'creator':user_info,
  },
];

let recent_data = [
  {'name':'cat1_lily',
    'img_url':'/cat1_lily.jpg',
    'prompt':'A lovely cat Lily!',
    'url':'/detail_page'},
  {'name':'cat1_lily',
    'img_url':'/cat1_lily.jpg',
    'prompt':'A lovely cat Lily!',
    'url':'/detail_page'},
  {
    'name':'cat1_lily',
    'img_url':'/cat1_lily.jpg',
    'prompt':'A lovely cat Lily!',
    'url':'/detail_page'
  },
  {'name':'cat1_lily',
    'img_url':'/cat1_lily.jpg',
    'prompt':'A lovely cat Lily!',
    'url':'/detail_page'
  },
];

let collection_data = [
  {
    'name':'cat1_lily',
    'img_url':'/cat1_lily.jpg',
    'prompt':'A lovely cat Lily!',
    'url':'/detail_page',
    'creator':user_info,
  },
  {
    'name':'cat1_lily',
    'img_url':'/cat1_lily.jpg',
    'prompt':'A lovely cat Lily!',
    'url':'/detail_page',
    'creator':user_info,
  },
  {
    'name':'cat1_lily',
    'img_url':'/cat1_lily.jpg',
    'prompt':'A lovely cat Lily!',
    'url':'/detail_page',
    'creator':user_info,
  },
  {
    'name':'cat1_lily',
    'img_url':'/cat1_lily.jpg',
    'prompt':'A lovely cat Lily!',
    'url':'/detail_page',
    'creator':user_info,
  },
];

// send data in route
app.get('/', (req, res) => res.json(homepage_data))
app.get('/work', (req, res) => res.json(work_data))
app.get('/gallery', (req, res) => res.send(gallery_data))
app.get('/collection', (req, res) => res.send(collection_data))
app.get('/recent', (req, res) => res.send(recent_data))

app.listen(8080, () => console.log('Example app listening on http://localhost:8080'))
