<template>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="side-left">
                            <div class="icon">
                                <img src="../../assets/coffee-logo.png" alt="coffee logo">
                                <p class="coffee-shop">Coffee Shop</p>
                            </div>
                            <p class="about">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
                            <div class="icon-social-media">
                                <img src="../../assets/Facebook.png" alt="facebook logo">
                                <img src="../../assets/Twitter.png" alt="twitter logo">
                                <img src="../../assets/Instagram.png" alt="instagram logo">
                            </div>
                            <p class="copyright">©2020CoffeeStore</p>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="side-right-one">
                            <h6 class="product">Product</h6>
                            <ul>
                                <li><a href="">Download</a></li>
                                <li><a href="">Pricing</a></li>
                                <li><a href="">Locations</a></li>
                                <li><a href="">Countries</a></li>
                                <li><a href="">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="side-right-two">
                            <h6 class="Engage">Engage</h6>
                            <ul>
                                <li><a href="">Coffee Shop ?</a></li>
                                <li><a href="">FAQ</a></li>
                                <li><a href="">About Us</a></li>
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">Terms of Service</a></li>
                            </ul>
                        </div>
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
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;

    color: #AFB5C0;
}

footer .side-right-one,
footer .side-right-two {
    display: flex;
    flex-direction: column;
    margin-top: 150px;
}

footer .side-right-one .product,
footer .side-right-two .engage {
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    color: #0B132A;
}

footer .side-right-one ul li,
footer .side-right-two ul li {
    list-style-type: none;
    margin-top: 20px;
    margin-left: -40px;
    font-size: 16px;
    line-height: 30px;
    color: #4F5665;
}

footer .side-right-one ul li a,
footer .side-right-two ul li a {
    color: #4F5665;
}

footer .side-right-one ul li a:hover,
footer .side-right-two ul li a:hover {
    text-decoration: none;
}

</style>
