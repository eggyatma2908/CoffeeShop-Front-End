<template>
    <div class="col-lg-10 col-md-10 form-box">
        <div class="top">
            <img src="../../assets/coffee-logo.png" alt="coffee logo">
            <p class="coffee-shop">Coffee Shop</p>
            <button type="submit" class="btn sign-up" @click.prevent="goPageRegister">Sign Up</button>
        </div>

        <h6 class="login">Login</h6>

        <form>
            <div class="mb-3 mt-5 form-group">
                <label class="form-label">Email Address:</label>
                <input type="email" v-model.trim="$v.email.$model" :class="{ 'is-invalid': validationStatus($v.email) }" class="form-control" placeholder="Enter your email address">
                <div class="invalid-feedback" v-if="!$v.email.required">Field is required.</div>
                <div class="invalid-feedback" v-if="!$v.email.email">invalid email</div>
            </div>

            <div class="mb-3 form-group">
                <label class="form-label">Password:</label>
                <input type="password" id="password" v-model.trim="$v.password.$model" :class="{ 'is-invalid': validationStatus($v.password) }" class="form-control icon-password" placeholder="Enter your password">
                <input type="checkbox" class="toggle-password" @click="togglePassword">
                <div class="invalid-feedback" v-if="!$v.password.required">Field is required.</div>
                <div class="invalid-feedback" v-if="!$v.password.minLength">Field must have at least {{ $v.password.$params.minLength.min }} characters.</div>
            </div>

            <div class="mb-3">
                <router-link to="#" class="forgot-password">Forgot password?</router-link>
            </div>
            <button type="submit" class="btn btn-login" @click.prevent="goLogin">Login</button>
            <button type="submit" class="btn login-google"><img src="../../assets/google-logo.png" alt="">Login with Google</button>
        </form>
    </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import { mapMutations, mapActions } from 'vuex'
import Swal from 'sweetalert2'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) }
  },

  methods: {
    validationStatus (validation) {
      return typeof validation !== 'undefined' ? validation.$error : false
    },
    ...mapActions(['login']),
    goLogin () {
      this.$v.$touch()
      if (this.$v.$pendding || this.$v.$error) return
      const payload = {
        email: this.email,
        password: this.password
      }
      this.login(payload)
        .then(res => {
          Swal.fire({
            icon: 'success',
            title: 'success login',
            showConfirmButton: false,
            timer: 1500
          })
          this.$router.push('/home/product-customer')
        })
    },
    goPageRegister () {
      this.$router.push('/auth/register')
    },
    ...mapMutations(['togglePassword'])
  }
}
</script>

<style scoped>
.form-box {
    display: flex;
    flex-direction: column;
    position: relative;
}

.form-box .top {
    display: flex;
    margin-top: 35px;
}

.form-box .top img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
}

.form-box .top .coffee-shop {
    margin-top: 15px;
    margin-left: 5px;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #0B132A;
}

.form-box .top .btn.sign-up {
    border-radius: 50px;
    background: #FFBA33;

    width: 150px;
    height: 45px;
    font-weight: 500;
    line-height: 19px;
    margin-left: 210px;
    margin-top: 5px;
    font-weight: 500;
    font-size: 16px;
    padding-top: 3px;
    color: #6A4029;
}

.form-box .top .btn.sign-up:focus {
    outline: none;
    box-shadow: none;
}

.form-box .login {
    font-weight: bold;
    font-size: 35px;
    line-height: 41px;
    text-align: center;
    margin-top: 140px;

    color: #6A4029;
}

.form-box form .form-label {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;

    color: #4F5665;
}

.form-box form .form-control {
    background: #FFFFFF;
    border: 1px solid #4F5665;
    box-sizing: border-box;
    border-radius: 20px;
    width: 505px;
    height: 75px;
}

.form-box form .icon-password {
    background-image: url('../../assets/eye-crossed.png');
    background-repeat: no-repeat;
    background-position: right;
    background-position-x: 443px;
}

.form-box form .form-control:focus {
    border: 1px solid #4F5665;
    box-shadow: none;
}

.form-box form .is-invalid {
    border: 1px solid red;
}

.form-box form .is-invalid:focus {
    border: 1px solid red;
}

.form-box form .form-group {
    position: relative;
}

.form-box form .form-group .toggle-password {
    position: absolute;
    top: 65px;
    left: 450px;
    opacity: 0;
}

.form-box form .forgot-password {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-decoration-line: underline;

    color: #6A4029;
}

.form-box form .btn.btn-login {
    background: #FFBA33;
    box-shadow: 0px 6px 20px rgba(255, 186, 51, 0.4);
    border-radius: 20px;
    font-size: 20px;
    width: 505px;
    height: 75px;
    padding-top: 10px;
    color: #6A4029;
}

.form-box form .login-google {
    background: #FFFFFF;
    box-shadow: 0px 6px 20px rgba(196, 196, 196, 0.67);
    border-radius: 20px;
    font-size: 20px !important;
    width: 505px;
    height: 75px;
    padding-top: 15px;
    font-weight: bold;
    font-size: 17px;
    line-height: 25px;
    color: #000000 !important;
    margin-top: 20px;
    font-family: 'Poppins', sans-serif;
}

.form-box form .login-google img {
    padding-right: 10px;
}

@media (max-width: 1200px) {
    .form-box form .form-control {
        width: 400px;
    }
}
</style>
