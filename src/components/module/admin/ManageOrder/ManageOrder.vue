<template>
  <main>
    <p class="title-text">Checkout your <br />item now!</p>
    <div class="row">
      <div class="card-order p-5 col-5 p-0">
          <p class="card-order-title">Order Summary</p>
          <div class="card-order-list mt-5">
            <div class="order-list row mt-3">
              <div class="card-order-photo col-3">
                <img/>
              </div>
              <div class="order-details col-6">
                <p>qwe</p>
                <p>xqwe</p>
                <p>qwe</p>
              </div>
              <div class="order-price col-3">
                <p>
                 qwe
                </p>
              </div>
            </div>
          </div>
          <div class="checkout-price row mt-4">
            <div class="col-6">
              <p class="bold-500">SUB TOTAL </p>
            </div>
            <div class="col-6">
              <p class="price-amount">IDRqwe</p>
            </div>
            <div class="col-6">
              <p class="bold-500">TAX & FEES</p>
            </div>
            <div class="col-6">
            <p class="price-amount">IDR qwe</p>
            </div>
            <div class="col-6">
              <p class="bold-500">SHIPPING</p>
            </div>
            <div class="col-6">
              <p class="price-amount">IDR qwe</p>
            </div>
            <div class="col-6">
              <p class="total">TOTAL </p>
            </div>
            <div class="col-6">
              <p class="total">IDR qwe</p>
            </div>
          </div>
      </div>
      <div class="col-5 offset-2 p-0">
        <div class="address-details">
          <div class="address-title d-flex justify-content-between">
            <p class="title">Address details</p>
            <p class="action-edit m-2">edit</p>
          </div>
          <div class="card-address-details m-0 bold-500">
            <p class="delivery-name"><span class="bold-700">Delivery</span> <span class="bold-500">to qweqwe</span></p>
            <p class="delivery-to">qwe</p>
            <p class="delivery-number">qwe</p>
          </div>
        </div>
        <div class="payment-method mt-5">
          <div class="payment-title d-flex justify-content-between">
            <p class="title">Payment method</p>
          </div>
          <div class="card-payment-details m-0 bold-500">
            <div class="payment-option pb-3">
            <input type="radio" value="Card" name="checkout-option">
            <div class="icon-radio-mail position-icon d-inline-block">
              <img src="../../../../assets/mail.png" alt="">
            </div>
            <p class="d-inline-block ml-3">Card</p>
            </div>
            <div class="payment-option pb-3">
            <input type="radio" value="Bank Account" name="checkout-option">
            <div class="icon-radio-bank position-icon d-inline-block">
              <img src="../../../../assets/Vector (1).png" alt="">
            </div>
            <p class="d-inline-block ml-3">Bank Account</p>
            </div>
            <div class="payment-option pb-3">
            <input type="radio"  value="COD" name="checkout-option">
            <div class="icon-radio-deliver position-icon d-inline-block">
              <img src="../../../../assets/fast-delivery 3.png" alt="">
            </div>
            <p class="d-inline-block ml-3">Cash on delivery</p>
            </div>
          </div>
        </div>
    <!-- Button trigger modal -->
      <button class="btn-confirm mt-5" data-toggle="modal" data-target="#exampleModalCenter">Confirm and Pay</button>
      </div>
    </div>
<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Pay Now</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      </div>
    </div>
  </div>
