var express = require('express');
const app = express()
app.use(express.static('src'));

/*
 * setting header for express
 */
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8081");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  if (req.method === 'OPTIONS') {
    res.sendStatus(200); // 让options请求快速返回
  }
  else {
    next();
  }
});

/*
 * simulating data * * * * * * * * * * * * *
 * =========================================
 * /

/* display img id */
let picurl1 = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548045612427&di=00c1ea33a8c9009c89f896809ea1f211&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F019fd9554b9028000001bf72d491bb.jpg%402o.jpg"
let picurl2 = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548045612428&di=bb236d9b2536dacd8e80552b691b430f&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201808%2F01%2F174647y7sts7snkkqnz7nl.jpg"
let picurl3 = "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1833235402,1991457466&fm=26&gp=0.jpg"

/* simulating user */
let user_info = {
  'username':'???',
  'id':'???',
  'avator':picurl2,
}

let usr_card = {
  'name':'cat1_lily',
  'img_url':picurl1,
  'prompt':'A lovely cat Lily!',
  'id':'1703701' // click at
}

let show_card = {
  'name':'cat1_lily',
  'img_url':picurl2,
  'prompt':'A lovely cat Lily!',
  'id':'1703701', // click at
  'creator':user_info,
}

let homepage_data = {
  'recent_pics':[
    {
      'title':'Jenkins Added.',
      'imgsrc':picurl1,
      'prompt':'A lovely cat Lily!',
      'id':'1703701' // click at
    },
    {
      'title':'cat1_lily',
      'imgsrc':picurl2,
      'prompt':'A lovely cat Lily!',
      'id':'1703701'
    }
  ],
  'collect_pics':[
    {
      'title':'cat1_lily',
      'imgsrc':picurl3,
      'prompt':'A lovely cat Lily!',
      'id':'1703701' // click at
    },
    {
      'title':'cat1_lily',
      'imgsrc':picurl2,
      'prompt':'A lovely cat Lily!',
      'id':'1703701'
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
    'title':'SumpleCat',
    'imagesrc':picurl3,
    'head': 'head content',
    'maintext': 'What a lovely cat! Its name is Lily!',
    'foottest': 'foot content',
    'id':'1703701',
    'creator':user_info,
  },
  {
    'title':'SumpleCat',
    'imagesrc':picurl2,
    'head': 'head content',
    'maintext': 'What a lovely cat! Its name is Lily!',
    'foottest': 'foot content',
    'id':'1703701',
    'creator':user_info,
  },
  {
    'title':'SumpleCat',
    'imagesrc':picurl1,
    'head': 'head content',
    'maintext': 'What a lovely cat! Its name is Lily!',
    'foottest': 'foot content',
    'id':'1703701',
    'creator':user_info,
  },
  {
    'title':'SumpleCat',
    'imagesrc':picurl1,
    'head': 'head content',
    'maintext': 'What a lovely cat! Its name is Lily!',
    'foottest': 'foot content',
    'id':'1703701',
    'creator':user_info,
  },
  {
    'title':'SumpleCat',
    'imagesrc':picurl2,
    'head': 'head content',
    'maintext': 'What a lovely cat! Its name is Lily!',
    'foottest': 'foot content',
    'id':'1703701',
    'creator':user_info,
  },
  {
    'title':'SumpleCat',
    'imagesrc':picurl3,
    'head': 'head content',
    'maintext': 'What a lovely cat! Its name is Lily!',
    'foottest': 'foot content',
    'id':'1703701',
    'creator':user_info,
  },
  {
    'title':'SumpleCat',
    'imagesrc':picurl3,
    'head': 'head content',
    'maintext': 'What a lovely cat! Its name is Lily!',
    'foottest': 'foot content',
    'id':'1703701',
    'creator':user_info,
  }
];

let recent_data = [
  {'name':'cat1_lily',
    'img_url':picurl2,
    'prompt':'A lovely cat Lily!',
    'id':'1703701'},
  {'name':'cat1_lily',
    'img_url':picurl1,
    'prompt':'A lovely cat Lily!',
    'id':'1703701'},
  {
    'name':'cat1_lily',
    'img_url':picurl3,
    'prompt':'A lovely cat Lily!',
    'id':'1703701'
  },
  {'name':'cat1_lily',
    'img_url':picurl1,
    'prompt':'A lovely cat Lily!',
    'id':'1703701'
  },
];

let collection_data = [
  {
    'name':'cat1_lily',
    'imgsrc':picurl3,
    'prompt':'A lovely cat Lily!',
    'id':'1703701',
    'creator':user_info,
    'title': 'cat1_lily'
  },
  {
    'name':'cat1_lily',
    'imgsrc':picurl2,
    'prompt':'A lovely cat Lily!',
    'id':'1703701',
    'creator':user_info,
    'title': 'cat1_lily'
  },
  {
    'name':'cat1_lily',
    'imgsrc':picurl1,
    'prompt':'A lovely cat Lily!',
    'id':'1703701',
    'creator':user_info,
    'title': 'cat1_lily'
  },
  {
    'name':'cat1_lily',
    'imgsrc':picurl2,
    'prompt':'A lovely cat Lily!',
    'id':'1703701',
    'creator':user_info,
    'title': 'cat1_lily'
  },
];

/* login data check */
let user1 = {
  'username': 'qxy',
  'password': '123'
}

/* register data check*/
let regiter = {
  'username': 'tmg',
  'email': '123123@qq.com',
  'interest': ['Porn','Sport'], // not sure
  'desc': 'love and peace'
}

// simulating data on above * * * * * * * * * *

/*
 * Interface def * * * * * * * * * * * * *
 * =========================================
 * /

/* send static data to route */

app.get('/api/work', (req, res) => res.json(work_data))
app.get('/api/collection', (req, res) => res.send(collection_data))
app.get('/api/recent', (req, res) => res.send(recent_data))

/* parse posted data */
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

/* login data check */
app.post('/login/submit', function(req, res) {
  let user = req.body
  console.log(user)
  if(user.password === user1.password && user.username === user1.username)
  {
    user_info.username = user.username
    res.send(200, {"token": 'anyway'})
  }else{
    res.send(505)
  }
})

/* register data check */
app.post('/register', function(req, res){
  console.log(req.body)
    res.send(200)
})

/* data feed back after login*/
app.post('/authenticate', function(req, res) {
  let user_token = req.get('Authorization')
  console.log(user_token)
  /* return cards according to USER_TOKEN */
  res.send(user_info)
})

/* Data need in homepage */
app.post('/api', function(req, res){
  let user_token = req.get('Authorization')
  console.log(user_token)
  /* return cards according to USER_TOKEN */
  res.send(homepage_data)
})

/* gallery initial data*/
app.post('/api/gallery', function(req, res){
  let user_token = req.get('Authorization')
  console.log(user_token)
  /* return cards according to USER_TOKEN */
  res.send(gallery_data)
})

/* gallery loading data*/
app.post('/api/gallery/more_cards', function(req, res) {
  let user_token = req.get('Authorization')
  let browser_info = req.body
  console.log(user_token)
  console.log(browser_info)
  /* return cards according to USER and browser_info */
  res.send(gallery_data)
})

/* click into a specific text page*/
app.post('/api/text',function (req, res) {
  let card_id = req.body.id
  /* use ${card_id} to return content */
  let content = {
    id: card_id, // this id is textID, may differ from card_id
    text: `<p>This is the text with ID:${card_id}</p>`,
    creator: user_info
  }
  res.send(content)
})

/* suspend on Express*/
app.listen(3030, () => console.log('Example app listening on http://localhost:3030'))
