/* eslint-disable no-unused-expressions */
import Vue from 'vue'
import Vuex from 'vuex'
import jwt from 'jsonwebtoken'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import router from '../router/index'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    password: '',
    user: {},
    accessToken: null || localStorage.getItem('accessToken'),
    refreshToken: null || localStorage.getItem('refreshToken'),
    userData: '',
    cartData: [],
    products: [],
    removeProduct: [],
    updateProduct: [],
    pagination: null,
    dataType: [],
    roleId: null,
    productData: [],
    searchProduct: []
  },
  plugins: [createPersistedState()],
  mutations: {
    togglePassword (state) {
      state.password = document.getElementById('password')
      if (state.password.type === 'password') {
        state.password.type = 'text'
      } else {
        state.password.type = 'password'
      }
    },
    SET_USER (state, payload) {
      state.user = payload
      state.accessToken = payload.accessToken
      state.refreshToken = payload.refreshToken
    },
    SET_PRODUCT (state, payload) {
      state.products = payload
    },
    SET_SEARCH_PRODUCT (state, payload) {
      state.searchProduct = payload
    },
    UPDATE_PRODUCT (state, payload) {
      state.updateProduct = payload
    },
    REMOVE_PRODUCT (state, payload) {
      state.removeProduct = payload
    },
    PRODUCT_PAGINATION (state, payload) {
      state.pagination = payload
    },
    REMOVE_TOKEN (state) {
      state.accessToken = null
      state.refreshToken = null
    },
    SET_USER_DATA (state, payload) {
      state.userData = payload
    },
    SET_CARD_DATA (state, payload) {
      state.cartData = [payload]
    },
    SET_DATA_TYPE (state, payload) {
      state.dataType = payload
    },
    SET_PAGINATION (state, payload) {
      state.pagination = payload
    },
    REMOVE_CART_DATA (state, payload) {
      state.cartData = []
    },
    REMOVE_USER (state) {
      state.user = null
      state.userData = null
      state.pagination = null
      state.dataType = null
      state.products = null
      state.removeProduct = null
    },
    SET_ROLE_ID (state, payload) {
      state.roleId = payload
    },
    SET_DATA_PRODUCT (state, payload) {
      state.productData = payload
    }
  },
  actions: {
    login (context, payload) {
      return new Promise((resolve, reject) => {
        context.dispatch('interceptorRequest')
        axios.post(`${process.env.VUE_APP_URL_API}/users/login`, payload)
          .then(res => {
            const result = res.data.result
            console.log(result)
            localStorage.setItem('accessToken', result.accessToken)
            localStorage.setItem('refreshToken', result.refreshToken)
            jwt.verify(result.accessToken, process.env.VUE_APP_ACCESS_TOKEN_KEY, (error, data) => {
              if (!error) {
                delete data.iat
                delete data.exp
                context.dispatch('getRoleId', data.userId)
                context.dispatch('getDataUserById', data.userId)
              }
            })
            context.commit('SET_USER', result)
            context.dispatch('interceptorRequest')
            resolve(res)
          })
      })
    },
    logout (context) {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('cardData')
      context.commit('REMOVE_TOKEN')
      context.commit('REMOVE_USER')
    },
    register (context, payload) {
      return new Promise((resolve, reject) => {
        context.dispatch('interceptorRequest')
        axios.post(`${process.env.VUE_APP_URL_API}/users/register`, payload)
          .then(res => {
            resolve(res)
          })
      })
    },
    updateUserProfile (context, payload) {
      return new Promise((resolve, reject) => {
        context.dispatch('interceptorRequest')
        axios.patch(`${process.env.VUE_APP_URL_API}/users/profile/${payload.userId}`, payload.formData)
          .then(result => {
            Swal.fire({
              icon: 'success',
              title: 'Succeed',
              text: 'Your personal information has been updated',
              showConfirmButton: false,
              timer: 1500
            })
            router.push({ path: '/home/product-customer/favorite-product' })
            resolve(result)
          })
      })
    },
    getRoleId (context, payload) {
      return new Promise((resolve, reject) => {
        context.dispatch('interceptorRequest')
        axios.get(`${process.env.VUE_APP_URL_API}/users/getroleid/${payload}`)
          .then(result => {
            console.log(result.data.result)
            resolve(result.data.result.roleId)
            context.commit('SET_ROLE_ID', result.data.result.roleId)
          })
          .catch(error => {
            console.log(error)
          })
      })
    },
    getProductCoffee (context, noPage = 1) {
      return new Promise((resolve, reject) => {
        context.dispatch('interceptorRequest')
        axios.get(`${process.env.VUE_APP_URL_API}/products/typeProduct?typeProduct=coffee&page=${noPage}&limit=9`)
          .then(res => {
            console.log('product', res.data.result.products)
            console.log('pagination', res.data.result.pagination)
            context.commit('SET_DATA_TYPE', res.data.result.products)
            context.commit('SET_PAGINATION', res.data.result.pagination)
            resolve(res.data.result)
          })
          .catch(error => {
            console.log(error)
          })
      })
    },
    getProductFoods (context, noPage = 1) {
      return new Promise((resolve, reject) => {
        context.dispatch('interceptorRequest')
        axios.get(`${process.env.VUE_APP_URL_API}/products/typeProduct?typeProduct=food&page=${noPage}&limit=9`)
          .then(res => {
            context.commit('SET_DATA_TYPE', res.data.result.products)
            context.commit('SET_PAGINATION', res.data.result.pagination)
            resolve(res.data.result)
          })
          .catch(error => {
            console.log(error)
          })
      })
    },
    getProductNonCoffee (context, noPage = 1) {
      return new Promise((resolve, reject) => {
        context.dispatch('interceptorRequest')
        axios.get(`${process.env.VUE_APP_URL_API}/products/typeProduct?typeProduct=non-coffee&page=${noPage}&limit=9`)
          .then(results => {
            console.log('pagination', results.data.result.pagination)
            context.commit('SET_PAGINATION', results.data.result.pagination)
            resolve(results.data.result)
          })
          .catch(error => {
            console.log(error)
          })
      })
    },
    getProductAddOn (context, noPage = 1) {
      return new Promise((resolve, reject) => {
        context.dispatch('interceptorRequest')
        axios.get(`${process.env.VUE_APP_URL_API}/products/typeProduct?typeProduct=add-on&page=${noPage}&limit=9`)
          .then(results => {
            console.log(results.data.result)
            console.log('pagination', results.data.result.pagination)
            context.commit('SET_PAGINATION', results.data.result.pagination)
            resolve(results.data.result)
          })
          .catch(error => {
            console.log(error)
          })
      })
    },
    getProductDetailsById (context, payload) {
      return new Promise((resolve, reject) => {
        context.dispatch('interceptorRequest')
        axios.get(`${process.env.VUE_APP_URL_API}/products/${router.currentRoute.params.idProduct}`)
          .then(results => {
            console.log('isi api ', results.data.result)
            context.commit('SET_PRODUCT', results.data.result)
            resolve(results.data.result)
          })
          .catch(error => {
            console.log(error)
          })
      })
    },
    getDataUserById (context, payload) {
      return new Promise((resolve, reject) => {
        context.dispatch('interceptorRequest')
        axios.get(`${process.env.VUE_APP_URL_API}/users/${payload}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
          .then(results => {
            console.log('masuk ini ke get')
            context.commit('SET_USER_DATA', results.data.result)
          })
      })
    },
    getProductName (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_URL_API}/products?productName=${payload}&limit=30`)
          .then(results => {
            const res = results.data.result.products
            context.commit('SET_SEARCH_PRODUCT', res)
            resolve(res)
          })
          .catch(err => {
            console.log(err)
          })
      })
    },
    removeProduct (context, payload) {
      return new Promise((resolve, reject) => {
        context.dispatch('interceptorRequest')
        axios.delete(`${process.env.VUE_APP_URL_API}/products/${router.currentRoute.params.idProduct}`)
          .then((results) => {
            context.commit('REMOVE_PRODUCT', payload)
            resolve(results)
          })
          .catch(error => {
            console.log(error)
          })
      })
    },
    updateProducts (context, payload) {
      return new Promise((resolve, reject) => {
        context.dispatch('interceptorRequest')
        axios.patch(`${process.env.VUE_APP_URL_API}/products/${payload.id}`, payload.formData)
          .then(results => {
            console.log('hasil result', results)
            resolve(results)
          })
          .catch(error => {
            console.log(error.response)
          })
      })
    },
    addNewProduct (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_URL_API}/products`, payload.formData)
          .then(result => {
            Swal.fire({
              icon: 'success',
              title: 'Succeed',
              text: 'Your personal information has been updated',
              showConfirmButton: false,
              timer: 1500
            })
            resolve(result)
          })
      })
    },
    interceptorRequest (context) {
      axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
        return config
      }, function (error) {
        return Promise.reject(error)
      })
    },
    interceptorResponse (context) {
      axios.interceptors.response.use(function (response) {
        if (response.data.statusCode === 200) {
          if (response.data.result.message === 'User Has been created') {
            Swal.fire({
              icon: 'success',
              title: 'Success register',
              showConfirmButton: false,
              timer: 5000
            })
            router.push('/auth/login')
          } else if (response.data.result.message === 'Data Product has been updated') {
            Swal.fire({
              icon: 'success',
              title: 'Success update product',
              showConfirmButton: false,
              timer: 5000
            })
          }
        }
        return response
      }, function (error) {
        if (error.response.data.status === 401) {
          if (error.response.data.err.message === 'Invalid Token') {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            context.commit('REMOVE_TOKEN')
            Swal.fire({
              icon: 'error',
              title: 'Invalid Token',
              showConfirmButton: false,
              timer: 1500
            })
            router.push('/auth/login')
          } else if (error.response.data.err.message === 'Access Token expired') {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            context.commit('REMOVE_TOKEN')
            Swal.fire({
              icon: 'error',
              title: 'Access Token expired',
              showConfirmButton: false,
              timer: 1500
            })
            router.push('/auth/login')
          } else if (error.response.data.err.message === 'Password Wrong ') {
            Swal.fire({
              icon: 'error',
              title: 'ooopss... password wrong!',
              showConfirmButton: false,
              timer: 1500
            })
          } else if (error.response.data.err.message === 'Email has not been verified') {
            Swal.fire({
              icon: 'error',
              title: 'Email has not been verified',
              showConfirmButton: false,
              timer: 1500
            })
          } else if (error.response.data.err.message === 'Email or Password Wrong') {
            Swal.fire({
              icon: 'error',
              title: 'Email or Password incorrect',
              showConfirmButton: false,
              timer: 1500
            })
          }
        } else if (error.response.data.status === 409) {
          if (error.response.data.err.message === 'Forbidden: Email already exists. ') {
            Swal.fire({
              icon: 'error',
              title: 'Email already exists',
              showConfirmButton: false,
              timer: 1500
            })
          }
        } else if (error.response.data.status === 500) {
          Swal.fire({
            icon: 'error',
            title: 'Looks like server having trouble',
            showConfirmButton: false,
            timer: 1500
          })
        } else if (error.response.data.status === 400) {
          if (error.response.data.err.message === 'Id product cannot be empty') {
            Swal.fire({
              icon: 'error',
              title: 'Product not found',
              showConfirmButton: false,
              timer: 1500
            })
          }
        }
        return Promise.reject(error)
      })
    }
  },
  getters: {
    isLogin (state) {
      return state.accessToken !== null
    },
    getUserData (state) {
      return state.userData
    },
    getCardData (state) {
      return state.cartData
    },
    getProductId (state) {
      return state.products
    },
    getAll (state) {
      return state.searchProduct
    },
    getCartLocalStorage () {
      return JSON.parse(localStorage.getItem('cardData')) !== null
    },
    getPagination (state) {
      return state.pagination
    },
    getDataType (state) {
      return state.dataType
    },
    isAdmin (state) {
      return state.roleId === 1
    }
  },
  modules: {
  }
})
