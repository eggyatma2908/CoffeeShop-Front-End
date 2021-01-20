<template>
    <main>
      <div class="title">
        <p class="title-desc"><span class="big-title">Let’s see what you have bought!</span><br>
        <span class="small-title">Long press to delete item</span></p>
      </div>
      <div class="history mx-auto mt-5 container-fluid p-0">
        <div class="container-fluid">
          <div class="card-history"  v-for="(order, index) in data.orderHistory" :key="index">
            <div class="box-history">
              <div class="card-image">
                <img :src="order.photoProduct" alt="">
              </div>
              <div class="card-product-detail">
                <p class="card-title-product">{{ order.productName }}</p>
                <p class="card-product-price">{{ order.basePrice }}</p>
                <p class="card-status-product">{{ order.deliveryStatus }}</p>
              </div>
            </div>
            <div>
              <div class="actions" alt="key" v-if="order.deliveryStatus === 'delivered'">
                <div class="delete-action" @click="handleDeleteProduct(order.id)">
                  <img src="../../assets/trash.png" alt="">
                </div>
                <div class="cancel-action">
                  <img src="../../assets/x.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
</template>

<script>
import Swal from 'sweetalert2'
import $ from 'jquery'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      timeOut: 0,
      longClick: 1,
      data: {
        orderHistory: []
      }
    }
  },
  methods: {
    ...mapActions(['getAllOrderHistory', 'deleteProduct']),
    async handleGetAllOrderHistory () {
      try {
        const result = await this.getAllOrderHistory()
        this.data.orderHistory = result
        console.log('result', result)
      } catch (error) {
        console.log('error', error)
      }
    },
    async handleDeleteProduct (id) {
      try {
        const result = await this.deleteProduct(id)
        console.log('result', result)
        this.handleGetAllOrderHistory()
      } catch (error) {
        console.log('error', error)
      }
    },
    cardHistoryOnClick () {
      $(document).on('click', '.card-history', function () {
        $(this).find('.actions').css('display', 'block')
      })
      $(document).on('click', '.cancel-action', function (e) {
        e.stopPropagation()
        $(this).parent().css('display', 'none')
        console.log('$(this).parent(dawd)', $(this).parent('.actions'))
      })
    },
    cardHistoryWhenReleaseClick () {
      $('.card-history').mouseup(function () {
        clearInterval(this.timeOut)
      })
    },
    deleteHistory () {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#6A4029',
        cancelButtonColor: '#FFBA33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }
  },
  mounted () {
    this.cardHistoryOnClick()
    this.handleGetAllOrderHistory()
  }
}
</script>

<style scoped>
* {
  font-family: Rubik;
  margin: 0;
}

main {
  padding:80px;
  height:max-content;
  background: url('../../assets/tyler-nix-jE-27l7V3NU-unsplash 2.png');
  object-fit:cover;
}

.title-desc {
  color:white;
  text-align:center;
}
.big-title{
  font-size:45px;
  font-weight:700;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
}
.container-fluid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.small-title{
  font-weight:200;
  font-size:25px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
}
.card-history{
  width: 350px;
  background-color:#FFFFFF;
  border-radius:20px;
  cursor: pointer;
  margin: 10px
}
.box-history {
  display: flex;
  flex-direction: row;
  padding: 10px
}
.card-image {
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin: 0 10px;
}
.card-image img{
  width:100%;
  height:100%;
  object-fit: cover;
  border-radius: 100px;
}
.card-title-product {
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  /* identical to box height */
  text-align: left;
}
.card-product-price {
  font-family: Poppins;
  font-style: 400;
  font-weight: normal;
  font-size: 20px;
  height:max-content;
  /* identical to box height */

  text-align: left;
  color: #895537;
}
.card-status-product {
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  /* identical to box height */
  color: #6A4029;
}
.actions {
  display: none;
  width: 0;
  height: 0;
}
.delete-action {
  position: absolute;
  top: -140px;
  left: 270px;
  width:50px;
  height:50px;
  border-radius:50%;
  background-color:#6A4029;
  position: relative;
  bottom:35px;
  right:70px;
}
.delete-action img {
  margin:17px 0 5px 17px;
  cursor: pointer;
}
.cancel-action {
  position: absolute;
  top: -190px;
  left: 320px;
  width:50px;
  height:50px;
  border-radius:50%;
  background-color:#FFBA33;
  position: relative;
  bottom:82px;
  right:20px;
}
.cancel-action img {
  margin:17px 0 5px 17px;
  cursor: pointer;
}
</style>
