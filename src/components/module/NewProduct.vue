<template>
        <main>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="navigation-route">
                            <p class="favorite-promo">Favorite & Promo</p>
                            <p class="add-new-product">> Add new product</p>
                        </div>
                        <div class="picture-product">
                            <img src="../../assets/camera.png" alt="camera">
                        </div>
                        <button class="btn btn-take-picture">Take a picture</button>
                        <button class="btn btn-choose-gallery">Choose from gallery</button>
                        <div class="delivery-hour">
                            <h6>Delivery Hour :</h6>
                            <form>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Select start hour" onfocus="(this.type='time')">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Select end hour" onfocus="(this.type='time')">
                                </div>
                            </form>
                        </div>
                        <h6 class="input-stock">Input Stock :</h6>
                            <select>
                                <option disabled selected>Input Stock</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                    </div>
                    <div class="col-lg-6">
                        <form>
                            <div class="mb-3 mt-5 form-group">
                                <label class="form-label">Name :</label>
                                <input type="text" v-model.trim="$v.productName.$model" :class="{ 'is-invalid': validationStatus($v.productName) }" class="form-control" placeholder="Type product name min. 50 characters">
                                <div class="invalid-feedback" v-if="!$v.productName.required">Field is required.</div>
                                <div class="invalid-feedback" v-if="!$v.productName.minLength">Minim 50 characters</div>
                            </div>
                            <div class="mb-3 mt-5 form-group">
                                <label class="form-label">Price :</label>
                                <input type="number" v-model.trim="$v.price.$model" :class="{ 'is-invalid': validationStatus($v.price) }" class="form-control" placeholder="Type the price">
                                <div class="invalid-feedback" v-if="!$v.price.required">Field is required.</div>
                            </div>
                            <div class="mb-3 mt-5 form-group">
                                <label class="form-label">Description :</label>
                                <input type="text" v-model.trim="$v.description.$model" :class="{ 'is-invalid': validationStatus($v.description) }" class="form-control" placeholder="Describe your product min. 150 characters">
                                <div class="invalid-feedback" v-if="!$v.description.required">Field is required.</div>
                                <div class="invalid-feedback" v-if="!$v.description.minLength">Minim 150 characters</div>
                            </div>
                            <div class="mb-3 mt-5 form-group">
                                <label class="form-label">Category :</label>
                                <input type="text" v-model.trim="$v.category.$model" :class="{ 'is-invalid': validationStatus($v.category) }" class="form-control" placeholder="Enter category">
                                <div class="invalid-feedback" v-if="!$v.category.required">Field is required.</div>
                            </div>

                            <h6 class="text-input-product">Input product size :</h6>
                            <p>Click methods you want to use for this product</p>
                            <div class="product-size">
                                <div class="size">
                                    <input class="radiobtn" type="radio" id="reguler" name="size" value="reguler">
                                    <label for="reguler">R</label><br>
                                </div>
                                <div class="size">
                                    <input class="radiobtn" type="radio" id="large" name="size" value="large">
                                    <label for="large">L</label><br>
                                </div>
                                <div class="size">
                                    <input class="radiobtn" type="radio" id="xtra-large" name="size" value="xtra-large">
                                    <label for="xtra-large">XL</label>
                                </div>
                                <button class="btn btn-250-gr">250 gr</button>
                                <button class="btn btn-300-gr">300 gr</button>
                                <button class="btn btn-500-gr">500 gr</button>
                            </div>

                            <h6 class="text-input-delivery">Input delivery methods :</h6>
                            <p class="methods">Click methods you want to use for this product</p>
                            <div class="delivery-methods">
                                <button class="btn btn-home-delivery">Home Delivery</button>
                                <button class="btn btn-dine-in">Dine in</button>
                                <button class="btn btn-take-away">Take away</button>
                            </div>
                            <button type="submit" class="btn btn-save" @click.prevent="save">Save Product</button>
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
export default {
  name: 'NewProduct',
  data () {
    return {
      productName: '',
      price: '',
      description: ''
    }
  },
  validations: {
    productName: { required, minLength: minLength(0) },
    price: { required },
    description: { required, minLength: minLength(0) },
    category: { required }
  },
  methods: {
    validationStatus (validation) {
      return typeof validation !== 'undefined' ? validation.$error : false
    }
  },
  ...mapActions(['addNewProduct']),
  save () {
    this.$v.$touch()
    if (this.$v.$pendding || this.$v.$error) return
    const form = new FormData()
    form.append(this.productName)
    form.append(this.price)
    form.append(this.description)
    const payload = {
      formData: form
    }
    this.addNewProduct(payload)
  }
}
</script>

