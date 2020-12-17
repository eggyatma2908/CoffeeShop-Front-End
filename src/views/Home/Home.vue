<template>
  <div>
    <Header />
    <ProductAdmin />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/module/Header.vue'
import Footer from '@/components/module/Footer.vue'
import ProductAdmin from '@/components/module/ProductAdmin.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    ProductAdmin
  }
}
</script>