</div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import Swal from 'sweetalert2'
export default {
  name: 'PaymentDelivery',
  data () {
    return {
      listOrder: '',
      subTotal: 0,
      taxAndFees: 2000,
      shipping: 12000,
      totalAmountInvoice: 0,
      convertToFormatIDR: 0,
      userData: null,
      paymentMethod: null
    }
  },
  methods: {
    totalAmount () {
      const subTotal = this.getListOrder.reduce((total, value) => {
        let totalLarge = 0
        let totalRegular = 0
        let totalXtraLarge = 0
        if (value.large > 0) {
          for (let i = 1; i <= value.large; i++) {
            // eslint-disable-next-line no-unused-expressions
            totalLarge += value.basePrice + (value.basePrice * 10 / 100)
          }
        }
        if (value.regular > 0) {
          for (let i = 1; i <= value.regular; i++) {
            // eslint-disable-next-line no-unused-expressions
            totalRegular += value.basePrice
          }
        }
        if (value.xtralarge > 0) {
          for (let i = 1; i <= value.xtralarge; i++) {
            // eslint-disable-next-line no-unused-expressions
            totalXtraLarge += value.basePrice + (value.basePrice * 20 / 100)
          }
        }
        return total + totalLarge + totalRegular + totalXtraLarge
      }, 0)
      this.subTotal = subTotal
    },
    getTotalPerItem (productName) {
      const getItem = JSON.parse(localStorage.getItem('cardData'))
      const filter = getItem.filter((el) => el.productName === productName)
      const totalItem = filter.reduce((total, value) => {
        let totalLarge = 0
        let totalRegular = 0
        let totalXtraLarge = 0
        if (value.large > 0) {
          for (let i = 1; i <= value.large; i++) {
            // eslint-disable-next-line no-unused-expressions
            totalLarge += value.basePrice + (value.basePrice * 10 / 100)
          }
        }
        if (value.regular > 0) {
          for (let i = 1; i <= value.regular; i++) {
            // eslint-disable-next-line no-unused-expressions
            totalRegular += value.basePrice
          }
        }
        if (value.xtralarge > 0) {
          for (let i = 1; i <= value.xtralarge; i++) {
            // eslint-disable-next-line no-unused-expressions
            totalXtraLarge += value.basePrice + (value.basePrice * 20 / 100)
          }
        }
        return total + totalLarge + totalRegular + totalXtraLarge
      }, 0)
      return totalItem
    },
    getTotalAmountInvoice () {
      const totalAmount = this.taxAndFees + this.shipping + this.subTotal
      this.totalAmountInvoice = totalAmount
    },
    ...mapActions(['getDataUserById']),
    async getDataUser (idUser) {
      await this.getDataUserById(idUser)
        .then(result => {
          this.userData = result
        })
    },
    convertToRupiah (angka) {
      var rupiah = ''
      var angkarev = angka.toString().split('').reverse().join('')
      for (var i = 0; i < angkarev.length; i++) if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.'
      this.convertToFormatIDR = rupiah.split('', rupiah.length - 1).reverse().join('')
    }
  },
  computed: {
    getListOrder () {
      return JSON.parse(localStorage.getItem('cardData'))
    },
    ...mapGetters(['getUserData']),
    dataPayment () {
      return {
        amount: this.totalAmountInvoice,
        amountIDR: this.convertToFormatIDR,
        description: JSON.parse(localStorage.getItem('cardData')),
        sender: this.getUserData.username,
        paymentMethod: this.paymentMethod
      }
    },
    dataCart () {
      return {
        userId: this.getUserData.id,
        payTotal: this.totalAmountInvoice,
        paymentMethod: this.paymentMethod,
        deliveryMethod: localStorage.getItem('deliveryMethod'),
        status: 'success'
      }
    }
  },
  mounted () {
    this.getDataUser(this.getUserData.id)
    if (this.getListOrder) {
      this.totalAmount()
      this.getTotalAmountInvoice()
      this.convertToRupiah(this.totalAmountInvoice)
    }
    console.log('dibawah data cart')
    console.log(this.dataCart)
    console.log(this.getListOrder)
  }
}
</script>

<style scoped>
main {
  padding: 80px;
  height: max-content;
  background: url("../../../../assets/nathan-dumlao-zTZRZV86GhE-unsplash 1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
}
.title-text {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 47px;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
}
.card-order {
  height: 737px;
  background-color:#ffffff;
  border-radius:20px;
}
.card-order-photo {
  width:80px;
}
.card-order-photo img{
  width:100%;
  height:100%;
  object-fit: cover;
  border-radius: 50%;
}
.card-order-title {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 52px;
  /* identical to box height */

  color: #362115;
  text-align: center;
}
.order-details > * {
  margin:5px 0 0 0;
  font-family: Poppins;
}
.order-price {
  margin:auto 0;
}
.checkout-price{
  border-top:1px solid #000000;
  padding-top:20px;
}
.checkout-price > * {
  margin: 0;
  font-weight:500;
}
.price-amount {
  text-align:right;
}
.card-address-details {
  background-color:#ffffff;
  height:max-content;
  border-radius: 20px;
  padding:30px 30px 10px 30px;
  /* overflow:auto; */
}
.card-address-details > * {
  font-family: Poppins;
  font-size:18px;
}
.bold-700 {
  font-weight:700;
}
.bold-500 {
  font-weight:500;
}
.address-title .title {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 37px;

  color: #FFFFFF;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
}
.payment-title .title {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 37px;

  color: #FFFFFF;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
}
.address-title .action-edit {
  font-family: Poppins;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  cursor: pointer;
  color: #FFFFFF;
}
.delivery-name {
  padding-bottom:10px;
  border-bottom: 0.5px solid rgba(0,0,0,0.2);
}
.delivery-to {
  overflow:hidden;
  padding-bottom:10px;
  border-bottom: 0.5px solid rgba(0,0,0,0.2);
}

.card-payment-details {
  background-color:#ffffff;
  height:max-content;
  border-radius: 20px;
  padding:30px 30px 10px 30px;
  font-family: Poppins;
  font-size:20px;
}
.icon-radio-mail {
  width:40px;
  height:40px;
  background-color:#F47B0A;
  border-radius: 10px;
  margin:0 0 0 10px;
}
.icon-radio-bank {
  width:40px;
  height:40px;
  background-color:#895537;
  border-radius: 10px;
  margin:0 0 0 10px;
}
.icon-radio-deliver {
  width:40px;
  height:40px;
  background-color:#FFBA33;
  border-radius: 10px;
  margin:0 0 0 10px;
}
.position-icon img {
  padding:12px
}
.total {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 45px;
  /* identical to box height */
  color: #362115;
}
.btn-confirm {
  width:100%;
  height:84px;
  background-color:#6A4029;
  color:white;
  font-family: Poppins;
  font-weight: 700;
  border:none;
  border-radius: 20px;
  font-size: 20px;
  outline:none;
}
</style>
