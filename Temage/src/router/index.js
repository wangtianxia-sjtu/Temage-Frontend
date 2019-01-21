import Vue from 'vue'
import Router from 'vue-router'
/* page after login */
import blade from '../components/blade.vue'
import homepage from '../components/inline_page/homepage'
import gallery from '../components/inline_page/gallery.vue'
import collection from '../components/inline_page/collection.vue'
import recent from '../components/inline_page/recent.vue'
import work from '../components/inline_page/workspace.vue'
import ml from '../components/inline_page/ml.vue'
import text from '../components/inline_page/text.vue'
/* page for visitor */
import login from '../components/userSys/login'
import register from '../components/userSys/register'
import info from '../components/userSys/info'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/id',
      name: 'blade',
      component: blade,
      children: [
        {
          path: '',
          name: 'homepage',
          component: homepage
        },
        {
          path: 'work',
          component: work
        },
        {
          path: 'gallery',
          name: 'gallery',
          component: gallery
        },
        {
          path: 'collection',
          name: 'collection',
          component: collection
        },
        {
          path: 'recent',
          name: 'recent',
          component: recent
        },
        {
          path: 'ml',
          name: 'ml',
          component: ml
        },
        {
          path: 'text/:id',
          name: 'text',
          component: text
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/',
      name: 'idx',
      component: info
    }
  ]
})
