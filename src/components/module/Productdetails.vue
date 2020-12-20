<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-5">
                <div class="box">
                    <div class="box1">
                        <p class="text" @click="backToType">{{ this.$route.query.type }} ></p>
                        <p class="text1" @click="backToType">{{ productDetails.productName }}</p>
                    </div>
                    <img class="img" :src="productDetails.photoProduct" alt="image1">
                    <p class="text2">{{ productDetails.productName }}</p>
                    <p class="text3">IDR {{ productDetails.price }}</p>
                    <button class="addcart" type="submit" @click="addCardData">Add to Cart</button>
                    <button class="askstaff" type="submit">Ask a Staff</button>
                </div>
            </div>
            <div class="col-lg-7">
                <div class="box2">
                    <p class="text4">Delivery only on <b>Monday to friday</b> at  <b>{{ productDetails.deliveryHourStart }} - {{ productDetails.deliveryHourEnd }} pm</b></p>
                    <p class="text5">{{ productDetails.description }}</p>
                    <p class="text6">Choose a size</p>
                    <div class="box3">
                        <input class="size" id="btn-choose-size-r" value="R" v-model="inputChooseSize" type="radio" name="size">
												<label for="btn-choose-size-r">R</label>
                        <input class="size" id="btn-choose-size-l" value="L" v-model="inputChooseSize" type="radio" name="size">
												<label for="btn-choose-size-l">L</label>
                        <input class="size" id="btn-choose-size-xl" value="XL" v-model="inputChooseSize" type="radio" name="size">
												<label for="btn-choose-size-xl">XL</label>
                    </div>
                </div>
                <div class="box4">
                    <p class="text7">Choose Delivery Methods</p>
                    <div class="box5">
                        <input type="radio" v-model="chooseDelivery" value="dinein" id="dine-in-option" name="delivery">
                        <label for="dine-in-option" class="dinein">Dine In</label>
                        <input type="radio" v-model="chooseDelivery" value="doordelivery" id="door-delivery-option" name="delivery">
                        <label for="door-delivery-option" class="doordelivery">Door Delivery</label>
                        <input type="radio" v-model="chooseDelivery" value="pickup" id="pick-up-delivery-option" name="delivery">
                        <label for="pick-up-delivery-option" class="pickup">Pick Up</label>
                    </div>
                    <div class="box6">
                        <label class="settime" for="settime">Set time :</label>
                        <input type="time" v-model="timeDeliverd" class="input1" min="09:00" max="18:00" required>
                    </div>
                </div>
                <div class="box7">
                    <div class="box8">
                        <div class="box9">
                            <img class="img1" src="../../assets/coffee2.png" alt="image2">
                            <div class="box10">
                                <p class="text8">{{ productDetails.productName }}</p>
                                <p class="text10" v-if="listOrder.regular > 0">x{{ listOrder.regular }} (Regular)</p>
                                <p class="text9" v-if="listOrder.large > 0">x{{ listOrder.large }} (Large)</p>
                                <p class="text10" v-if="listOrder.xtralarge > 0">x{{ listOrder.xtralarge }} (XtraLarge)</p>
                                <!-- <ul v-for="order in listOrder" :key="order.id">
                                    <li>x{{ order.amount }} ({{ order.size }}) </li>
                                </ul> -->
                            </div>
                            <button class="minus" type="submit" @click="decreaseTotalOrder">-</button>
                            <p class="text11">{{ totalOrder }}</p>
                            <button class="plus" type="submit" @click="increaseTotalOrder">+</button>
                        </div>
                    </div>
                    <button class="checkout" @click="toCheckOut">CHECKOUT</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'ProductDetails',
  data () {
    return {
      productDetails: '',
      inputChooseSize: '',
      chooseDelivery: '',
      totalOrder: 0,
      timeDeliverd: '',
      listOrder: {
        idProduct: '',
        productName: '',
        regular: 0,
        large: 0,
        xtralarge: 0,
        basePrice: 0
      }
    }
  },
  methods: {
    ...mapActions(['getProductDetailsById']),
    async handleGetProductDetailsById () {
      console.log(this.$route.params.idProduct)
      const payload = {
        id: this.$route.params.idProduct
      }
      const resultsProductDetails = await this.getProductDetailsById(payload)
      this.productDetails = resultsProductDetails
    },
    backToType () {
      this.$router.go(-1)
    },
    checkChooseSizeButton () {
      console.log(document.getElementById('btn-choose-size-r'))
    },
    increaseTotalOrder () {
      if (!this.inputChooseSize || !this.chooseDelivery || !this.timeDeliverd) {
        return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Sorry field input required',
          showConfirmButton: false,
          timer: 1000
        })
      }
      if (this.inputChooseSize === 'L') {
        this.increaseLarge.large++
      }
      if (this.inputChooseSize === 'R') {
        this.increaseLarge.regular++
      }
      if (this.inputChooseSize === 'XL') {
        this.increaseLarge.xtralarge++
      }
      this.totalOrder++
    },
    decreaseTotalOrder () {
      if (this.totalOrder > 0) {
        if (this.inputChooseSize === 'L') {
          this.increaseLarge.large--
        }
        if (this.inputChooseSize === 'R') {
          this.increaseLarge.regular--
        }
        if (this.inputChooseSize === 'XL') {
          this.increaseLarge.xtralarge--
        }
        this.totalOrder--
      }
    },
    ...mapMutations(['SET_CARD_DATA', 'REMOVE_CART_DATA']),
    addCardData () {
      if (!this.inputChooseSize || !this.chooseDelivery || !this.timeDeliverd) {
        return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Sorry field input required',
          showConfirmButton: false,
          timer: 1000
        })
      }
      this.listOrder.productName = this.productDetails.productName
      this.listOrder.basePrice = this.productDetails.price
      this.listOrder.idProduct = this.$route.params.idProduct
      this.listOrder.photoProduct = this.productDetails.photoProduct
      const cardData = JSON.parse(localStorage.getItem('cardData'))
      if (cardData) {
        if (cardData.length > 0) {
          if (cardData.find((value) => value.productName === this.productDetails.productName)) {
            console.log(cardData)
            const cardDataCopy = cardData.map(item => {
              console.log(item)
              if (item.productName === this.productDetails.productName) {
                const newItem = Object.assign({}, item)
                newItem.regular += this.increaseLarge.regular
                newItem.large += this.increaseLarge.large
                newItem.xtralarge += this.increaseLarge.xtralarge
                return newItem
              }
              return item
            })
            localStorage.setItem('cardData', JSON.stringify(cardDataCopy))
            this.alertAddCartSucceed()
            return
          }
          const payload2 = [
            ...cardData,
            this.listOrder
          ]
          localStorage.setItem('cardData', JSON.stringify(payload2))
          this.alertAddCartSucceed()
        }
      } else {
        const payload = [this.listOrder]
        localStorage.setItem('cardData', JSON.stringify(payload))
        this.alertAddCartSucceed()
      }
    },
    toCheckOut () {
      this.$router.push({ path: '/home/payment-delivery' })
    },
    alertAddCartSucceed () {
      Swal.fire({
        icon: 'success',
        title: 'product has been added to the cart',
        showConfirmButton: false,
        timer: 1000
      })
    }
  },
  async mounted () {
    await this.handleGetProductDetailsById()
    this.checkChooseSizeButton()
  },
  computed: {
    increaseLarge () {
      return this.listOrder
    }
  }
}
</script>

