import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...routes,
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/Cart.vue')
    },
    {
      path: '/goods',
      name: 'goods',
      component: () => import('../views/Goods.vue')
    },
    {
      path: '/current-goods',
      name: 'current-goods',
      component: () => import('../views/CurrentGoods.vue')
    }
  ]
})

export default router
