<template>
    <div>
        <Header/>
        <main>
            <div class="container">
                <h6 class="text-main">User Profile</h6>
                <div class="row">
                    <div class="col-lg-3 col-sm-12 col-12 box-profile">
                        <div class="box-image">
                            <img id="update-photo" :src="getUserData.photoProfile" alt="user profile">
                            <div class="edit-image">
                               <input id="input-upload-image" type="file" accept="image/x-png/,image/gif,image/jpeg"/>
                               <label for="input-upload-image"><img src="../../assets/edit.png" alt="edit" class="icon-edit"></label>
                            </div>
                        </div>
                        <h6 class="user-name">{{ getUserData.username ? getUserData.username : 'username has not been added ' }}</h6>
                        <h6 class="user-email">{{ this.getUserData.email ? this.getUserData.email : 'email has not been added' }}</h6>
                        <h6 class="total-order">Has been ordered 15 products</h6>
                    </div>
                    <div class="col-lg-8 col-12 box-contact">
                        <div class="top-edit">
                            <h6 class="text-contact">Contacts</h6>
                            <div class="edit-contact">
                                <a href="#"><img src="../../assets/edit.png" alt="edit" class="icon-edit"></a>
                            </div>
                        </div>
                        <div class="form-input">
                            <form>
                                <div class="form-group">
                                    <label class="form-label">Email address:</label>
                                    <input type="email" v-model.trim="$v.email.$model" :class="{ 'is-invalid': validationStatus($v.email) }" class="form-control">
                                    <div class="invalid-feedback" v-if="!$v.email.required">Field is required</div>
                                    <div class="invalid-feedback" v-if="!$v.email.email">invalid email</div>
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Mobile Number:</label>
                                    <input type="tel" v-model.trim="$v.mobileNumber.$model" :class="{ 'is-invalid': validationStatus($v.mobileNumber) }" class="form-control" pattern="[0][0-9]">
                                    <div class="invalid-feedback" v-if="!$v.mobileNumber.numeric">Only number</div>
                                    <div class="invalid-feedback" v-if="!$v.mobileNumber.required">Mobile Number required</div>
                                    <div class="invalid-feedback" v-if="!$v.mobileNumber.maxLength">phone number must not be more than 15 numbers</div>
                                </div>
                            </form>
                        </div>
                        <form>
                            <div class="form-group">
                                <label class="form-label">Delivery address:</label>
                                <input type="text" v-model.trim="$v.deliveryAddress.$model" :class="{ 'is-invalid': validationStatus($v.deliveryAddress) }" class="form-control">
                                <div class="invalid-feedback" v-if="!$v.deliveryAddress.minLength">home address too short</div>
                                <div class="invalid-feedback" v-if="!$v.deliveryAddress.required">deliverya ddress required</div>
                                <div class="invalid-feedback" v-if="!$v.deliveryAddress.maxLength">maximum letters is 200</div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 box-details ">
                        <div class="top-edit-details">
                            <h6 class="text-details">Details</h6>
                            <div class="edit-details">
                                <a href="#"><img src="../../assets/edit.png" alt="edit" class="icon-edit"></a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-7 details">
                                <form>
                                    <div class="form-group">
                                        <label class="form-label">Display name:</label>
                                        <input type="text" v-model.trim="$v.displayName.$model" :class="{ 'is-invalid': validationStatus($v.displayName) }" class="form-control">
                                        <div class="invalid-feedback" v-if="!$v.displayName.required">display name required</div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Fist name:</label>
                                        <input type="text" v-model.trim="$v.firstName.$model" :class="{ 'is-invalid': validationStatus($v.firstName) }" class="form-control">
                                        <div class="invalid-feedback" v-if="!$v.firstName.required">first name required</div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Last name:</label>
                                        <input type="text" v-model.trim="$v.lastName.$model" :class="{ 'is-invalid': validationStatus($v.lastName) }" class="form-control">
                                        <div class="invalid-feedback" v-if="!$v.firstName.required">last name required</div>
                                    </div>
                                </form>
                            </div>
                            <div class="col-lg-5 form-details-right">
                                <form>
                                    <div class="form-group">
                                        <label class="form-label">DD/MM/YY</label>
                                        <input type="date" v-model.trim="$v.bornDate.$model" :class="{ 'is-invalid': validationStatus($v.bornDate) }" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label class="label-radio">
                                            <input type="radio" value="male" v-model.trim="$v.gender.$model" :class="{ 'is-invalid': validationStatus($v.gender) }" name="gender" id="male" class="form-control">
                                            <span class="form-label">Male</span>
                                        </label>
                                        <label>
                                            <input type="radio" value="female" v-model.trim="$v.gender.$model" :class="{ 'is-invalid': validationStatus($v.gender) }" name="gender" id="femal" class="form-control">
                                            <span class="form-label">Female</span>
                                        </label>
                                       <div class="invalid-feedback" v-if="!$v.gender.required">display name required</div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 edit-change">
                        <h6 class="text-save-change">Do you want to save the change?</h6>
                        <button type="submit" @click="handleUpdateUserProfile" class="btn btn-save">Save Change</button>
                        <button type="submit" class="btn btn-cancel" @click="goBack">Cancel</button>
                        <button type="submit" class="btn btn-edit-password">Edit Password<img src="../../assets/arrow-right.png" alt=""></button>
                        <button type="submit" @click.prevent="handleLogout" class="btn btn-logout">Log out<img src="../../assets/arrow-right.png" alt=""></button>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
    </div>
