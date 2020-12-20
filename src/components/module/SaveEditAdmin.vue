<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6">
                <div class="box">
                    <div class="box1">
                        <router-link to="/home/product-admin/favorite-product" class="text">Favorite & Promo</router-link>
                        <p class="text1"> > {{getProductId.productName}}</p>
                        <p class="text2"> > Edit Product</p>
                    </div>
                    <div class="box2">
                        <div class="box-image">
                            <img id="update-photo" :src="getProductId.photoProduct" alt="user profile">
                            <div class="edit-image">
                               <input id="input-upload-image" type="file" accept="image/x-png/,image/gif,image/jpeg"/>
                               <label for="input-upload-image">
                                   <img src="../../assets/edit.png" alt="edit" class="icon-edit">
                                </label>
                                <button class="box3" @click.prevent="deleteProduct">
                                    <img class="img1" src="../../assets/trash.png" alt="image2">
                                </button>
                            </div>
                        </div>
                    </div>
                    <p class="text3">Delivery only on <b>Monday to friday</b> at  <b>1 - 7 pm</b></p>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="box4">
                    <div class="box5">
                        <label class="productname">{{getProductId.productName}}</label>
                        <label class="price">{{getProductId.price}}</label>
                        <label class="productdetail">{{getProductId.description}}</label>
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
                        <p class="text4">{{getProductId.stock}}</p>
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
import { mapActions, mapGetters } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'SaveEditAdmin',
  methods: {
    plusCount () {
      this.stock = this.stock + 1
    },
    minusCount () {
      if (this.stock > 0) {
        this.stock = this.stock - 1
      }
    },
    ...mapActions(['getProductDetailsById', 'removeProduct']),
    getProductById () {
      const id = this.$route.params.idProduct
      const payload = {
        id
      }
      console.log('hasil update ', this.getProductDetailsById(payload))
      this.getProductDetailsById(payload)
    },
    deleteProduct () {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })

      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          const payload = {
            id: this.$route.params.idProduct
          }
          this.removeProduct(payload)
            .then(res => {
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            })
          this.$router.push('/home/product-admin')
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
    }
  },
  computed: {
    ...mapGetters(['getProductId'])
  },
  mounted () {
    this.getProductDetailsById()
  }
}
</script>

<style scoped>
.box-image img {
    width: 400px;
    height: 400px;
    object-fit: cover;
}

.edit-image {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #6A4029;
    position: absolute;
    top: -10px;
    left: 420px;
}

.edit-image .icon-edit {
    position: absolute;
    top: 19px;
}

.edit-image img {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 12px;
    left: 15px;
}

#input-upload-image {
  display:none;
}

.box2 .img {
    width: 400px;
    height: 400px;
    object-fit: cover;
    margin-top: 20%;
    margin-left: 5%;
}

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
    text-decoration: none;

    color: #4F5665;
}

.text1 {
    margin-right: 5px;

    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-transform: capitalize;

    color: #6A4029;
}

.text2 {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-transform: capitalize;

    color: #6A4029;
}

.box2 {
    position: relative;

    margin-top: 60px;
    margin-bottom: 50px;
}

.box3 {
    position: absolute;
    width: 60px;
    height: 60px;
    right: 3px;
    top: 80px;

    background: #FFFFFF;
    border-radius: 30px;
    border: 6px solid #FFBA33;
    box-sizing: border-box;
}

.box3:focus {
    outline: none;
}

.box3 img {
    position: absolute;
    left: 11px;
    top: 9px;
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

    color: #FFFFFF;

    background: #C4C4C4;
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
    margin-bottom: 90px;
}

.savechange:focus {
    outline: none;
}
</style>
