import Vue from 'vue'
import Router from 'vue-router'
import homepage from '../components/inline_page/homepage'
import gallery from '../components/inline_page/gallery.vue'
import collection from '../components/inline_page/collection.vue'
import recent from '../components/inline_page/recent.vue'
import work from '../components/inline_page/workspace.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: gallery
    },
    {
      path: '/collection',
      name: 'gallery',
      component: collection
    },
    {
      path: '/recent',
      name: 'recent',
      component: recent
    },
    {
      path: '/work',
      name: 'work',
      component: work
    }
  ]
})
