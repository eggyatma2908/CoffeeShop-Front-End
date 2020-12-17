<template>
    <div>
        <Header/>
        <main>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="navigation-route">
                            <p class="favorite-promo">Favorite & Promo ></p>
                            <p class="add-new-product">Add new product</p>
                        </div>
                    </div>
                    <div class="col-lg-6">

                    </div>
                </div>
            </div>
        </main>
        <Footer/>
    </div>
</template>

<script>
import Header from '../module/Header'
import Footer from '../module/Footer'
export default {
  name: 'NewProduct',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
.navigation-route {
    display: flex;
}

.navigation-route .favorite-promo{
    font-size: 20px;
    line-height: 24px;
    color: #4F5665;
}
</style>
