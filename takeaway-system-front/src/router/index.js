import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopOne from '../pages/Shopone/ShopOne.vue'
import ShopTwo from '../pages/Shoptwo/ShopTwo.vue'
import ShopThree from '../pages/Shopthree/ShopThree.vue'
import ShopFour from '../pages/Shopfour/ShopFour.vue'
import ShopFive from '../pages/Shopfive/ShopFive.vue'
import ShopSix from '../pages/Shopsix/ShopSix.vue'
import ShopSeven from '../pages/Shopseven/ShopSeven.vue'
import ShopEight from '../pages/Shopeight/ShopEight.vue'
import ShopNine from '../pages/Shopnine/ShopNine.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
import MyOrder from '../pages/Profile/MyOrder/MyOrder.vue'
import Grade  from '../pages/Profile/Grade/Grade.vue'
import Service from '../pages/Profile/Service/Service.vue'
import Member from  '../pages/Profile/Member/Member.vue'
Vue.use(Router)

export default new Router({
  routes: [

     {
        path: '/home',
        component:Home,
        meta:{
           showFooter:true
        }
     },
     {
      path: '/order',
      component:Order,
      meta:{
         showFooter:true
      }
     },
     {
      path: '/profile',
      component:Profile,

      meta:{
         showFooter:true
      },
      children:[
        {
          path:'/profile/order',
          component:MyOrder,
          meta:{
            showFooter:true
         },
        },
        {
          path:'/profile/grade',
          component:Grade,
          meta:{
            showFooter:true
        },
      },
      {
        path:'/profile/service',
        component:Service,
        meta:{
          showFooter:true
      },
    },
    {
      path:'/profile/member',
      component:Member,
      meta:{
        showFooter:true
    },
  },

      ]
     },
     {
      path: '/search',
      component:Search,

      meta:{
         showFooter:true
      }
     },
     {
      path:'/',
      redirect:'/home'
   },
   {
     path:'/login',
     component:Login,

   },
   {
    path:'/shop',
    component:Shop,
    children:[
      {
        path:'/shop/goods',
        component:ShopGoods,

      },
      {
        path:'/shop/ratings',
        component:ShopRatings,

      },
      {
        path:'/shop/info',
        component:ShopInfo,

      },
      {
        path:'',
        redirect:'/shop/goods'
      },
    ]

  },
  {
    path:'/shopone',
    component:ShopOne,
    children:[
      {
        path:'/shopone/goods',
        component:ShopGoods,

      },
      {
        path:'/shopone/ratings',
        component:ShopRatings,

      },
      {
        path:'/shopone/info',
        component:ShopInfo,

      },
      {
        path:'',
        redirect:'/shopone/goods'
      },
    ]

  },
  {
    path:'/shoptwo',
    component:ShopTwo,
    children:[
      {
        path:'/shoptwo/goods',
        component:ShopGoods,

      },
      {
        path:'/shoptwo/ratings',
        component:ShopRatings,

      },
      {
        path:'/shoptwo/info',
        component:ShopInfo,

      },
      {
        path:'',
        redirect:'/shoptwo/goods'
      },
    ]

  },
  {
    path:'/shopthree',
    component:ShopThree,
    children:[
      {
        path:'/shopthree/goods',
        component:ShopGoods,

      },
      {
        path:'/shopthree/ratings',
        component:ShopRatings,

      },
      {
        path:'/shopthree/info',
        component:ShopInfo,

      },
      {
        path:'',
        redirect:'/shopthree/goods'
      },
    ]

  },
  {
    path:'/shopfour',
    component:ShopFour,
    children:[
      {
        path:'/shopfour/goods',
        component:ShopGoods,

      },
      {
        path:'/shopfour/ratings',
        component:ShopRatings,

      },
      {
        path:'/shopfour/info',
        component:ShopInfo,

      },
      {
        path:'',
        redirect:'/shopfour/goods'
      },
    ]

  },
  {
    path:'/shopfive',
    component:ShopFive,
    children:[
      {
        path:'/shopfive/goods',
        component:ShopGoods,

      },
      {
        path:'/shopfive/ratings',
        component:ShopRatings,

      },
      {
        path:'/shopfive/info',
        component:ShopInfo,

      },
      {
        path:'',
        redirect:'/shopfive/goods'
      },
    ]

  },
  {
    path:'/shopsix',
    component:ShopSix,
    children:[
      {
        path:'/shopsix/goods',
        component:ShopGoods,

      },
      {
        path:'/shopsix/ratings',
        component:ShopRatings,

      },
      {
        path:'/shopsix/info',
        component:ShopInfo,

      },
      {
        path:'',
        redirect:'/shopsix/goods'
      },
    ]

  },
  {
    path:'/shopseven',
    component:ShopSeven,
    children:[
      {
        path:'/shopseven/goods',
        component:ShopGoods,

      },
      {
        path:'/shopseven/ratings',
        component:ShopRatings,

      },
      {
        path:'/shopseven/info',
        component:ShopInfo,

      },
      {
        path:'',
        redirect:'/shopseven/goods'
      },
    ]

  },
  {
    path:'/shopeight',
    component:ShopEight,
    children:[
      {
        path:'/shopeight/goods',
        component:ShopGoods,

      },
      {
        path:'/shopeight/ratings',
        component:ShopRatings,

      },
      {
        path:'/shopeight/info',
        component:ShopInfo,

      },
      {
        path:'',
        redirect:'/shopeight/goods'
      },
    ]

  },
  {
    path:'/shopnine',
    component:ShopNine,
    children:[
      {
        path:'/shopnine/goods',
        component:ShopGoods,

      },
      {
        path:'/shopnine/ratings',
        component:ShopRatings,

      },
      {
        path:'/shopnine/info',
        component:ShopInfo,

      },
      {
        path:'',
        redirect:'/shopnine/goods'
      },
    ]

  },

  ]
})