<style scoped>
.row {
    background: #EDEDED;
}

.box {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.box1 {
    display: flex;

    margin-left: -120px;
    margin-top: 50px;
    margin-bottom: 60px;
}
.text {
    text-transform:capitalize;
		cursor:pointer;
}
.text1 {
    margin-left: 5px;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    text-transform:capitalize;
    color: #6A4029;
		cursor:pointer;
}

/* .img {
    width: 300px;
    border-radius: 200px;
} */

.img {
    width: 300px;
    height: 300px;
    object-fit: contain;
    border-radius: 50%;
}

.text2 {
    width: max-content;
    height: max-content;

    margin-top: 30px;
    margin-bottom: 0px;

    font-family: Poppins;
    font-style: normal;
    font-weight: 900;
    font-size: 60px;
		text-transform: capitalize;
    color: #000000;
}

.text3 {
    width: max-content;
    height: max-content;

    font-family: Poppins;
    font-style: normal;
    font-size: 40px;

    color: #000000;
}

.addcart {
    width: 388px;
    height: 85px;

    margin-top: 30px;
    margin-bottom: 25px;

    background: #6A4029;
    border: none;
    border-radius: 20px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;

    color: #FFFFFF;
}

.addcart:focus {
    outline: none;
}

.askstaff {
    width: 388px;
    height: 85px;

    margin-bottom: 25px;

    background: #FFBA33;
    border: none;
    border-radius: 20px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;

    color: #6A4029;
}

.askstaff:focus {
    outline: none;
}

.box2 {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 71px;

    width: 639px;
    height: 702px;

    background: #FFFFFF;
    border-radius: 30px;
}

.text4 {
    width: 410px;

    margin-left: -60px;
    margin-top: 81px;
    margin-bottom: 43px;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;

    color: #6A4029;
}

.text5 {
    width: 471px;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;

    color: #6A4029;
}

.text6 {
    margin-top: 40px;
    margin-bottom: 30px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;

    color: #000000;
}

.box3 {
    display: flex;
    justify-content: space-around;
    width: 60%;
}
.box3 input[type="radio"] {
  opacity: 0;
  position: fixed;
  width: 0;
}
.box3 label {
    width: 70px;
		height:70px;
    background: #FFBA33;
    border: none;
    border-radius: 50%;
		text-align:center;
		padding:10px;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;

    color: #000000;
}
.box3 label:hover {
  background-color: rgba(231, 170, 54, 0.52);
}

.box3 input[type="radio"]:focus + label {
    border: 2px dashed #444;
}

.box3 input[type="radio"]:checked + label {
    background-color: rgba(231, 170, 54, 0.52);
    border: 3px solid #6A4029;
		color:#6A4029;
}
.size {
    width: 70px;
    height: 70px;

    background: #FFBA33;
    border: none;
    border-radius: 40px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;

    color: #000000;
}

.size:focus {
    outline: none;
}

.size1 {
    width: 70px;
    height: 70px;

    background: #FFBA33;
    border: none;
    border-radius: 40px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;

    color: #000000;
}

.size1:focus {
    outline: none;
}

.size2 {
    width: 70px;
    height: 70px;

    background: #FFBA33;
    border: none;
    border-radius: 40px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;

    color: #000000;
}

.size2:focus {
    outline: none;
}

.box4 {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-left: -300px;
    margin-top: 45px;
}
.box5 input[type="radio"]{
     opacity: 0;
  position: fixed;
  width: 0;
}
.box5 label:hover {
    background-color: rgba(231, 170, 54, 0.52);
    border: 3px solid #6A4029;
    color:#6A4029;
}

.box5 input[type="radio"]:focus + label {
    border: 2px dashed #444;
}

.box5 input[type="radio"]:checked + label {
    background: #6A4029;
    border: 3px solid #6A4029;
    color:white;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
}
.text7 {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;

    color: #000000;
}

.box5 {
    display: flex;
    justify-content: space-around;

    width: 500px;

    margin-bottom: 30px;
}

.dinein {
    width: 145px;
    height: 49px;

    background: #F4F4F8;
    border: 1px solid rgba(186, 186, 186, 0.35);
    box-sizing: border-box;
    border-radius: 10px;
    padding:10px;
    text-align:center;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;

    color: #9F9F9F;
}

.dinein:hover {
    background: #6A4029;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;

    color: #FFFFFF;
}

.dinein:focus {
    outline: none;
    background: #6A4029;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;

    color: #FFFFFF;
}

.doordelivery {
    width: 145px;
    height: 49px;

    background: #F4F4F8;
    border: 1px solid rgba(186, 186, 186, 0.35);
    box-sizing: border-box;
    border-radius: 10px;
    padding:10px;
    text-align:center;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;

    color: #9F9F9F;
}

.doordelivery:hover {
    background: #6A4029;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;

    color: #FFFFFF;
}

.doordelivery:focus {
    outline: none;
    background: #6A4029;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;

    color: #FFFFFF;
}

.pickup {
    width: 145px;
    height: 49px;

    background: #F4F4F8;
    border: 1px solid rgba(186, 186, 186, 0.35);
    box-sizing: border-box;
    border-radius: 10px;
    padding:10px;
    text-align:center;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;

    color: #9F9F9F;
}

.pickup:hover {
    background: #6A4029;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;

    color: #FFFFFF;
}

.pickup:focus {
    outline: none;
    background: #6A4029;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;

    color: #FFFFFF;
}

.box6 {
    display: flex;
    flex-direction: row;
    width: 480px;

    margin-bottom: 121px;
}

.settime {
    margin-bottom: 0px;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;

    color: #000000;
}

.input1 {
    outline: none;

    margin-left: 25px;
    border-width: 0 0 2px;

    width: 75%;

    background: none;
}

.box8 {
    position: absolute;
    width: 732px;
    height: 168px;
    bottom: -80px;
    left: -400px;

    background: #FFFFFF;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.34);
    border-radius: 20px;
}

.box9 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 30px;

}
.img1 {
    width: 100px;

    border-radius: 50px;
}

