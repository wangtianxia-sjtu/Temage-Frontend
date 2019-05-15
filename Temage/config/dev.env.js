'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API:{
    explore: {
      get_home_data: '"/api/explore/"',
      get_gallery_data: '"/api/explore/gallery/"',
      get_gallery_more_data: '"/api/explore/gallery/more_cards/"',
      get_collection_data: '"/api/explore/collection/"',
      get_recent_data: '"/api/explore/get_recent/"',
      get_product: '"/api/explore/product/"',
      post_collect: '"/api/explore/post_collect/"',
      delete_product: '"/api/explore/product/delete/"',
      cancel_collect: '"/api/explore/product/cancel_collect/"',
      post_search :'"/api/explore/post_search/"'
    },
    workflow: {
      push_match_event: '"/api/workflow/push_match_event"',
      post_picture: '"/api/workflow/post_picture/"',
      post_text: '"/api/workflow/post_text/"',
      confirm_style: '"/api/workflow/confirm_style/"',
      store_passage:'"/api/workflow/store_passage/"',
      finished_work: '"/api/workflow/finished_work/"',
      confirm_store: '"/api/workflow/confirm_store/"',
      download_picture: '"/api/workflow/download_picture/"',
    },
    user: {
      post_register: '"/api/user/register/"',
      login: '"/api/user/login/"',
      auth: '"/api/user/authenticate/"'
    },
    deepLearning: {
      get_embedding: '"/learning/embedding"'
    }
  },
  styleNames:
    ["'NONE'", "'constellation'", "'economics'",
      "'education'", "'entertainment'", "'fashion'",
      "'furniture'", "'game'", "'lottery'",
      "'politics'", "'real-estate'", "'science-technology'",
      "'society'", "'sport'", "'stock'"]
})
