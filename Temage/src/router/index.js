import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
function loadView (view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `../components/${view}.vue`)
}
export default new Router({
  routes: [
    {
      path: '/id',
      name: 'blade',
      component: loadView('blade'),
      children: [
        {
          path: '',
          name: 'homepage',
          component: loadView('inline_page/homepage')
        },
        {
          path: 'work',
          component: loadView('inline_page/workspace')
        },
        {
          path: 'gallery',
          name: 'gallery',
          component: loadView('inline_page/gallery')
        },
        {
          path: 'collection',
          name: 'collection',
          component: loadView('inline_page/collection')
        },
        {
          path: 'recent',
          name: 'recent',
          component: loadView('inline_page/recent')
        },
        {
          path: 'text/:id',
          name: 'text',
          component: loadView('inline_page/text')
        },
        {
          path: 'search/:keyword',
          name: 'search',
          component: loadView('inline_page/gallery')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: loadView('userSys/login')
    },
    {
      path: '/register',
      name: 'register',
      component: loadView('userSys/register')
    },
    {
      path: '/',
      name: 'idx',
      component: loadView('userSys/info')
    }
  ]
})
