<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-5">
                <div class="box">
                    <div class="box1">
                        <p class="text">Favorite & Promo ></p>
                        <p class="text1">Cold Brew</p>
                    </div>
                    <img class="img" src="../../assets/coffee2.png" alt="image1">
                    <p class="text2">COLD BREW</p>
                    <p class="text3">IDR 30.000</p>
                    <button class="addcart" type="submit">Add to Cart</button>
                    <button class="askstaff" type="submit">Ask a Staff</button>
                </div>
            </div>
            <div class="col-lg-7">
                <div class="box2">
                    <p class="text4">Delivery only on <b>Monday to friday</b> at  <b>1 - 7 pm</b></p>
                    <p class="text5">Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.</p>
                    <p class="text6">Choose a size</p>
                    <div class="box3">
                        <button class="size" type="submit">R</button>
                        <button class="size1" type="submit">L</button>
                        <button class="size2" type="submit">XL</button>
                    </div>
                </div>
                <div class="box4">
                    <p class="text7">Choose Delivery Methods</p>
                    <div class="box5">
                        <button class="dinein" type="submit">Dine in</button>
                        <button class="doordelivery" type="submit">Door Delivery</button>
                        <button class="pickup" type="submit">Pick up</button>
                    </div>
                    <div class="box6">
                        <label class="settime" for="settime">Set time :</label>
                        <input class="input1" type="text" placeholder="Enter the time your arrived">
                    </div>
                </div>
                <div class="box7">
                    <div class="box8">
                        <div class="box9">
                            <img class="img1" src="../../assets/coffee2.png" alt="image2">
                            <div class="box10">
                                <p class="text8">COLD BREW</p>
                                <p class="text9">x1 (Large)</p>
                                <p class="text10">x1 (Regular)</p>
                            </div>
                            <button class="minus" type="submit">-</button>
                            <p class="text11">2</p>
                            <button class="plus" type="submit">+</button>
                        </div>
                    </div>
                    <button class="checkout">CHECKOUT</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ProductDetails',
  methods: {
    ...mapActions(['getProductDetailsById']),
    handleGetProductDetailsById () {
      const payload = {
        id: this.$route.params.idProduct
      }
      console.log(payload)
      this.getProductDetailsById()
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

.text1 {
    margin-left: 5px;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;

    color: #6A4029;
}

.img {
    width: 300px;
    border-radius: 200px;
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

    margin-left: -150px;
    margin-top: 45px;
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
