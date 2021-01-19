<template>
    <header>
        <div class="container-fluid">
            <div class="d-flex justify-content-around box0">
                <div class="box">
                    <img class="img1" src="../../assets/coffee.png" alt="image1">
                    <p class="text">Coffee Shop</p>
                </div>
                <div class="box1">
                    <a class="home">Home</a>
                    <a class="product" @click="toProduct">Product</a>
                    <a class="cart" @click="toCart">Your Cart</a>
                    <a class="history" @click="toHistory">History</a>
                </div>
                <div class="box2">
                    <div class="box3">
                        <img class="img3" @click="toChat" src="../../assets/chat.png" alt="image3">
                        <img class="img4" src="../../assets/ellipse.png" alt="image4">
                        <p class="text1">1</p>
                    </div>
                    <div class="user-profile">
                      <img @click="toProfile" :src="this.getUserData.photoProfile" alt="image5">
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  methods: {
    toHome () {
      this.$router.push({ path: '/home' })
    },
    toProduct () {
      this.$router.push({ path: '/home/product-customer/favorite-product' })
    },
    toCart () {
      this.$router.push({ path: '/home/payment-delivery' })
    },
    toHistory () {
      this.$router.push({ path: '/home/history' })
    },
    toChat () {
      this.$router.push({ path: '/home/chat' })
    },
    toProfile () {
      this.$router.push({ path: '/profile/user-profile' })
    }
  },
  computed: {
    ...mapGetters(['getUserData']),
    foto () {
      return this.getUserData.photoProfile !== '' ? this.getUserData : '../../assets/user-avatar.png'
    }
  }
}
</script>

<style scoped>
body {
    margin: 0px;
    padding: 0px;
}

.container-fluid {
    width: 100%;

    background: #FFFFFF;
    border-bottom: 0.5px solid #9F9F9F;
    box-sizing: border-box;
}

.box0 {
    margin: 50px;
}

.box {
    display: flex;
}

.img1 {
    width: 30px;
    height: 33px;
}

.text {
    width: 122px;
    height: 24px;
    cursor:pointer;
    margin-left: 15px;
    margin-top: 5px;

    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;

    color: #0B132A;
}

.box1 a{
    width: 44px;
    height: 19px;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: #4F5665;
}

.home {
    margin-right: 41px;
    cursor: pointer;
}

.home:hover {
    text-decoration: none;
}

.home:focus {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;

    color: #6A4029;
}

.product {
    margin-right: 41px;
    cursor: pointer;

}

.product:hover {
    text-decoration: none;
}

.product:focus {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;

    color: #6A4029;
}

.cart {
    margin-right: 41px;
    cursor: pointer;
}

.cart:hover {
    text-decoration: none;
}

.cart:focus {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;

    color: #6A4029;
}
.history {
    cursor: pointer;
}
.history:hover {
    text-decoration: none;
}

.history:focus {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;

    color: #6A4029;
}

.box2 {
    display: flex;
    flex-direction: row;
}

.img2 {
    width: 30px;
    height: 30px;
    cursor:pointer;
    margin-right: 34px;
}

.box2 {
    position: relative;
}

.img3 {
    width: 30px;
    height: 33px;
    cursor:pointer;
    margin-right: 34px;
}

.img4 {
    position: absolute;
    top: -5px;
    right: 85px;
    cursor:pointer;
}

.text1 {
    position: absolute;
    top: -3px;
    right: 91px;
    width: 4px;
    height: 9px;

    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 8px;
    line-height: 9px;

    color: #FFFFFF;
    }

.img5 {
    width: 30px;
    height: 30px;
    cursor:pointer;
}
.user-profile {
    width: 40px;
    height: 40px;
    cursor:pointer;
}
.user-profile img{
    width: 100%;
    height: 100%;
    object-fit:cover;
    border-radius:50%;
}
</style>
