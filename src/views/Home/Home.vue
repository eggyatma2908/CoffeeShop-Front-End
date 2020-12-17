<template>
  <div>
    <Header />
    <ProductCustomerAdmin />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/module/Header.vue'
import Footer from '@/components/module/Footer.vue'
import ProductCustomerAdmin from '@/components/module/ProductCustomerAdmin.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    ProductCustomerAdmin
  }
}
</script>
