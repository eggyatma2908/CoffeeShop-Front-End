<template>
  <div style="height:100vh;" class="containerfluid d-flex flex-column justify-content-center align-items-center">
    <!-- HIDDEN PREHEADER TEXT -->
    <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: 'Lato', Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;"> We're thrilled to have you here! Get ready to dive into your new account. </div>
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <!-- LOGO -->
        <tr>
            <td bgcolor="#6A4029" align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td align="center" valign="top" style="padding: 40px 10px 40px 10px;"> </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor="#6A4029" align="center" style="padding: 0px 10px 0px 10px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">
                            <h1 style="font-size: 48px; font-weight: 400; margin: 2;">Welcome!</h1>
                            <div class="box">
                                <img class="img1" src="../../assets/coffee.png" alt="image1">
                                <p class="text">Coffee Shop</p>
                            </div>
                            <img src=" https://img.icons8.com/clouds/100/000000/handshake.png" width="125" height="120" style="display: block; border: 0px;" />
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                            <p style="margin: 0;">We're excited to have you get started. First, you need to confirm your account. Just press the button below.</p>
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#ffffff" align="left">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td bgcolor="#ffffff" align="center" style="padding: 20px 30px 60px 30px;">
                                        <table border="0" cellspacing="0" cellpadding="0">
                                            <button style="background: #FFBA33;" v-on:click.prevent="emailVerification" class="btn btn-secondary">Verify your email</button>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  name: 'EmailVerification',
  methods: {
    emailVerification () {
      return axios.patch(`${process.env.VUE_APP_URL_API}/emailVerification/emailverification`, {
        email: `${this.$route.params.email}`
      }, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
        .then(res => {
          console.log(res, 'halo')
          Swal.fire({
            icon: 'success',
            title: 'Email has been verified',
            showConfirmButton: false,
            timer: 1500
          })
          this.$router.push('/auth/login')
        })
    },
    checkEmailVerified () {
      return axios.get(`${process.env.VUE_APP_URL_API}/emailVerification/checkEmailVerified`, {
        headers: {
          email: `${this.$route.params.email}`
        }
      })
        .then(() => {
          console.log('udah ada')
        })
        .catch(() => {
          alert('Forbidden: Your account has been verified before')
          this.$router.push('/auth/login')
        })
    }
  },
  created () {
    this.checkEmailVerified()
  }
}
</script>

<style scoped>
</style>
