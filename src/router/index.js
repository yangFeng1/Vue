import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
import index from '../components/index'
import Person from '../components/personalCenter.vue'
import music from '../components/music.vue'
import ToDo from '../components/ToDo.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children: [
        {
          path: '/index/personalCenter',
          component: Person
        },
        {
          path: '/index/music',
          component: music
        },
        {
          path: '/index/ToDo',
          component: ToDo
        }
      ]
    }
  ]
})