</template>

<script>
import Header from '../../components/module/Header'
import Footer from '../../components/module/Footer'
import $ from 'jquery'
import { mapActions, mapGetters } from 'vuex'
import { required, email, numeric, maxLength, minLength } from 'vuelidate/lib/validators'
import Swal from 'sweetalert2'
export default {
  name: 'UserProfile',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      email: '',
      mobileNumber: '',
      deliveryAddress: '',
      displayName: '',
      firstName: '',
      lastName: '',
      bornDate: '',
      gender: '',
      photoProfile: []
    }
  },
  validations: {
    email: { required, email },
    mobileNumber: { required, numeric, maxLength: maxLength(15) },
    deliveryAddress: { required, minLength: minLength(10), maxLength: maxLength(255) },
    displayName: { required },
    firstName: { required },
    lastName: { required },
    bornDate: { required },
    gender: { required }
  },
  methods: {
    ...mapActions(['getDataUserById', 'updateUserProfile', 'logout']),
    userLogin () {
      const id = this.getUserData.id
      this.getDataUserById(id)
    },
    validationStatus (validation) {
      return typeof validation !== 'undefined' ? validation.$error : false
    },
    convertDate (dateString) {
      console.log(dateString)
      var p = dateString.split(/\D/g)
      return [p[0], p[1], p[2]].join('-')
    },
    dateObject () {
      return this.bornDate ? new Date(this.date) : null
    },
    handleUpdateUserProfile () {
      this.$v.$touch()
      if (!document.getElementById('input-upload-image').files[0]) {
        return Swal.fire({
          icon: 'error',
          title: 'Photo Profile cannot empty',
          text: 'please fill in your profile photo',
          showConfirmButton: false
        })
      }
      if (this.$v.$pendding || this.$v.$error) return

      const form = new FormData()
      form.append('photoProfile', document.getElementById('input-upload-image').files[0])
      form.append('email', this.email)
      form.append('phoneNumber', this.mobileNumber)
      form.append('address', this.deliveryAddress)
      form.append('username', this.displayName)
      form.append('firstName', this.firstName)
      form.append('lastName', this.lastName)
      form.append('bornDate', this.bornDate)
      form.append('gender', this.gender)
      const id = this.getUserData.id
      const payload = {
        id,
        formData: form
      }
      this.updateUserProfile(payload)
        .then(() => {
          this.$awn.success('Success update')
          this.userLogin()
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
    handleLogout () {
      localStorage.removeItem('vuex')
      this.logout()
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Succeed logout',
            showConfirmButton: false,
            timer: 1500
          })
          this.$router.push('/auth/login')
        })
    },
    assignInputField () {
      const { email, phoneNumber, address, username, firstName, lastName, bornDate, gender } = this.getUserData
      if (email || phoneNumber || address || username || firstName || lastName || bornDate || gender) {
        this.email = this.getUserData.email
        this.mobileNumber = this.getUserData.phoneNumber
        this.deliveryAddress = this.getUserData.address
        this.displayName = this.getUserData.username
        this.firstName = this.getUserData.firstName
        this.lastName = this.getUserData.lastName
        this.bornDate = this.convertDate(this.getUserData.bornDate)
        this.gender = this.getUserData.gender
      }
    },
    goBack () {
      this.$router.go(-1)
    }
  },
  mounted () {
    this.onInputUploadChange()
    this.assignInputField()
    this.userLogin()
  },
  computed: {
    ...mapGetters(['getUserData'])
  }
}
</script>

<style scoped>
main {
    background-image: url('../../assets/bg-profile.png');
    background-size: cover;
    max-height: max-content;
    background-repeat: no-repeat;
}

h6.text-main {
    font-weight: 500;
    font-size: 35px;
    line-height: 50px;
    padding-top: 60px;

    color: #FFFFFF;
}

