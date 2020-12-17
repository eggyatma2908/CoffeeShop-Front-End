<template>
  <div>
    <Header />
    <EditProductAdmin />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/module/Header.vue'
import Footer from '@/components/module/Footer.vue'
import EditProductAdmin from '@/components/module/EditProductAdmin.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    EditProductAdmin
  }
}
</script>
