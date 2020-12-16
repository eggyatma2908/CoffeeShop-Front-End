<template>
  <div class="home">
    <Productdetails />
  </div>
</template>

<script>
// @ is an alias to /src
import Productdetails from '@/components/module/Productdetails.vue'

export default {
  name: 'Home',
  components: {
    Productdetails
  }
}
</script>
