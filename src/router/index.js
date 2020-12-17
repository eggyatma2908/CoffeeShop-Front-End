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
import UserProfile from '../views/profile/UserProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: ''
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'chat',
        name: 'Chat',
        component: Chat
      },
      {
        path: 'history',
        name: 'History',
        component: History
      },
      {
        path: 'product-customer',
        name: 'ProductCustomer',
        component: ProductCustomer
      },
      {
        path: 'product-details',
        name: 'ProductDetails',
        component: ProductDetails
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
        component: Login
      },
      {
        path: 'register',
        name: 'Register',
        component: Register
      }
    ]
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/profile/user-profile',
    name: 'UserProfile',
    component: UserProfile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
