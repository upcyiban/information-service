import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PhotoCollection from '@/components/PhotoCollection'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/photo',
      name: 'PhotoCollection',
      component: PhotoCollection
    }
  ]
})
