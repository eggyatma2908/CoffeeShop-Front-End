<template>
        <main>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="navigation-route">
                            <router-link to="/home/product-admin/favorite-product" class="favorite-promo">Favorite & Promo</router-link>
                            <p class="favorite-promo" style="margin-right: 5px;">Favorite & Promo </p>
                            <p class="add-new-product"> > Add new product</p>
                        </div>
                        <div class="picture-product">
                            <div>
                            <img id="update-photo" :src="previewImg" v-if="previewImg" alt="camera">
                            </div>
                        </div>
                        <button class="btn btn-take-picture">Take a picture</button>
                        <div class="btn btn-choose-gallery">
                            <input class="" id="upload-image" type="file" accept="image/x-png/,image/gif,image/jpeg" v-on:change="upload"/>
                            <label for="upload-image">Choose from gallery</label>
                            </div>
                        <div class="delivery-hour">
                            <h6>Delivery Hour :</h6>
                            <form>
                                <div class="form-group">
                                   <label class="settime" for="settime"></label>
                                    <input id="settime" type="time" v-model="deliveryHourStart" style="outline:none;" class="input1" min="09:00" max="18:00" v-on:change="setTime" placeholder="Select start hour" required>
                                </div>
                                <div class="form-group">
                                    <label class="settime" for="settime1"></label>
                                    <input id="settime1" type="time" v-model="deliveryHourEnd" style="outline:none;" class="input1" min="09:00" max="18:00" v-on:change="setTime1" placeholder="Select end hour" required>
                                </div>
                            </form>
                        </div>
                        <div class="stocked">
                            <label class="labelstock"  id="inputstock">Input Stock :</label>
                            <input class="inputstock" type="number" id="inputstock" placeholder="Input stock" v-model.trim="$v.stock.$model">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <form>
                            <div class="mb-3 mt-5 form-group">
                                <label class="form-label">Name :</label>
                                <input type="text" v-model.trim="$v.productName.$model" :class="{ 'is-invalid': validationStatus($v.productName) }" class="productname" placeholder="Type product name min. 50 characters">
                                <div class="invalid-feedback" v-if="!$v.productName.required">Field is required.</div>
                                <div class="invalid-feedback" v-if="!$v.productName.minLength">Minim 50 characters</div>
                            </div>
                            <div class="mb-3 mt-5 form-group">
                                <label class="form-label">Price :</label>
                                <input type="number" v-model.trim="$v.price.$model" :class="{ 'is-invalid': validationStatus($v.price) }" class="price" placeholder="Type the price">
                                <div class="invalid-feedback" v-if="!$v.price.required">Field is required.</div>
                            </div>
                            <div class="mb-3 mt-5 form-group">
                                <label class="form-label">Description :</label>
                                <input type="text" v-model.trim="$v.description.$model" :class="{ 'is-invalid': validationStatus($v.description) }" class="description" placeholder="Describe your product min. 150 characters">
                                <div class="invalid-feedback" v-if="!$v.description.required">Field is required.</div>
                                <div class="invalid-feedback" v-if="!$v.description.minLength">Minim 50 characters</div>
                            </div>
                            <form id="selectcategory" onsubmit="return false">
                            <select id="category" v-on:change="addCategory">
                                <option disabled selected>Category</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                            </select>
                            </form>
                            <h6 class="text-input-product">Input product size :</h6>
                            <p>Click methods you want to use for this product</p>
                            <div class="box3">
                                <input class="size" id="btn-choose-size-r" value="R" v-model="inputChooseSize" type="checkbox" name="size">
                                                        <label for="btn-choose-size-r">R</label>
                                <input class="size" id="btn-choose-size-l" value="L" v-model="inputChooseSize" type="checkbox" name="size">
                                                        <label for="btn-choose-size-l">L</label>
                                <input class="size" id="btn-choose-size-xl" value="XL" v-model="inputChooseSize" type="checkbox" name="size">
                                                        <label for="btn-choose-size-xl">XL</label>

                                <input class="size" id="btn-choose-size-r" value="200" v-model="inputChooseSize" type="checkbox" name="size">
                                                        <label class="weight" for="btn-choose-size-r">200 gr</label>
                                <input class="size" id="btn-choose-size-l" value="300" v-model="inputChooseSize" type="checkbox" name="size">
                                                        <label class="weight" for="btn-choose-size-l">300 gr</label>
                                <input class="size" id="btn-choose-size-xl" value="500" v-model="inputChooseSize" type="checkbox" name="size">
                                                        <label class="weight" for="btn-choose-size-xl">500 gr</label>
                            </div>

                            <h6 class="text-input-delivery">Input delivery methods :</h6>
                            <p class="methods">Click methods you want to use for this product</p>
                            <div class="box4">
                                <div>
                                    <label>
                                        <input id="checkbox1" type="checkbox" v-on:change="addHomeDelivery" value="1">
                                        <span>Home Delivery</span>
                                     </label>
                                </div>
                                <div>
                                    <label>
                                        <input id="checkbox2" type="checkbox" class="btn btn-dine-in" v-on:change="addDineIn" value="1">
                                        <span>Dine in</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input id="checkbox3" type="checkbox" class="btn btn-take-away" v-on:change="addTakeAway" value="1">
                                        <span>Take away</span>
                                    </label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-save" @click.prevent="addProduct">Save Product</button>
                            <button class="btn btn-cancel">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'
