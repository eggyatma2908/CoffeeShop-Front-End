<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-4">
                    <p class="text">Promo for you</p>
                    <p class="text1">Coupons will be updated every weeks. Check them out! </p>
                    <div class="box">
                        <div class="box1">
                            <div class="coupon"></div>
                            <div class="coupon1"><button class="edit"><img src="../../../assets/pen.png" alt="image"></button></div>
                            <div class="coupon2"><button class="edit1"><img src="../../../assets/pen1.png" alt="image"></button></div>
                            <div class="box2">
                                <button class="edit2"><img src="../../../assets/pen.png" alt="image"></button>
                                <img class="img" src="../../../assets/food1.png" alt="image1">
                                <p class="text2">Beef Spaghetti</p>
                                <p class="text3">20% OFF</p>
                                <p class="text4">Buy 1 Choco Oreo and get 20% off for Beef Spaghetti</p>
                                <div class="borderdashed"></div>
                                <p class="text5">COUPON CODE</p>
                                <p class="text6">FNPR15RG</p>
                                <p class="text7">Valid untill October 10th 2020</p>
                            </div>
                        </div>
                        <button class="applycoupon" type="submit">Apply Coupon</button>
                        <div class="box3">
                            <p class="text8">Terms and Condition</p>
                            <ol>
                                <li>You can only apply 1 coupon per day</li>
                                <li>It only for dine in</li>
                                <li>Buy 1 get 1 only for new user</li>
                                <li>Should make member card to apply coupon</li>
                            </ol>
                        </div>
                        <button class="addnewpromo" type="submit">Add new promo</button>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="menu">
                        <div class="favoriteproduct"><router-link class="navbar1" :to="{path: '/home/product-admin/favorite-product'}">Favorite Product</router-link></div>
                        <div class="coffee1"><router-link class="navbar2" :to="{path: '/home/product-admin/coffee'}">Coffee</router-link></div>
                        <div class="noncoffee"><router-link class="navbar3" :to="{path: '/home/product-admin/non-coffee'}">Non Coffee</router-link></div>
                        <div class="foods"><router-link class="navbar4" :to="{path: '/home/product-admin/foods'}">Foods</router-link></div>
                        <div class="addon"><router-link class="navbar5" :to="{path: '/home/product-admin/add-on'}">Add-on</router-link></div>
                    </div>
                    <router-view/>
                    <button class="addnewproduct" @click="goPageAddNewProduct">Add new product</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProductAdmin',
  methods: {
    goPageAddNewProduct () {
      this.$router.push('/home/new-product')
    }
  }
}
</script>

<style scoped>
.col-lg-4 {
    display: flex;
    flex-direction: column;
    align-items: center;

    border-right: 0.5px solid #9F9F9F;
}

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

.box1 {
    position: relative;

    margin-top: 28px
}

.coupon {
    width: 284px;
    height: 472px;

    background: #FFCB65;
    border-radius: 20px;
    z-index: -1;
}

.coupon1 {
    position: absolute;
    width: 270px;
    height: 400px;
    left: 50px;
    top: 40px;

    background: #000000;
    border-radius: 20px;
    z-index: -1;
}

.coupon2 {
    position: absolute;
    width: 284px;
    height: 338px;
    left: 65px;
    top: 70px;

    background: #895537;
    border-radius: 20px;
    z-index: -2;
}

.edit {
    position: absolute;
    top: 10px;
    left: 100px;

    width: 30px;
    height: 30px;

    margin-left: 130px;

    border: none;
    border-radius: 20px;
    background: #6A4029;
}

.edit:focus {
    outline: none;
}

.edit1 {
    position: absolute;
    top: 10px;
    left: 115px;

    width: 30px;
    height: 30px;

    margin-left: 130px;

    border: none;
    border-radius: 20px;
    background: #FFBA33;
}

.edit1:focus {
    outline: none;
}

.box2 {
    position: relative;
}

.edit2 {
    position: absolute;
    top: -460px;
    left: 110px;

    width: 30px;
    height: 30px;

    margin-left: 130px;

    border: none;
    border-radius: 20px;
    background: #6A4029;
}

.edit2:focus {
    outline: none;
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

.addnewpromo {
    width: 284px;
    height: 90px;

    margin-bottom: 95px;

    background: #FFBA33;
    border: none;
    border-radius: 20px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;

    color: #6A4029;
}

.addnewpromo:focus {
    outline: none;
}

.menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-left: 95px;
    margin-top: 29px;
    margin-right: 95px;
}

.navbar1 {
    text-decoration: none;

    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 60px;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;

    color: #9F9F9F;
}

.navbar1:focus {
    font-weight: bold;
    background-image: url('../../../assets/listbutton.png');
    background-repeat: no-repeat;
    background-position: center;
    color: #6A4029;
}

.navbar2 {
    text-decoration: none;

    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 60px;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;

    color: #9F9F9F;
}

.navbar2:focus {
    font-weight: bold;
    background-image: url('../../../assets/listbutton.png');
    background-repeat: no-repeat;
    background-position: center;
    color: #6A4029;
}

.navbar3 {
    text-decoration: none;

    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 60px;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;

    color: #9F9F9F;
}

.navbar3:focus {
    font-weight: bold;
    background-image: url('../../../assets/listbutton.png');
    background-repeat: no-repeat;
    background-position: center;
    color: #6A4029;
}

.navbar4 {
    text-decoration: none;

    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 60px;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;

    color: #9F9F9F;
}

.navbar4:focus {
    font-weight: bold;
    background-image: url('../../../assets/listbutton.png');
    background-repeat: no-repeat;
    background-position: center;
    color: #6A4029;
}

.navbar5 {
    text-decoration: none;

    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 60px;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;

    color: #9F9F9F;
}

.navbar5:focus {
    font-weight: bold;
    background-image: url('../../../assets/listbutton.png');
    background-repeat: no-repeat;
    background-position: center;
    color: #6A4029;
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
}

.productname {
    width: 117px;
    height: 61px;

    font-family: Poppins;
    font-style: normal;
    font-weight: 900;
    font-size: 22px;
    line-height: 101.34%;

    text-align: center;

    color: #000000;
}

.price {
    width: 135.13px;
    height: 14.93px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 25px;
    text-align: center;

    color: #6A4029;
}

.addnewproduct {
    width: 729px;
    height: 90px;

    margin-top: 70px;
    margin-left: 70px;

    background: #6A4029;
    border: none;
    border-radius: 20px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;

    color: #FFFFFF;
}

.addnewproduct:focus {
    outline: none;
}

</style>
