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
                        <button class="box3" type="submit" @click="deleteImage">
                            <img class="img1" src="../../assets/trash.png" alt="image2">
                        </button>
                    </div>
                    <p class="text3">Delivery only on <b>Monday to friday</b> at  <b>1 - 7 pm</b></p>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="box4">
                    <div class="box5">
                        <input class="productname" type="text" placeholder="Enter product name" value="COLD BREW">
                        <input class="price" type="text" placeholder="Enter price" value="IDR 30.000">
                        <textarea class="productdetail" type="text" placeholder="Enter details" value="">Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.</textarea>
                    </div>
                </div>
                <div class="box6">
                    <select>
                        <option disabled selected>Select Size</option>
                        <option>R</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                    <select>
                        <option disabled selected>Select Delivery Methods</option>
                        <option>Dine in</option>
                        <option>Door delivery</option>
                        <option>Pick up</option>
                    </select>
                </div>
                <div class="box7">
                    <div class="box8">
                        <button class="plus" type="submit" @click="plusCount">+</button>
                        <p class="text4">{{count}}</p>
                        <button class="minus" type="submit" @click="minusCount">-</button>
                    </div>
                    <button class="addcart" type="submit">Add to Cart</button>
                </div>
                <button class="savechange" type="submit">Save change</button>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export default {
  name: 'SaveEditAdmin',
  data () {
    return {
      count: 1
    }
  },
  methods: {
    plusCount () {
      this.count = this.count + 1
    },
    minusCount () {
      if (this.count > 0) {
        this.count = this.count - 1
      }
    },
    deleteImage () {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Delete'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
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
    margin-bottom: 50px;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;

    color: #000000;
}

.box4 {
    display: flex;
    align-items: center;

    margin-top: 123px;
}

.box5 {
    display: flex;
    flex-direction: column;
}

input::placeholder {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;

    letter-spacing: 0.03em;
}

input:focus {
    outline: none;
}

.productname {
    width: 549px;

    margin-bottom: 15px;

    font-family: Poppins;
    font-style: normal;
    font-weight: 900;
    font-size: 65px;

    border: none;
    border-bottom: 1px solid #9F9F9F;

    color: #000000;
}

.price {
    margin-bottom: 15px;

    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 60px;

    border: none;
    border-bottom: 1px solid #9F9F9F;

    color: #000000;
}

.productdetail {
    width: 549px;
    height: 200px;

    padding-bottom: 0px;
    margin-bottom: 50px;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;

    color: #000000;
    border: none;
    border-bottom: 1px solid #9F9F9F;
}

select {
    width: 549px;
    height: 83px;

    padding-left: 30px;
    margin-bottom: 30px;

    border: 1px solid #9F9F9F;
    box-sizing: border-box;
    border-radius: 10px;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;

    color: #9F9F9F;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url('../../assets/arrow.png') 96% / 10% no-repeat #FFFFFF;
}

.box7 {
    display: flex;
    justify-content: space-between;

    width: 550px;

    margin-bottom: 30px;
}

.box8 {
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 167px;
    height: 83px;

    background: #FFFFFF;
    border: 1px solid #9F9F9F;
    box-sizing: border-box;
    border-radius: 10px;
}

.plus {
    font-family: Poppins;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;

    color: #9F9F9F;

    border: none;
    background-color: transparent;
}

.plus:focus {
    outline: none;
}

.text4 {
    margin-bottom: 0px;

    font-family: Poppins;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;

    color: #000000;
}

.minus {
    font-family: Poppins;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;

    color: #9F9F9F;

    border: none;
    background-color: transparent;
}

.minus:focus {
    outline: none;
}

.addcart {
    width: 358px;
    height: 83px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;

    color: #6A4029;

    background: #FFBA33;
    box-shadow: 0px 6px 20px rgba(255, 186, 51, 0.29);
    border: none;
    border-radius: 10px;
}

.addcart:focus {
    outline: none;
}

.savechange {
    width: 549px;
    height: 85px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;

    color: #FFFFFF;

    background: #C4C4C4;
    border: none;
    border-radius: 10px;
}

.savechange:focus {
    outline: none;
}
</style>
