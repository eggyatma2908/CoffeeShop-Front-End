<template>
  <div>
    <Header />
    <PaymentDelivery />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/module/Header.vue'
import Footer from '@/components/module/Footer.vue'
import PaymentDelivery from '../../components/module/PaymentDelivery.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    PaymentDelivery
  }
}
</script>
