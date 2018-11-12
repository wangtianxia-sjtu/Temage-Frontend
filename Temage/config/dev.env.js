'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  PAGE_STYLE: ["fashion", "tech"],
  STATUS: {
    homepage:{
      display:'1-1',
      recent:'1-2',
      collection:'1-3',
    },
    gallery:{
      community:'2-1',
      sharing:'2-2',
    },
    workspace:{
      create:'3-1',
      adjust:'3-2',
      review:'3-3',
      saved:'3-4'
    }
  },
})
