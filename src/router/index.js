import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import HomePage from '@/components/pages/HomePage'
import MainMenu from '@/components/pages/MainMenu'
import Test from '@/components/Test'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import cheerio from 'cheerio'

Vue.use(Router)
Vue.use(MuseUI)
Vue.use(cheerio)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
    	path:'/main',
    	name:'Main',
    	meta: {
        	// 添加该字段，表示进入这个路由是需要登录的
         	requireAuth: true,  
      },
      component: Main
    },
    {
      path:'/homePage',
      name:'HomePage',
      meta: {
          requireAuth: true,  
      },
      component: HomePage
    },
    {
      path:'/mainMenu',
      name:'MainMenu',
      meta: {
          requireAuth: true,  
      },
      component: MainMenu
    },
    {
      path:'/test',
      name:'Test',
      meta: {
          requireAuth: true,  
      },
      component: Test
    }
  ]
})
