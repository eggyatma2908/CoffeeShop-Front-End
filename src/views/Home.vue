<template>
  <div>
    <Header />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/module/Header.vue'
import Footer from '@/components/module/Footer.vue'
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  components: {
    Header,
    Footer
  },
  methods: {
    ...mapActions(['interceptorRequest'])
  },
  created () {
    this.interceptorRequest()
  }
}
</script>
