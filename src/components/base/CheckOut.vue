<template>
  <div>
    <stripe-elements
      ref="elementsRef"
      :pk="publishableKey"
      :amount="amount"
      locale="de"
      @token="tokenCreated"
      @loading="loading = $event"
    >
    </stripe-elements>
    <button type="button" @click="submit" class="btn btn-primary">Pay RP. {{ data.amount }}</button>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import router from '../../router/index.js'
import { StripeElements } from 'vue-stripe-checkout'
import { mapActions } from 'vuex'
export default {
  components: {
    StripeElements
  },
  props: ['data', 'dataCart'],
  data: () => ({
    loading: false,
    amount: 1000,
    publishableKey: `${process.env.VUE_APP_STRIPE_PUBLIC_KEY}`,
    token: null,
    charge: null
  }),
  methods: {
    submit () {
      this.$refs.elementsRef.submit()
    },
    tokenCreated (token) {
      this.token = token
      // for additional charge objects go to https://stripe.com/docs/api/charges/object
      if (!this.data.amount || !this.data.description || !this.data.sender || !this.data.paymentMethod) {
        return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Sorry field input required',
          showConfirmButton: false,
          timer: 1000
        })
      }
      this.charge = {
        source: token.id,
        amountToIDR: this.data.amountIDR,
        amount: this.data.amount, // the amount you want to charge the customer in cents. $100 is 1000 (it is strongly recommended you use a product id and quantity and get calculate this on the backend to avoid people manipulating the cost)
        description: this.data.description, // optional description that will show up on stripe when looking at payments
        sender: this.data.username,
        paymentMethod: this.data.paymentMethod
      }
      this.sendTokenToServer(this.charge)
    },
    ...mapActions(['addCart', 'addItemsOrder']),
    sendTokenToServer (charge) {
      const self = this
      return axios.post(`${process.env.VUE_APP_URL_API}/purchase`, charge)
        .then(function () {
          console.log(localStorage.getItem('cardData'))
          console.log('self.dataCart', self.dataCart)
          const idCart = self.$uuid.v4()
          const dataCart = {
            ...self.dataCart,
            id: idCart
          }
          self.addCart(dataCart)
            .then(() => {
              console.log('res addcart')
              const dataOrder = {
                cartId: idCart,
                item: JSON.parse(localStorage.getItem('cardData'))
              }
              self.addItemsOrder(dataOrder)
                .then(() => {
                  localStorage.removeItem('cardData')
                  localStorage.removeItem('deliveryMethod')
                  Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'payment successful ',
                    showConfirmButton: false,
                    timer: 3000
                  })
                })
                .catch(() => {

                })
            })
            .catch(() => {

            })
          router.push({ path: '/home/product-customer/coffee' })
        }).catch(function (error) {
          console.log(error)
          return Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'payment failed ',
            showConfirmButton: false,
            timer: 3000
          })
        })
      // Send to charge to your backend server to be processed
      // Documentation here: https://stripe.com/docs/api/charges/create
    }
  },
  handleaddItemsOrder () {
    console.log('halo')
    const itemsOrder = JSON.parse(localStorage.getItem('cardData'))
    console.log(itemsOrder)
    var output = itemsOrder.map(function (obj) {
      return Object.keys(obj).sort().map(function (key) {
        return obj[key]
      })
    })
    console.log('dibawah ini output')
    console.log(output)
    this.addItemsOrder(output)
  }
}
</script>
