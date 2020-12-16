<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12 page-main">
                <img src="../../assets/bg-page-forgot.png" alt="">
                <div class="col-lg-10 form-forgot-password">
                    <span>Forgot your password?</span>
                    <h6>Don’t worry, we got your back!</h6>
                    <form>
                        <div class="mb-3 mt-5 form-group">
                            <input type="email" class="form-control" placeholder="Enter your email adress to get link">
                            <button type="submit" @click.prevent="goSend" class="btn btn-send">Send</button>
                        </div>
                    </form>
                    <h6 class="text-timer">Click here if you didn’t receive any link in 2 minutes</h6>
                    <button type="submit" class="btn btn-resend">Resend</button>
                    <h6>{{countDown}}</h6>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <Footer/>
            </div>
        </div>
    </div>
</template>

<script>
import Footer from '../../components/module/Footer'
import Swal from 'sweetalert2'
export default {
  name: 'ForgotPassword',
  components: {
    Footer
  },
  data () {
    return {
      countDown: 20,
      email: ''
    }
  },
  methods: {
    countDownTimer () {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1
          this.countDownTimer()
        }, 1000)
      }
    },
    goSend () {
      Swal.fire({
        icon: 'success',
        title: 'please check your email',
        showConfirmButton: false,
        timer: 1500
      })
    }
  },
  created () {
    this.countDownTimer()
  }
}
</script>

<style scoped>
.col-lg-12 {
    margin: 0;
    padding: 0;
}

.page-main img {
    max-width: 100%;
    position: relative;
    background-size: contain;
}

.page-main .form-forgot-password {
    position: absolute;
    top: 200px;
    left: 130px;
}

.page-main .form-forgot-password h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    color: #FFFFFF;
    text-align: center;
    font-size: 27px;
    line-height: 40.5px;
}

.page-main .form-forgot-password span {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 64px;
    line-height: 96px;
    display: flex;
    justify-content: center;

    color: #FFFFFF;
}

.page-main .form-forgot-password form .form-group {
    display: flex;
}

.page-main .form-forgot-password form .form-group input {
    background: #FFFFFF;
    border-radius: 20px;
    width: 850px;
    height: 129px;
    font-size: 30px;
    line-height: 45px;

    color: #9F9F9F;
}

.page-main .form-forgot-password form .form-group .btn-send {
    background: #FFBA33;
    box-shadow: 0px 6px 20px rgba(255, 186, 51, 0.4);
    border-radius: 20px;
    width: 253px;
    height: 129px;
    font-weight: bold;
    font-size: 30px;
    line-height: 45px;
    text-align: center;
    margin-left: 20px;

    color: #6A4029;
}

.page-main .form-forgot-password form .form-group input:focus {
    border: 1px solid #4F5665;
    box-shadow: none;
}

.page-main .form-forgot-password h6.text-timer {
    font-weight: bold;
    font-size: 30px;
    line-height: 45px;
    margin-top: 100px;
    text-align: center;

    color: #FFFFFF;
}

.page-main .form-forgot-password .btn-resend {
    background: #6A4029;
    box-shadow: 0px 6px 20px rgba(106, 64, 41, 0.46);
    border-radius: 20px;
    font-weight: bold;
    font-size: 30px;
    line-height: 45px;
    text-align: center;
    width: 554px;
    height: 129px;
    color: #FFFFFF;
    margin: 60px auto;
    display: block;
}
</style>
