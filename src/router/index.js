import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Auth from '../views/auth/Auth.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import ForgotPassword from '../views/auth/ForgotPassword.vue'
// import Home from '@/views/Home.vue'
import History from '@/components/module/History'
import Chat from '@/components/module/Chat'
import ProductCustomer from '../components/module/ProductCustomer.vue'
import ProductDetails from '../components/module/ProductDetails.vue'
import ProductAdmin from '../components/module/ProductAdmin.vue'
import ProductDetailsAdmin from '../components/module/ProductDetailsAdmin.vue'
import UserProfile from '../views/profile/UserProfile.vue'
import store from '../store/index'
import PaymentDelivery from '../components/module/PaymentDelivery.vue'
import RoomChat from '../components/module/RoomChat.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    meta: { requiresAuth: true }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'chat',
        name: 'Chat',
        component: Chat,
        meta: { requiresAuth: true }
      },
      {
        path: 'history',
        name: 'History',
        component: History,
        meta: { requiresAuth: true }
      },
      {
        path: 'product-customer',
        name: 'ProductCustomer',
        component: ProductCustomer,
        meta: { requiresAuth: true }
      },
      {
        path: 'product-admin',
        name: 'ProductAdmin',
        component: ProductAdmin,
        meta: { requiresAuth: true }
      },
      {
        path: 'product-details',
        name: 'ProductDetails',
        component: ProductDetails,
        meta: { requiresAuth: true }
      },
      {
        path: 'product-details-admin',
        name: 'ProductDetailsAdmin',
        component: ProductDetailsAdmin,
        meta: { requiresAuth: true }
      },
      {
        path: 'payment-delivery',
        name: 'PaymentDelivery',
        component: PaymentDelivery,
        meta: { requiresAuth: true }
      },
      {
        path: 'room-chat',
        name: 'RoomChat',
        component: RoomChat,
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login,
        meta: { requiresVisitor: true }
      },
      {
        path: 'register',
        name: 'Register',
        component: Register,
        meta: { requiresVisitor: true }
      }
    ]
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: { requiresVisitor: true }
  },
  {
    path: '/profile/user-profile',
    name: 'UserProfile',
    component: UserProfile,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/auth/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/profile/user-profile'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
