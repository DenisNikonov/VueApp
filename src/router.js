import Vue from 'vue'
import Router from 'vue-router'
import AccountDetailContent from './views/AccountDetailContent'
import BookmarksContent from './views/BookmarksContent'
import DashboardContent from './views/DashboardContent'
import MyListingContent from './views/MyListingContent'
import PromotionsContent from './views/PromotionsContent'
import Login from './components/LogIn'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path: '/accountdetail',

      name: 'AccountDetailContent',
      component: AccountDetailContent
    },
    {
      path: '/bookmarks',
      name: 'BookmarksContent',

      linkActiveClass:'',
      component: BookmarksContent
    },
    {
      path: '/dashboard',
      name: 'DashboardContent',

      component: DashboardContent
    },
    {
      path: '/mylisting',
      name: 'MyListingContent',

      component: MyListingContent
    },
    {
      path: '/promotions',
      name: 'PromotionsContent',
      component: PromotionsContent
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
