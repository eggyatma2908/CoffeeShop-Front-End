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
    <button @click="submit">Pay ${{amount / 100}}</button>
  </div>
</template>

<script>
import axios from 'axios'
import { StripeElements } from 'vue-stripe-checkout'
export default {
  components: {
    StripeElements
  },
  props: ['data'],
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
      this.charge = {
        source: token.id,
        amountToIDR: this.data.amountIDR,
        amount: this.data.amount, // the amount you want to charge the customer in cents. $100 is 1000 (it is strongly recommended you use a product id and quantity and get calculate this on the backend to avoid people manipulating the cost)
        description: this.data.description // optional description that will show up on stripe when looking at payments
      }
      this.sendTokenToServer(this.charge)
    },
    sendTokenToServer (charge) {
      console.log(charge)
      return axios.post(`${process.env.VUE_APP_URL_API}/purchase`, charge)
        .then(function (data) {
          alert(data.message)
          console.log(data)
        }).catch(function (error) {
          console.error(error)
        })
      // Send to charge to your backend server to be processed
      // Documentation here: https://stripe.com/docs/api/charges/create
    }
  }
}
</script>