.box10 {
    width: 150px;
    height: 106px;

    margin-left: -20px;
}

.text8 {
    margin-bottom: 0px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;

    color: #000000;
}

.text9 {
    margin-bottom: 0px;

    font-family: Poppins;
    font-style: normal;
    font-size: 20px;

    color: #000000;
}

.text10 {
    margin-bottom: 0px;

    font-family: Poppins;
    font-style: normal;
    font-size: 20px;

    color: #000000;
}

.minus {
    width: 40px;
    height: 40px;

    padding-top: 1px;
    padding-right: 5px;

    background: rgba(231, 170, 54, 0.52);
    border: none;
    border-radius: 20px;

    font-family: Poppins;
    font-style: normal;
    font-weight: 900;
    font-size: 25px;

    text-align: center;

    color: #6A4029;
}

.minus:focus {
    outline: none;
}

.text11 {
    margin-bottom: 0px;

    font-family: Poppins;
    font-style: normal;
    font-weight: 900;
    font-size: 25px;

    color: #000000;
}

.plus {
    width: 40px;
    height: 40px;

    background: rgba(231, 170, 54, 0.52);
    border: none;
    border-radius: 20px;

    font-family: Poppins;
    font-style: normal;
    font-weight: 900;
    font-size: 25px;

    text-align: center;

    color: #6A4029;
}

.plus:focus {
    outline: none;
}

.checkout {
    position: absolute;
    bottom: -80px;
    right: 140px;

    width: 253px;
    height: 168px;

    background: #FFBA33;
    box-shadow: 0px 4px 4px rgba(255, 186, 51, 0.59), 0px 6px 20px rgba(11, 19, 42, 0.24);
    border: none;
    border-radius: 20px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;

    color: #000000;
}

.checkout:focus {
    outline: none;
}

</style>
