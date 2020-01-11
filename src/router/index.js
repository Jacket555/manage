import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import about from '../views/About.vue'
import home from '../views/Home.vue'
import type from '../views/type.vue'
import user_manage from '../views/user_manage.vue'
import power_manage from '../views/power_manage.vue'
import goods_manage from '../views/goods_manage.vue'
import goods_desc from '../views/goods_desc.vue'
import goods_updata from '../views/goods_updata.vue'
import order from '../views/order.vue'
import order_desc from '../views/order_desc.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/about/:username',
    name: 'about',
    components:{
      default:about,
    },
    children:[
      {
        path:'home',component:home
      },
      {
        path:'type',component:type
      },{
        path:'usermanage',component:user_manage
      },
      {
        path:'powermanage',component:power_manage
      },
      {
        path:'goodsmanage',component:goods_manage
      },
      {
        path:'goodsdesc/:id',component:goods_desc
      },
      {
        path:'addgoods',component:goods_updata
      },
      {
        path:'updatagoods/:id',component:goods_updata
      },
      {
        path:'order',component:order
      },
      {
        path:'order/:id',component:order_desc
      }
    ]

  },

]

const router = new VueRouter({
  routes
})

export default router
