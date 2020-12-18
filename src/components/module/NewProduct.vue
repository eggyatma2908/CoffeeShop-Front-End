<template>
    <div>
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
                                    <input type="time" class="form-control">
                                    <span>Select start hour</span>
                                    <!-- <input type="text" class="form-control timepicker"> -->
                                </div>
                                <div class="form-group">
                                    <input type="time" class="form-control">
                                    <span>Select end hour</span>
                                    <!-- <input type="text" class="form-control timepicker"> -->
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-6">
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
  name: 'NewProduct'
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

.delivery-hour form {
    position: relative;
}

.delivery-hour form .form-control {
    background: #FFFFFF;
    border: 1px solid #9F9F9F;
    box-sizing: border-box;
    border-radius: 20px;
    width: 391px;
    height: 83px;
}

/* .delivery-hour form span {
    position: ;
} */
</style>
