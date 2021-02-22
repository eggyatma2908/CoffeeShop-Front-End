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
                    <a class="product" @click="toProduct" v-if="!isAdmin">Product</a>
                    <a class="product" @click="toProductAdmin" v-if="isAdmin">Product</a>
                    <a class="cart" @click="toCart" v-if="!isAdmin">Your Cart</a>
                    <a class="history" @click="toHistory" v-if="!isAdmin">History</a>
                    <a class="history" @click="toManageOrder" v-if="isAdmin">Manage Order</a>
                </div>
                <div class="box2">
                    <div class="box-search">
                        <input class="search" type="text" placeholder="Search...">
                    </div>
                    <div class="box-chat">
                        <img class="chat" @click="toChat" src="../../assets/chat.png" alt="image3">
                    </div>
                    <div class="user-profile">
                      <img @click="toProfile" :src="getUserData.photoProfile" alt="image5" v-if="getUserData.photoProfile">
                      <img @click="toProfile" src="../../assets/user-avatar.png" alt="image5" v-else>
                    </div>
                    <Slide right noOverlay  id="bm-burger-button">
                        <a id="home" class="home" @click="toHome"><span>Home</span></a>
                        <a id="profile" class="profile" @click="toProfile"><span>Profile</span></a>
                        <a id="product" class="product" @click="toProduct"><span>Product</span></a>
                        <a id="cart" class="cart" @click="toCart" v-if="!isAdmin"><span>Your Cart</span></a>
                        <a id="history" class="history" @click="toHistory" v-if="!isAdmin"><span>History</span></a>
                        <a id="message" class="message" @click="toChat"><span>Message</span></a>
                    </Slide>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Slide } from 'vue-burger-menu'

export default {
  name: 'Header',
  components: {
    Slide
  },
  methods: {
    ...mapActions(['getDataUserById']),
    async userLogin () {
      const id = await this.getUserData.id
      this.getDataUserById(id)
    },
    toHome () {
      this.$router.push({ path: '/home' })
    },
    toProduct () {
      this.$router.push({ path: '/home/product-customer/coffee' })
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
    },
    toProductAdmin () {
      this.$router.push({ path: '/home/product-admin' })
    },
    toManageOrder () {
      this.$router.push({ path: '/home/manage-order' })
    }
  },
  async mounted () {
    await this.userLogin()
  },
  computed: {
    ...mapGetters(['getUserData', 'isAdmin'])
  }
}
</script>

<style scoped>
body {
    margin: 0px;
    padding: 0px;
}

.container-fluid {
    background: #FFFFFF;
    border-bottom: 0.5px solid #9F9F9F;
    box-sizing: border-box;
}

.box0 {
    margin: 30px 0;
    display: flex;
    align-items: center;
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
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: #4F5665;
}

.home, .product, .cart {
    margin-right: 41px;
    cursor: pointer;
}

.home:hover, .product:hover, .cart:hover, .history:hover {
    text-decoration: none;
}

.home:focus, .product:focus, .cart:focus, .history:focus {
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

.box2 {
    width: 300px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.box-search {
    width: 150px;
    transform:rotateZ(180deg);
}

.search {
    width: 0;
    box-sizing: border-box;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    background-image: url('../../assets/search.png');
    background-position: right;
    background-size: 25px;
    background-repeat: no-repeat;
    padding: 0px 20px 0px 5px;
    -webkit-transition: all .55s ease;
    -moz-transition: all .55s ease;
    -ms-transition: all .55s ease;
    -o-transition: all .55s ease;
    transition: all .55s ease;
    transform:rotateZ(180deg);
}

input[type=text]:focus {
    width: 100%;
    background-color: #f1f1f1;
    background-position-x: 200px;
    padding: 10px;
    outline: none;
}

.img2 {
    width: 30px;
    height: 30px;
    cursor:pointer;
    margin-right: 34px;
}

.chat {
    width: 30px;
    height: 33px;
    cursor:pointer;
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

#bm-burger-button {
    display: none;
}

@media (max-width: 1024px) {
    .box1 {
        display: none;
    }
    .box2 {
        margin-right: 80px;
    }
    .box-search {
        width: 120px;
    }
    #bm-burger-button {
        display: flex;
        position: absolute;
        top: -30px;
        right: -110px;
    }
    #message {
        display: none;
    }
    #profile {
        display: none;
    }
}

@media (max-width: 515px) {
    .box-search {
        display: none;
    }
    .box-chat {
        display: none;
    }
    .user-profile {
        display: none;
    }
    #bm-burger-button {
        display: flex;
        position: absolute;
        top: -55px;
        right: -110px;
    }
    #message {
        display: flex;
    }
    #profile {
        display: flex;
    }
}
</style>