import Swal from 'sweetalert2'
import $ from 'jquery'
export default {
  name: 'NewProduct',
  data () {
    return {
      photoProduct: '',
      productName: '',
      price: '',
      description: '',
      previewImg: '',
      stock: '',
      idTypeProduct: '',
      homeDelivery: '',
      dineIn: '',
      takeAway: '',
      deliveryHourStart: '',
      deliveryHourEnd: '',
      inputChooseSize: ''
    }
  },
  validations: {
    productName: { required, minLength: minLength(50) },
    price: { required },
    description: { required, minLength: minLength(150) },
    stock: { required, minLength: minLength(0) },
    idTypeProduct: { required, minLength: minLength(0) }
  },
  methods: {
    validationStatus (validation) {
      return typeof validation !== 'undefined' ? validation.$error : false
    },
    ...mapActions(['addNewProduct']),
    addCategory (event) {
      const categoryId = document.getElementById('selectcategory').category.value
      this.idTypeProduct = categoryId
    },
    addHomeDelivery (event) {
      const valueHomeDelivery = (document.querySelector('.btn-home-delivery:checked').value)
      this.homeDelivery = valueHomeDelivery
    },
    addDineIn (event) {
      const valueDineIn = (document.querySelector('.btn-dine-in:checked').value)
      this.dineIn = valueDineIn
    },
    addTakeAway (event) {
      const valueTakeAway = (document.querySelector('.btn-take-away:checked').value)
      this.takeAway = valueTakeAway
    },
    setTime (event) {
      const valueTime = document.getElementById('settime').value
      this.deliveryHourStart = valueTime
    },
    setTime1 (event) {
      const valueTime = document.getElementById('settime').value
      this.deliveryHourEnd = valueTime
    },
    upload (event) {
      const imagename = (event.target.files[0].name)
      this.photoProduct = imagename
      this.previewImg = URL.createObjectURL(event.target.files[0])
    },
    addProduct () {
      this.$v.$touch()
      if (!document.getElementById('upload-image').files[0]) {
        return Swal.fire({
          icon: 'error',
          title: 'Photo Profile cannot empty',
          text: 'please fill in your profile photo',
          showConfirmButton: false
        })
      }
      if (this.$v.$prndding || this.$v.$error) return
      const form = new FormData()
      form.append('photoProduct', document.getElementById('upload-image').files[0])
      form.append('productName', this.productName)
      form.append('price', this.price)
      form.append('stock', this.stock)
      form.append('description', this.description)
      form.append('idTypeProduct', this.idTypeProduct)
      form.append('homeDelivery', this.homeDelivery)
      form.append('dineIn', this.dineIn)
      form.append('takeAway', this.takeAway)
      form.append('deliveryHourStart', this.deliveryHourStart)
      form.append('deliveryHourEnd', this.deliveryHourEnd)
      const payload = {
        formData: form
      }
      this.addNewProduct(payload)
    },
    onInputUploadChange () {
      const self = this
      $('#upload-image').change(function () {
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
    }
  },
  mounted () {
    this.onInputUploadChange()
  }
}
</script>

<style scoped>
.col-lg-6 {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.box4 {
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
}

.box4 div label {
    cursor: pointer;
}

.box4 div label input[type="checkbox"] {
    display: none;
}

.box4 div label span {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;

    color: #4F5665;
    padding: 25px 30px;

    background: rgba(186, 186, 186, 0.35);
    border-radius: 20px;
}

.box4 div label span:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
}

.box4 div label input[type="checkbox"]:checked ~ span {
    background: #FFBA33;
}

main {
    background: #FFFFFF;
    max-height: max-content;
}

.navigation-route {
    display: flex;
    padding-top: 50px;
    padding-bottom: 90px;
}

.navigation-route .favorite-promo {
    font-size: 20px;
    line-height: 24px;
    color: #4F5665;
}

.navigation-route .add-new-product {
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    color: #6A4029;
}

.picture-product {
    width: 300px;
    height: 300px;
    background: rgba(186, 186, 186, 0.35);
    border-radius: 50%;
    background-image: url('../../assets/camera.png');
    background-repeat: no-repeat;
    background-position: 100px;
}

img {
    width: 300px;
    height: 300px;

    border-radius: 50%;
}

button {
    margin-top: 50px;
}

button.btn-take-picture {
    background: #0B132A;
    border-radius: 20px;
    width: 391px;
    height: 88px;
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
    color: #FFFFFF;
}

.btn-choose-gallery {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    margin-right: 0px;
    background: #FFBA33;
    border-radius: 20px;
    width: 391px;
    height: 88px;
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
    color: #6A4029;
}

.btn-choose-gallery label {
    margin-bottom: 0px;
}

input#upload-image {
    width: 365px;
    position: absolute;
    opacity: 0;
}

.delivery-hour h6 {
    font-size: 25px;
    line-height: 30px;
    color: #6A4029;
    font-weight: bold;
    padding-top: 130px;
}

.delivery-hour form input {
    background: #FFFFFF;
    border: 1px solid #9F9F9F;
    box-sizing: border-box;
    border-radius: 20px;
    width: 391px;
    height: 83px;
    padding-left: 10px;
}

.delivery-hour form input[type="time"]:focus-visible{
     /* box-shadow: 0 0 0 rgb(255, 255, 255); */
     border: 1px solid #9F9F9F;
}

.stocked {
    display: flex;
    flex-direction: column;

    margin-top: 50px;
}

.labelstock {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;

    color: #6A4029;
}

.inputstock {
    width: 391px;
    height: 83px;

    padding-left: 10px;

    background: #FFFFFF;
    border: 1px solid #9F9F9F;
    box-sizing: border-box;
    border-radius: 20px;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;

    color: #9F9F9F;
    outline: none;
}

form .form-label {
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
    color: #6A4029;
}

.productname {
    width: 549px;

    margin-top: 30px;
    padding: 15px;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;

    color: #9F9F9F;

    border: none;
    border-bottom: 1px solid #9F9F9F;
}

.price {
    width: 549px;

    margin-top: 30px;
    padding: 15px;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;

    color: #9F9F9F;

    border: none;
    border-bottom: 1px solid #9F9F9F;
}

.description {
    width: 549px;

    margin-top: 30px;
    padding: 15px;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;

    color: #9F9F9F;

    border: none;
    border-bottom: 1px solid #9F9F9F;
}

select {
    width: 549px;
    height: 83px;

    padding-left: 30px;
    margin-top: 30px;
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
    outline:none;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
}

form .form-control:focus {
    border: 1px solid #4F5665;
    box-shadow: none;
}

form .form-group input,
form p {
    font-size: 20px;
    line-height: 24px;
    color: #9F9F9F;
}

form .form-group input:focus {
    border-bottom: none;
}

form .is-invalid {
    border: 1px solid red;
}

form .is-invalid:focus {
    border: 1px solid red;
}

form .text-input-product {
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
    color: #6A4029;
    padding-top: 30px;
}

form .product-size,
form .delivery-methods {
    display: flex;
    justify-content: space-between;
}

.box3 {
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    margin-bottom: 50px;
}

.box3 input[type="checkbox"] {
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

.box3 input[type="checkbox"]:focus + label {
    border: 2px dashed #444;
}

.box3 input[type="checkbox"]:checked + label {
    background-color: rgba(231, 170, 54, 0.52);
    border: 3px solid #6A4029;
	color:#6A4029;
}

h6.text-input-delivery {
    width: 302px;
    height: 30px;

    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;

    color: #6A4029;
}

.size {
    position: relative;

    margin-top: 50px;

    width: 70px;
    height: 70px;

    background: rgba(186, 186, 186, 0.35);
    border-radius: 50%;
    margin-left: 20px;
    padding: 10px;

    font-weight: bold;
    font-size: 30px;
    line-height: 45px;
    text-align: center;

    color: #000000;
}

label.weight {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 22px;
    text-align: center;

    background-color: rgba(186, 186, 186, 0.35);
    color: #4F5665;
}

form .btn-save {
    height: 98px;
    width: 100%;
    background: rgba(186, 186, 186, 0.35);
    border-radius: 20px;
    font-weight: bold;
    font-size: 25px;
    line-height: 138.84%;
    letter-spacing: 0.03em;
    font-family: 'Poppins', sans-serif;

    color: #4F5665;
}

form .btn-save:hover {
    background: #6A4029;
    color: #FFFFFF;
    box-shadow: 0px 6px 20px rgba(106, 64, 41, 0.4);
}

form .btn-save:focus {
    background: #6A4029;
    color: #FFFFFF;
    box-shadow: 0px 6px 20px rgba(106, 64, 41, 0.4);
}

form .btn-cancel {
    height: 98px;
    width: 100%;
    background: rgba(186, 186, 186, 0.35);
    border-radius: 20px;
    font-weight: bold;
    font-size: 25px;
    line-height: 138.84%;
    letter-spacing: 0.03em;
    font-family: 'Poppins', sans-serif;
    margin-top: 30px;
    margin-bottom: 30px;

    color: #4F5665;
}

form .btn-cancel:hover {
    background: #6A4029;
    color: #FFFFFF;
    box-shadow: 0px 6px 20px rgba(106, 64, 41, 0.4);
}

form .btn-cancel:focus {
    background: #6A4029;
    color: #FFFFFF;
    box-shadow: 0px 6px 20px rgba(106, 64, 41, 0.4);
}
</style>
