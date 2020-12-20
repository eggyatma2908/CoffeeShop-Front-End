<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6">
                <div class="box">
                    <div class="box1">
                        <router-link to="/home/product-admin" class="text">Favorite & Promo</router-link>
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
                        <input class="productname" v-model="productName" type="text" placeholder="Enter product name">
                        <input class="price" v-model="price" type="text" placeholder="Enter price" value="IDR 30.000">
                        <textarea class="productdetail" v-model="description" type="text" placeholder="Enter details"></textarea>
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
                        <option>Home delivery</option>
                        <option>Dine In</option>
                        <option>Take away</option>
                    </select>
                </div>
                <div class="box7">
                    <div class="box8">
                        <button class="plus" type="submit" @click="plusCount">+</button>
                        <p class="text4">{{stock}}</p>
                        <button class="minus" type="submit" @click="minusCount">-</button>
                    </div>
                    <button class="addcart" type="submit">Add to Cart</button>
                </div>
                <button class="editproduct" type="submit" @click.prevent="updateProduct(getProductId.idProduct)">Save Change</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Swal from 'sweetalert2'
import $ from 'jquery'
export default {
  name: 'EditProductAdmin',
  data () {
    return {
      stock: 0,
      productName: '',
      price: 0,
      description: '',
      photoProduct: []
    }
  },
  methods: {
    plusCount () {
      this.stock = this.stock + 1
    },
    minusCount () {
      if (this.count > 0) {
        this.stock = this.stock - 1
      }
    },
    ...mapActions(['getProductDetailsById', 'updateProducts', 'removeProduct']),
    getProductById () {
      const id = this.$route.params.idProduct
      const payload = {
        id
      }
      console.log(this.getProductDetailsById(payload))
      this.getProductDetailsById(payload)
    },
    updateProduct (idProduct) {
      if (!document.getElementById('input-upload-image').files[0]) {
        return Swal.fire({
          icon: 'error',
          title: 'Photo Product cannot empty',
          text: 'please fill in your Product photo',
          showConfirmButton: false
        })
      }
      const form = new FormData()
      form.append('photoProduct', document.getElementById('input-upload-image').files[0])
      form.append('productName', this.productName)
      form.append('price', this.price)
      form.append('description', this.description)
      form.append('stock', this.stock)
      form.append('discountPercent', this.getProductId.discountPercent)
      form.append('idTypeProduct', this.getProductId.idTypeProduct)
      form.append('homeDelivery', this.getProductId.homeDelivery)
      form.append('dineIn', this.getProductId.dineIn)
      form.append('takeAway', this.getProductId.takeAway)
      console.log('udah isi update')
      const id = this.$route.params.idProduct
      const payload = {
        id,
        formData: form
      }
      this.updateProducts(payload)
        .then(res => {
          console.log(res)
          this.$router.push(`/home/save-product/${idProduct}`)
        })
    },
    onInputUploadChange () {
      const self = this
      $('#input-upload-image').change(function () {
        self.readImgUrlAndPreview(this)
      })
    },
    readImgUrlAndPreview (input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader()
        reader.onload = function (e) {
          $('#update-photo').attr('src', e.target.result)
        }
        reader.readAsDataURL(input.files[0])
      }
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
  async mounted () {
    await this.getProductDetailsById()
    await this.onInputUploadChange()
    // this.updateProducts()
  }
}
</script>

<style scoped>
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

    color: #6A4029;

    background: #FFBA33;
    box-shadow: 0px 6px 20px rgba(255, 186, 51, 0.29);
    border: none;
    border-radius: 10px;
}

.addcart:focus {
    outline: none;
}

.editproduct {
    width: 549px;
    height: 85px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;

    color: #FFFFFF;

    background: #6A4029;
    border: none;
    border-radius: 10px;
    margin-bottom: 90px;
}

.editproduct:focus {
    outline: none;
}

</style>
