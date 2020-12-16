<template>
    <div>
        <main>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 left">
                        <img class="img1" src="../../assets/background.png" alt="image1">
                    </div>
                    <div class="col-lg-6 right">
                        <div class="box">
                            <div class="box1">
                                <img class="img2" src="../../assets/coffee.png" alt="Image2">
                                <p class="text">Coffe Shop</p>
                            </div>
                            <button class="login" type="submit">Login</button>
                        </div>
                        <div class="box2">
                            <p class="text1">Sign Up</p>
                        </div>
                        <div class="box3">
                            <form @submit.prevent="submit">
                                <label class="text2" for="email">Email Address :</label>
                                    <input class="email form-control" type="email" name="email" id="email" placeholder="Enter your email address" v-model="email">
                                    <!-- <small v-if="!$v.email.required" class="text-danger">Field is required</small><br> -->
                                    <small v-if="!$v.email.email" class="text-danger">Field is required</small><br>
                                <label class="text3" for="password">Password :</label>
                                    <div class="box-password">
                                        <input class="password form-control" type="password" name="password" id="password" placeholder="Enter your password" v-model="password">
                                        <small v-if="!$v.password.minLength" class="text-danger">Name must have at least 4 letters.</small><br>
                                        <input class="checkbox" type="checkbox" @click="togglePassword">
                                    </div>
                                <label class="text4" for="phonenumber">Phone Number :</label>
                                    <input class="phonenumber form-control" type="phonenumber" name="phonenumber" id="phonenumber" placeholder="Enter your phone number" v-model="phoneNumber">
                                    <small v-if="!$v.phoneNumber.numeric" class="text-danger">Phone number must be numeric</small>
                            </form>
                            <button class="signup" @click="signUp">Sign Up</button>
                            <button class="signupgoogle"><img src="../../assets/google.png" alt="image4" style="margin-right: 14px;">Sign up with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <div class="box4">
            <div>
                <p class="text5">Get your member card now!</p>
                <p class="text6">Let's join with our member end enjoy the deals</p>
            </div>
            <button class="createnow">Create Now</button>
        </div>

        <footer>
            <div class="d-flex justify-content-between">
                <div class="box5">
                    <div class="box6">
                        <img class="img3" src="../../assets/coffee.png" alt="Image5">
                        <p class="text7">Coffe Shop</p>
                    </div>
                    <p class="text8">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
                    <a href="#"><img class="facebook" src="../../assets/facebook.png" alt="image6"></a>
                    <a href="#"><img class="twitter" src="../../assets/twitter.png" alt="image7"></a>
                    <a href="#"><img class="instagram" src="../../assets/instagram.png" alt="image8"></a>
                    <p class="text9">@2020CoffeStore</p>
                </div>
                <div class="box7">
                    <div class="product">
                        <p>Product</p>
                        <a href="#"><li>Download</li></a>
                        <a href="#"><li>Pricing</li></a>
                        <a href="#"><li>Locations</li></a>
                        <a href="#"><li>Countries</li></a>
                        <a href="#"><li>Blog</li></a>
                    </div>
                    <div class="engage">
                        <p>Engage</p>
                        <a href="#"><li>Coffe Shop ?</li></a>
                        <a href="#"><li>FAQ</li></a>
                        <a href="#"><li>About Us</li></a>
                        <a href="#"><li>Privacy Policy</li></a>
                        <a href="#"><li>Terms of Service</li></a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import { required, minLength, email, numeric } from 'vuelidate/lib/validators'
import { mapMutations } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      phoneNumber: ''
    }
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(8) },
    phoneNumber: { required, numeric }
  },
  methods: {
    ...mapMutations(['togglePassword']),
    signUp () {
      Swal.fire({
        title: 'Success',
        icon: 'success',
        showConfirmButton: false,
        timer: 1000
      })
    },
    submit () {
      this.$v.$touch()
      if (this.$v.$error) return
      alert('Form submitted')
    }
  }
}
</script>

<style scoped>
body {
    margin: 0px;
    padding: 0px;
}

.left {
    margin: 0px;
    padding: 0px;
}

.img1 {
    width: 100%;
    height: 100%;
}

.right {
    margin: 0px;
    padding: 0px;
}

.box {
    display: flex;
    justify-content: space-between;
}

.box1 {
    display: flex;
    flex-direction: row;
}

.img2 {
    width: 30px;
    height: 33px;

    margin-left: 55px;
    margin-top: 55px
}

.text {
    width: 122px;
    height: 24px;

    margin-left: 15px;
    margin-top: 59px;

    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;

    color: #0B132A;
}

.login {
    width: 150px;
    height: 45px;

    margin-top: 55px;
    margin-right: 55px;

    background: #FFBA33;
    border: none;
    border-radius: 50px;

    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    color: #6A4029;
}