.box-profile {
    background: #FFFFFF;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.22);
    border-radius: 10px;
    width: 310px;
    height: 358px;
    border-bottom: 12px solid #6A4029;
    margin-top: 50px;
}

.box-profile .box-image img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin-top: 20%;
    margin-left: 25%;
    border-radius: 50%;
}

.box-profile .box-image .edit-image {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #6A4029;
    position: absolute;
    top: 150px;
    left: 160px;
}

.box-profile .box-image .edit-image img {
    width: auto;
    height: auto;
    position: absolute;
    top: 1px;
    left: 1px;
}

.box-profile .user-name {
    font-weight: bold;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    margin-top: 10px;
    text-transform: capitalize;
    color: #000000;
}

.box-profile .user-email {
    font-weight: 400;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
}

.box-profile .total-order {
    font-size: 15px;
    line-height: 25px;
    text-align: center;

    color: #4F5665;
}

.box-contact {
    background: #FFFFFF;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.22);
    border-radius: 10px;
    width: 802px;
    height: max-content;
    margin-left: 20px;
    margin-top: 50px;
    border-bottom: 12px solid #6A4029;
    position: relative;
}

.box-contact .top-edit,
.box-details .top-edit-details {
    display: flex;
}

.box-contact .top-edit .edit-contact,
.box-details .top-edit-details .edit-details {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #6A4029;
    position: absolute;
    top: 15px;
    left: 700px;
}

.box-contact .top-edit .edit-contact img,
.box-details .top-edit-details .edit-details img {
    position: absolute;
    top: 6px;
    left: 7px;
}

.box-contact .text-contact,
.box-details .text-details {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 25px;
    line-height: 37px;
    color: #4F5665;
    margin-top: 10px;
    margin-left: 10px;
}

.box-contact .form-input form .form-group,
.box-contact form .form-group {
    float: left;
    margin-left: 10px;
    margin-top: 20px;
}

.box-contact .form-input form .form-group .form-label,
.box-contact form .form-group .form-label,
.box-details form .form-group .form-label {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #9F9F9F;
}

.box-contact .form-input form input,
.box-contact form input,
.box-details form input {
    border: none;
    border-bottom: 1px solid #000000;
    width: 330px;
}

.box-contact .form-input form input:focus,
.box-contact form input:focus,
.box-details form input:focus {
    outline: none;
    box-shadow: none;
}

.box-details {
    background: #FFFFFF;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.22);
    border-radius: 10px;
    width: 802px;
    height: max-content;
    margin-top: 70px;
    border-bottom: 12px solid #6A4029;
}

.box-details .form-details-right form input {
    width: 250px;
}

.box-details .form-details-right form .form-group {
    display: flex;
    flex-direction: column;
}

.box-details .form-details-right form .label-radio {
    margin-bottom: 20px;
}

.box-details .form-details-right form label > input[type="radio"] {
    display: none;
}

.box-details .form-details-right form label > input[type="radio"] + *::before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    margin: 1px 4px 0 0;
    border-radius: 50%;
    border-style: solid;
    border-width: 0.1rem;
    border-color: #9F9F9F;
}

.box-details .form-details-right form label > input[type="radio"]:checked + *::before {
    color: #6A4029;
    background: #FFBA33;
    border: 4px solid #6A4029;
}

.box-details .form-details-right form label > input[type="radio"]:checked + * {
    color: #6A4029;
}

.edit-change {
    width: 310px;
    height: 358px;
    margin-top: 70px;
    margin-left: 20px;
    margin-bottom: 100px;
}

.edit-change .text-save-change {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;
    text-shadow: 0px 6px 9px rgba(255, 255, 255, 0.21);
}

.edit-change button {
    margin-bottom: 10px;
}

.edit-change img {
    float: right;
    margin-top: 5px;
}

.edit-change .btn-save {
    font-family: 'Poppins', sans-serif;
    background: #6A4029;
    border-radius: 20px;
    width: 100%;
    height: 60px;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    color: #FFFFFF;
}

.edit-change .btn-cancel {
    font-family: 'Poppins', sans-serif;
    background: #FFBA33;
    border-radius: 20px;
    width: 100%;
    height: 60px;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    color: #6A4029;
}

.edit-change .btn-edit-password {
    font-family: 'Poppins', sans-serif;
    background: #FFFFFF;
    border-radius: 20px;
    width: 100%;
    height: 60px;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    color: #6A4029;
    text-align: left;
}

.edit-change .btn-logout {
    font-family: 'Poppins', sans-serif;
    background: #FFFFFF;
    border-radius: 20px;
    width: 100%;
    height: 60px;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    color: #6A4029;
    text-align: left;
}
#input-upload-image {
  display:none;
}

</style>
