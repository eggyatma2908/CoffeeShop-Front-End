<template>
  <main>
    <p class="title-text">Checkout your <br />item now!</p>
    <div class="row">
      <div style="background-color: pink" class="col-6 p-0">
        <div class="card-order p-5">
          <p class="card-order-title">Order Summary</p>
          <div class="card-order-list row">
            <div class="card-order-photo col-3">
              <img src="../../assets/image 36.png" />
            </div>
            <div class="col-6">
              <p>Hazelnut Latte</p>
              <p>x 1</p>
              <p>Regular</p>
            </div>
            <div class="col-3"></div>
          </div>
        </div>
      </div>
      <div class="col-6"></div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'PaymentDelivery'
}
</script>

<style scoped>
main {
  padding: 80px;
  height: max-content;
  background: url("../../assets/nathan-dumlao-zTZRZV86GhE-unsplash 1.png");
  object-fit: cover;
}
.title-text {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 47px;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
}
.card-order {
  width: 487px;
  height: 737px;
  background-color: black;
}
.card-order-title {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 52px;
  /* identical to box height */

  color: #362115;
  text-align: center;
}
</style>
