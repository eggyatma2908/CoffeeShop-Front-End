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
import EditProductAdmin from '@/components/module/EditProductAdmin.vue'
import ProductCustomer from '../components/module/ProductCustomer/ProductCustomer.vue'
import ProductDetails from '../components/module/Productdetails.vue'
import ProductAdmin from '../components/module/ProductAdmin/ProductAdmin.vue'
import ProductDetailsAdmin from '../components/module/ProductDetailsAdmin.vue'
import UserProfile from '../views/profile/UserProfile.vue'
import store from '../store/index'
import PaymentDelivery from '../components/module/PaymentDelivery.vue'
import RoomChat from '../components/module/RoomChat.vue'
import NewProduct from '../components/module/NewProduct.vue'
import FavoriteProduct from '../components/module/ProductCustomer/components/FavoriteProducts.vue'
import NonCoffee from '../components/module/ProductCustomer/components/NonCoffee.vue'
import Foods from '../components/module/ProductCustomer/components/Foods.vue'
import Coffee from '../components/module/ProductCustomer/components/Coffee.vue'
import AddOn from '../components/module/ProductCustomer/components/AddOn.vue'
import FavoriteProductAdmin from '../components/module/ProductAdmin/components/FavoriteProductAdmin.vue'
import NonCoffeeAdmin from '../components/module/ProductAdmin/components/NonCoffeeAdmin.vue'
import FoodsAdmin from '../components/module/ProductAdmin/components/FoodsAdmin.vue'
import CoffeeAdmin from '../components/module/ProductAdmin/components/CoffeeAdmin.vue'
import AddOnAdmin from '../components/module/ProductAdmin/components/AddOnAdmin.vue'
import SaveEditAdmin from '../components/module/SaveEditAdmin.vue'
import EmailVerification from '../views/email/EmailVerification.vue'
import ManageOrder from '../components/module/admin/ManageOrder/ManageOrder.vue'

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
    redirect: ProductCustomer,
    children: [
      {
        path: 'chat',
        name: 'Chat',
        component: Chat,
        meta: { requiresAuth: true }
      },
      {
        path: 'edit-product-admin/:idProduct',
        name: 'EditProductAdmin',
        component: EditProductAdmin,
        meta: { requiresAuth: true }
      },
      {
        path: 'save-product/:idProduct',
        name: 'SaveEditAdmin',
        component: SaveEditAdmin,
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
        meta: { requiresAuth: true },
        redirect: '/home/product-customer/favorite-product',
        children: [
          {
            path: 'favorite-product',
            name: 'FavoriteProduct',
            component: FavoriteProduct,
            meta: { requiresAuth: true }
          },
          {
            path: 'non-coffee',
            name: 'NonCoffee',
            component: NonCoffee,
            meta: { requiresAuth: true }
          },
          {
            path: 'coffee',
            name: 'Coffee',
            component: Coffee,
            meta: { requiresAuth: true }
          },
          {
            path: 'foods',
            name: 'Foods',
            component: Foods,
            meta: { requiresAuth: true }
          },
          {
            path: 'add-on',
            name: 'AddOn',
            component: AddOn,
            meta: { requiresAuth: true }
          }
        ]
      },
      {
        path: 'product-admin',
        name: 'ProductAdmin',
        component: ProductAdmin,
        meta: { requiresAuth: true, requiresAdmin: true },
        children: [
          {
            path: 'favorite-product',
            name: 'FavoriteProductAdmin',
            component: FavoriteProductAdmin
          },
          {
            path: 'non-coffee',
            name: 'NonCoffeeAdmin',
            component: NonCoffeeAdmin
          },
          {
            path: 'coffee',
            name: 'CoffeeAdmin',
            component: CoffeeAdmin
          },
          {
            path: 'foods',
            name: 'FoodsAdmin',
            component: FoodsAdmin
          },
          {
            path: 'add-on',
            name: 'AddOnAdmin',
            component: AddOnAdmin
          }
        ]
      },
      {
        path: 'product-details/:idProduct',
        name: 'ProductDetails',
        component: ProductDetails,
        meta: { requiresAuth: true }
      },
      {
        path: 'product-details-admin/:idProduct',
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
      },
      {
        path: 'new-product',
        name: 'NewProduct',
        component: NewProduct,
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
    path: '/emailverification/:email',
    name: 'EmailVerification',
    component: EmailVerification,
    meta: { requiresVisitor: true }
  },
  {
    path: '/profile/user-profile',
    name: 'UserProfile',
    component: UserProfile,
    meta: { requiresAuth: true }
  },
  {
    path: '/manageorder',
    name: 'ManageOrder',
    component: ManageOrder,
    meta: { requiresAdmin: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth && record.meta.requiresAdmin)) {
    if (!store.getters.isLogin) {
      next({
        path: '/auth/login'
      })
    } else {
      if (store.getters.isAdmin) {
        next()
      } else {
        next({
          path: '/home/product-customer/favorite-product'
        })
      }
    }
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/auth/login'
      })
    } else {
      next()
    }
  }
  if (to.matched.some(record => record.meta.requiresAdmin)) {
    if (!store.getters.isAdmin) {
      next({
        path: '/auth/login'
      })
    } else {
      next()
    }
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/auth/login'
      })
    } else {
      next()
    }
  }
  if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/profile/user-profile'
      })
    } else {
      next()
    }
  }
  // else
  next()
})

export default router
