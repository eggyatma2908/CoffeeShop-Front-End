<template>
    <footer>
        <div class="d-flex justify-content-between">
            <div class="box5">
                <div class="box6">
                    <img class="img3" src="../../assets/coffee.png" alt="Image5">
                    <p class="text7">Coffe Shop</p>
                </div>
                <p class="text8">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
                <a href="#"><img class="facebook" src="../../assets/Facebook.png" alt="image6"></a>
                <a href="#"><img class="twitter" src="../../assets/Twitter.png" alt="image7"></a>
                <a href="#"><img class="instagram" src="../../assets/Instagram.png" alt="image8"></a>
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
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
    width: 100%;
    height: 528px;
    background: #F8F8F8;
}

footer .side-left {
    margin-top: 150px;
    margin-right: 100px;
}

footer .side-left .icon {
    display: flex;
}

footer .side-left .icon img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
}

footer .side-left .icon .coffee-shop {
    margin-top: 15px;
    margin-left: 5px;
    font-weight: bold;
    font-size: 20px;
    line-height: 10px;
    color: #0B132A;
}

footer .side-left .about {
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: #4F5665;
    margin-top: 20px;
}

footer .side-left .icon-social-media {
    display: flex;
}

footer .side-left .copyright {
    padding-top: 181px;
    background: #F8F8F8;
}

.box5 {
    margin-left: 150px;
}

.box6 {
    display: flex;
}

.img3 {
    width: 30px;
    height: 33px;
}

.box7 {
    display: flex;
    margin-right: 150px;
}

.text7 {
    width: max-content;
    height: max-content;

    margin-top: 5px;
    margin-left: 15px;

    font-family: 'Rubik', sans-serif;
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

    font-family: 'Rubik', sans-serif;
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

    font-family: 'Rubik', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;

    color: #AFB5C0;
}
</style>
