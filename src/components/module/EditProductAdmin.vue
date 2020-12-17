<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6">
                <div class="box">
                    <div class="box1">
                        <p class="text">Favorite & Promo</p>
                        <p class="text1"> > Cold Brew</p>
                        <p class="text2"> > Edit Product</p>
                    </div>
                    <div class="box2">
                        <img class="img" src="../../assets/coffee3.png" alt="image1">
                        <button class="box3">
                            <img class="img1" src="../../assets/trash.png" alt="image2">
                        </button>
                    </div>
                    <p class="text3">Delivery only on <b>Monday to friday</b> at  <b>1 - 7 pm</b></p>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="box4">
                    <div class="box5">
                        <input class="productname" type="text" placeholder="Enter product name" v-model="productname">
                        <input class="price" type="text" placeholder="Enter price" v-model="price">
                        <input class="productdetail" type="text" placeholder="Enter details" v-model="productdetail">
                    </div>
                </div>
                <div class="box6">
                    <select class="selectsize">
                        <option value="0">Select Size</option>
                        <option value="1">R</option>
                        <option value="2">L</option>
                        <option value="3">XL</option>
                    </select>
                </div>
                <div class="box7">
                    <select class="selectdelivery">
                        <option value="0">Select Delivery Methods</option>
                        <option value="1">Dine in</option>
                        <option value="2">Door Delivery</option>
                        <option value="3">Pick up</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'EditProductAdmin',
  data () {
    return {
      productname: 'COLD BREW',
      price: 'IDR 30.000',
      productdetail: 'Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.'
    }
  }
}
</script>

<style scoped>
.box {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.box1 {
    display: flex;
    flex-direction: row;

    margin-left: -100px;
    margin-top: 38px;
}

.text {
    margin-right: 5px;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;

    color: #4F5665;
}

.text1 {
    margin-right: 5px;

    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;

    color: #6A4029;
}

.text2 {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;

    color: #6A4029;
}

.box2 {
    position: relative;

    margin-top: 60px;
    margin-bottom: 50px;
}

.box3 {
    position: absolute;
    width: 55px;
    height: 55px;
    right: 26px;
    top: 23px;

    background: #FFFFFF;
    border-radius: 30px;
    border: 6px solid #FFBA33;
    box-sizing: border-box;
}

.box3:focus {
    outline: none;
}

.text3 {
    width: 436px;
    height: 70px;

    margin-left: -90px;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;

    color: #000000;
}

.box4 {
    display: flex;
    align-items: center;
}

.box5 {
    display: flex;
    flex-direction: column;
}

.productname {
    border: none;
    border-bottom: 1px solid #9F9F9F;
}

.price {
    border: none;
    border-bottom: 1px solid #9F9F9F;
}

.productdetail {
    border: none;
    border-bottom: 1px solid #9F9F9F;
}

.selectsize {
    width: 549px;
    height: 83px;

    padding-left: 30px;

    background: #FFFFFF;
    border: 1px solid #9F9F9F;
    box-sizing: border-box;
    border-radius: 10px;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;

    color: #9F9F9F;
}

.selectdelivery {
    width: 549px;
    height: 83px;

    padding-left: 30px;

    background: #FFFFFF;
    border: 1px solid #9F9F9F;
    box-sizing: border-box;
    border-radius: 10px;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;

    color: #9F9F9F;
}
</style>
