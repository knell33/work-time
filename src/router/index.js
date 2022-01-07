import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Navigation from '../components/Navigation.vue'
// 导入全局样式
import '../assets/css/global.css'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/navigation' },
  { path: '/login', component: Login },
  { path: '/navigation', component: Navigation }
]

const router = new VueRouter({
  mode: 'history', //去除url#
  routes
})

export default router
