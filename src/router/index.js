import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'

const home = () => import('../views/home')
const item = () => import('../views/item')
const score = () => import('../views/score')

Vue.use(VueRouter)

const routes = [{
   path: '/',
   component: App,
  children: [{
    path: '',
    component: home
  },
  {
    path: '/item',
    component: item
  },
  {
    path: '/score',
    component: score
  }]
 }]

const router = new VueRouter({
  routes
})

const originalPush1 = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush1.call(this, location).catch(err => err)
}

const originalPush = VueRouter.prototype.replace
   VueRouter.prototype.replace = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default router
