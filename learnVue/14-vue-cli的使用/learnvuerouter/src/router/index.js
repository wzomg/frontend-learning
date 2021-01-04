// 配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')


// 1、通过Vue.use(插件), 安装插件
Vue.use(VueRouter)

// 2、创建VueRouter对象
const routes = [
  {
    path: '', // 缺省时重定向到 /home
    // redirect重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      /*{
        path: '',
        redirect: 'news'
      },*/
      {
        // 子路由不需要在前面添加 /
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
    beforeEnter: (to, from, next) => {
      // console.log('about beforeEnter');
      next()
    }
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },
  }
]
const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  mode: 'history', // url 从原本的hash模式变成 html模式，url中没有 #
  linkActiveClass: 'active' // 添加 class 的值
})

// 前置守卫（guard）导航守卫
router.beforeEach((to, from, next) => {
  // 从from跳转到to，取第一级路径
  document.title = to.matched[0].meta.title
  // console.log(to);
  // console.log('++++');
  // 中间件必须调用
  next()
})

// 后置钩子(hook)，不需要主动调用 next() 函数
router.afterEach((to, from) => {
  // console.log('----');
})


// 3、将router对象传入到Vue实例
export default router