.login:focus {
    outline: none;
}

.box2 {
    display: flex;
    justify-content: center;
}

.box3 {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.text1 {
    width: 133px;
    height: 41px;

    margin-top: 71px;

    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 41px;

    color: #6A4029;
}

.text2 {
    width: 157px;
    height: 25px;

    margin-top: 59px;
    margin-right: 300px;

    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;

    color: #4F5665;
}

.text3 {
    position: relative;
    width: 157px;
    height: 25px;

    margin-top: 32px;
    margin-right: 300px;

    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;

    color: #4F5665;
}

.text4 {
    width: 157px;
    height: 25px;

    margin-top: 32px;
    margin-right: 300px;

    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;

    color: #4F5665;
}

.email {
    width: 460px;
    height: 75px;

    padding-left: 30px;

    border: 1px solid #4F5665;
    box-sizing: border-box;
    border-radius: 20px;
}

.email:focus {
    outline: none;
}

.box-password {
    position: relative;
}

label {
    position: relative;
}

.password {
    width: 460px;
    height: 75px;

    padding-left: 30px;

    background-image: url('../../assets/eye-crossed.png');
    background-repeat: no-repeat;
    background-position: right;
    background-position-x: 400px;
    border: 1px solid #4F5665;
    box-sizing: border-box;
    border-radius: 20px;
}

.password:focus {
    outline: none;
}

.togglepassword {
    position: absolute;
    bottom: 570px;
    right: 130px;
}

.checkbox {
    position: absolute;
    top: 25px;
    right: 35px;

    width: 24px;
    height: 24px;

    opacity: 0;
}

.phonenumber {
    width: 460px;
    height: 75px;

    padding-left: 30px;

    border: 1px solid #4F5665;
    box-sizing: border-box;
    border-radius: 20px;
}

.phonenumber:focus {
    outline: none;
}

.signup {
    margin-top: 47px;

    width: 460px;
    height: 75px;

    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;

    color: #6A4029;

    background: #FFBA33;
    box-shadow: 0px 6px 20px rgba(255, 186, 51, 0.4);
    border: none;
    border-radius: 20px;
}

.signup:focus {
    outline: none;
}

.signupgoogle {
    margin-top: 26px;
    margin-bottom: 55px;

    width: 460px;
    height: 75px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 25px;

    color: #000000;

    box-shadow: 0px 6px 20px rgba(196, 196, 196, 0.67);
    border: none;
    border-radius: 20px;
}

.signupgoogle:focus {
    outline: none;
}

.d-flex footer {
    margin: 150px, 176px, 0px, 96px;
}

.box6 {
    display: flex;
    flex-direction: row;
}

.img3 {
    width: 30px;
    height: 33px;
}

.box4 {
    display: flex;
    justify-content: space-around;
    align-items: center;

    margin-left: auto;
    margin-right: auto;

    position: absolute;
    /* width: 75%;
    height: 35%; */
    width: 1140px;
    height: 233px;
    left: 170px;
    bottom: -540px;

    background: white;
    border: 10px;
    border-radius: 10px;
}

.text5 {
    width: 371.61px;
    height: 80px;

    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    line-height: 45px;

    display: flex;
    align-items: center;

    color: #0B132A;
}

.text6 {
    width: 410px;
    height: 16px;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;

    display: flex;
    align-items: center;

    color: #4F5665;
}

.createnow {
    width: 250px;
    height: 60px;

    background: #FFBA33;
    border: none;
    border-radius: 10px;

    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 25px;

    color: #6A4029;
}

.createnow:focus {
    outline: none;
}

footer {
    padding-top: 181px;
    background: #F8F8F8;
}

.box5 {
    margin-left: 150px;
}

.box7 {
    display: flex;
    margin-right: 150px;
}

.text7 {
    width: 122px;
    height: 24px;

    margin-left: 15px;

    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;

    color: #0B132A;
}

.text8 {
    width: 340px;
    height: 61.57px;

    margin-top: 22px;
    margin-bottom: 45px;

    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;

    color: #4F5665;
}

.facebook {
    margin-right: 20px
}

.twitter {
    margin-right: 20px;
}
.text9 {
    margin-top: 30px;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;

    color: #AFB5C0;
}

.product {
    margin-right: 126px;
}

.product p {
    width: 71px;
    height: 30px;

    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;

    color: #0B132A;
}

.product li {
    list-style: none;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;

    color: #4F5665;
}

.engage p {
    width: 66px;
    height: 30px;

    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;

    color: #0B132A;
}

.engage li {
    list-style: none;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;

    color: #4F5665;
}

/* Laptop L */
@media (max-width: 1440px) {
    .box4 {
        bottom: -700px;
    }
}

/* Laptop  */
@media (max-width: 1024px) {
    .box4 {
        height: 50%;
    }
}

</style>
