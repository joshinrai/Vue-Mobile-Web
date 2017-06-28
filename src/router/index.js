import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'

Vue.use(Router)

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
    }
  ]
})
