<template>
  <div class="box4">
      <div v-for="addOn in dataAddOn" :key="addOn.idProduct" @click="toProductDetails(addOn.idProduct)" class="card">
          <div class="photo-product">
             <img :src="addOn.photoProduct !== '' ? addOn.photoProduct : '@/assets/coffee-logo-symbol-19.png'" alt="image2">
          </div>
          <p class="productname">{{ addOn.productName }}</p>
          <p class="price">{{ addOn.price }}</p>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AddOn',
  data () {
    return {
      dataAddOn: ''
    }
  },
  methods: {
    ...mapActions(['getProductAddOn']),
    async handleGetGetProductAddOn () {
      const result = await this.getProductAddOn()
      this.dataAddOn = result.products
    },
    toProductDetails (idProduct) {
      this.$router.push({ path: '/home/product-details/' + idProduct })
    }
  },
  async mounted () {
    await this.handleGetGetProductAddOn()
  }
}
</script>

<style scoped>
.text {
    width: 174px;
    height: 30px;

    margin-top: 29px;

    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;

    color: #6A4029;
}

.text1 {
    width: 235px;
    height: 36px;

    margin-top: 46px;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    text-align: center;

    color: #000000;
}
.img {
    position: absolute;
    top: -420px;
    left: 40px;
}

.text2 {
    position: absolute;
    width: 180px;
    height: 32px;
    left: 60px;
    top: -270px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 101.34%;

    color: #000000;
}

.text3 {
    position: absolute;
    width: 180px;
    height: 32px;
    left: 95px;
    top: -240px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 101.34%;

    color: #000000;
}

.text4 {
    position: absolute;
    width: 247px;
    height: 28px;
    left: 20px;
    top: -210px;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 101.34%;

    text-align: center;

    color: #000000;
}

.borderdashed {
    position: absolute;
    width: 284.02px;
    height: 0px;
    top: -150px;

    border: 1px dashed #000000;
}

.text5 {
    position: absolute;
    left: 80px;
    top: -120px;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 101.34%;

    color: #000000;
}

.text6 {
    position: absolute;
    width: 166px;
    height: 33px;
    left: 55px;
    top: -90px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 33px;
    line-height: 101.34%;

    color: #000000;
}

.text7 {
    position: absolute;
    width: 173px;
    height: 12px;
    left: 45px;
    top: -40px;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 101.34%;

    text-align: center;

}

.applycoupon {
    width: 284px;
    height: 64px;

    margin-top: 45px;
    margin-bottom: 112px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 25px;

    color: #FFFFFF;

    background: #6A4029;
    border: none;
    border-radius: 20px;
}

.applycoupon:focus {
    outline: none;
}

.box3 {
    margin-left: -70px;
    margin-bottom: 67px;
}

.text8 {
    margin-left: 25px;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 14px;

    color: #4F5665;
}

.box4 {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    margin-top: 65px;
    margin-left: 82px;
    margin-right: 82px;
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 150px;

    margin-bottom: 30px;

    background: #FFFFFF;
    box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
    border-radius: 30px;
    padding:20px;
    box-sizing: content-box;
}

.productname {
    width: 117px;
    height: 61px;

    font-family: Poppins;
    font-style: normal;
    font-weight: 900;
    font-size: 22px;
    line-height: 101.34%;
		cursor: pointer;
    text-align: center;

    color: #000000;
    margin:10px 0 0 0 ;
}

.price {
    width: 135.13px;
    height: 14.93px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 19px;
    line-height: 25px;
    text-align: center;

    color: #6A4029;
}
.photo-product img{
    width: 100%;
    height:100%;
    object-fit:cover;
    border-radius: 50%;
		cursor: pointer;
}
.photo-product {
    width: 120px;
    height: 120px;
}
</style>
