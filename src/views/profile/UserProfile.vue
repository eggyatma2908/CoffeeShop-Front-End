<template>
    <div>
        <Header/>
        <main>
            <div class="container">
                <h6 class="text-main">User Profile</h6>
                <div class="row">
                    <div class="col-lg-3 box-profile">
                        <div class="box-image">
                            <img src="../../assets/user-profile.png" alt="user profile">
                            <div class="edit-image">
                                <a href="#"><img src="../../assets/edit.png" alt="edit" class="icon-edit"></a>
                            </div>
                        </div>
                        <h6 class="user-name">Zulaikha</h6>
                        <h6 class="user-email">zulaikha17@gmail.com</h6>
                        <h6 class="total-order">Has been ordered 15 products</h6>
                    </div>
                    <div class="col-lg-8 box-contact">
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
                                    <input type="email" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Mobile Number:</label>
                                    <input type="tel" class="form-control" pattern="[0][0-9]">
                                </div>
                            </form>
                        </div>
                        <form>
                            <div class="form-group">
                                <label class="form-label">Delivery address:</label>
                                <input type="text" class="form-control">
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 box-details">
                        <div class="top-edit-details">
                            <h6 class="text-details">Details</h6>
                            <div class="edit-details">
                                <a href="#"><img src="../../assets/edit.png" alt="edit" class="icon-edit"></a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-7">
                                <form>
                                    <div class="form-group">
                                        <label class="form-label">Display name:</label>
                                        <input type="text" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Fist name:</label>
                                        <input type="text" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Last name:</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </form>
                            </div>
                            <div class="col-lg-5 form-details-right">
                                <form>
                                    <div class="form-group">
                                        <label class="form-label">DD/MM/YY</label>
                                        <input type="date" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <input type="radio" name="gender" id="male" class="form-control">
                                        <label for="male" class="form-label"><span></span>Male</label>

                                        <input type="radio" name="gender" id="femal" class="form-control">
                                        <label for="female" class="form-label"><span></span>Female</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 edit-change">

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
export default {
  name: 'UserProfile',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
main {
    background-image: url('../../assets/bg-profile.png');
    background-size: cover;
    max-height: max-content;
}
.jumbotron {
    background-image: url('../../assets/bg-profile.png');
    background-size: cover;
    height: 1500px;
}

h6.text-main {
    font-weight: 500;
    font-size: 35px;
    line-height: 50px;

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

.box-profile .box-image .edit-image .icon-edit {
    width: 17px;
    height: 17px;
    position: absolute;
    left: -2px;
}

.box-profile .user-name {
    font-weight: bold;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    margin-top: 10px;

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
    height: 358px;
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
    left: 660px;
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
    height: 358px;
    margin-top: 70px;
}

.box-details .form-details-right form input {
    width: 250px;
}

.box-details .form-details-right form input[type="radio"] {
    width: 20px;
    border: 1px solid#9F9F9F;
}

.box-details .form-details-right form input[type="radio"] + label span {
    display: inline-block;
    width: 19px;
    height: 19px;
    margin: 1px 4px 0 0;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid#9F9F9F;
}

.box-details .form-details-right form input[type="radio"]:checked + label span {
    background: #FFBA33;
}

.edit-change {
    background: #FFFFFF;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.22);
    border-radius: 10px;
    width: 310px;
    height: 358px;
    margin-top: 70px;
    margin-left: 20px;
}
</style>