<style scoped>
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
    margin-left: 50px;
}

.picture-product img {
    padding-left: 110px;
    padding-top: 100px;
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

button.btn-choose-gallery {
    background: #FFBA33;
    border-radius: 20px;
    width: 391px;
    height: 88px;
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
    color: #6A4029;
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

.input-stock {
    font-size: 25px;
    line-height: 30px;
    color: #6A4029;
    font-weight: bold;
    padding-top: 130px;
}

select {
    width: 391px;
    height: 83px;

    padding-left: 30px;

    border: 1px solid #9F9F9F;
    box-sizing: border-box;
    border-radius: 20px;

    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;

    color: #9F9F9F;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url('../../assets/arrow.png') 96% / 10% no-repeat #FFFFFF;
    margin-bottom: 100px;
}

select:focus {
    outline: none;
}

select option {
    border-top-left-radius: 20px;
}

form .form-label {
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
    color: #6A4029;
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
    padding-top: 60px;
}

form .product-size,
form .delivery-methods {
    display: flex;
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

.radiobtn {
    position:absolute;
    top: 0px;
    right: 0px;
    width: 70px;
    height: 70px;
    background: rgba(186, 186, 186, 0.35);
    border-radius: 50%;
    margin-left: 20px;
    opacity: 1;
}

form .btn-reguler,
form .btn-large,
form .btn-xtra-large,
form .btn-250-gr,
form .btn-300-gr,
form .btn-500-gr {
    position: relative;
    width: 70px;
    height: 70px;
    background: rgba(186, 186, 186, 0.35);
    border-radius: 50%;
    margin-left: 20px;
}

form .btn-reguler,
form .btn-large,
form .btn-xtra-large {
    font-weight: bold;
    font-size: 30px;
    line-height: 45px;
    text-align: center;

    color: #000000;
}

form .btn-reguler::after,
form .btn-large:checked,
form .btn-xtra-large:checked,
form .btn-250-gr:checked,
form .btn-300-gr:checked,
form .btn-500-gr:checked {
    background-color: #FFBA33;
}

form .btn-250-gr,
form .btn-300-gr,
form .btn-500-gr {
    font-weight: bold;
    font-size: 15px;
    line-height: 22px;
    text-align: center;

    color: #4F5665;
}

form .text-input-delivery {
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
    color: #6A4029;
    padding-top: 80px;
}

form p.methods {
    font-size: 20px;
    line-height: 24px;
    color: #9F9F9F;
}

form .btn-home-delivery,
form .btn-dine-in,
form .btn-take-away {
    width: 180px;
    height: 72px;
    background: rgba(186, 186, 186, 0.35);
    margin-left: 20px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #6A4029;
}

form .btn-save {
    height: 98px;
    width: 100%;
    background: #6A4029;
    box-shadow: 0px 6px 20px rgba(106, 64, 41, 0.4);
    border-radius: 20px;
    font-weight: bold;
    font-size: 25px;
    line-height: 138.84%;
    letter-spacing: 0.03em;
    font-family: 'Poppins', sans-serif;

    color: #FFFFFF;
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
    margin-top: 60px;

    color: #4F5665;
}
</style>
