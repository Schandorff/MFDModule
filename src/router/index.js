import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Collection from '@/components/Collection'
import productDetail from '@/components/productDetail'
import Contact from '@/components/Contact'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/collection',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/product/:id',
      name: 'productDetail',
      component: productDetail
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})