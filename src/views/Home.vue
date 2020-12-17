<template>
  <div>
    <Header />
        <Productcustomer />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/module/Header.vue'
import Footer from '@/components/module/Footer.vue'
import Productcustomer from '@/components/module/Productcustomer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Productcustomer
  }
}
</script>
