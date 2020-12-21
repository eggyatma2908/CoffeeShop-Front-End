<template>
    <main>
      <div class="title">
        <p class="title-desc"><span class="big-title">Let’s see what you have bought!</span><br>
        <span class="small-title">Long press to delete item</span></p>
      </div>
      <div class="history mx-auto mt-5 container-fluid p-0">
        <div class="row">
          <div class="col-4 row-gap">
            <div class="card-history p-0" id="x">
              <div class="row">
                <div class="col-4 p-2">
                  <div class="card-image mx-auto">
                    <img src="../../assets/image-card-history.png" alt="">
                  </div>
                </div>
                <div class="col-7 p-0">
                  <div class="card-product-detail p-2">
                    <p class="card-title-product">Veggie tomato mix</p>
                    <p class="card-product-price">IDR 34.000</p>
                    <p class="card-status-product">Delivered</p>
                  </div>
                  <div>
                  </div>
                </div>
                <div class="col-1 p-0">
                  <div class="actions" alt="key">
                    <div class="delete-action">
                      <img @click="deleteHistory" src="../../assets/trash.png" alt="">
                    </div>
                    <div class="cancel-action" id="cancel">
                      <img @click="cancelAction" src="../../assets/x.png" alt="">
                    </div>
                  </div>
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

export default {
  data () {
    return {
      timeOut: 0,
      longClick: 1
    }
  },
  methods: {
    cardHistoryOnClick () {
      const self = this
      $('.card-history').mousedown(function () {
        this.timeOut = setInterval(() => {
          self.longClick++
          if (self.longClick >= 1) {
            this.style.opacity = '70%'
            $('[alt="key"]').css('display', 'block')
            self.longClick = 0
          }
        }, 500)
      })
    },
    cardHistoryWhenReleaseClick () {
      const self = this
      $('.card-history').mouseup(function () {
        console.log(self.longClick)
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
    },
    cancelAction () {
      document.getElementById('cancel').addEventListener('click', function () {
        document.getElementById('x').style.display = 'none'
        document.getElementById('cancel').style.display = 'none'
      })
    }
  },
  mounted () {
    this.cardHistoryOnClick()
    this.cardHistoryWhenReleaseClick()
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
.small-title{
  font-weight:200;
    font-size:25px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
}

.card-history{
  padding:20px;
  height:126px;
  background-color:#FFFFFF;
  border-radius:20px;
  cursor: pointer;
}
.row-gap {
  margin-top:30px;
}
.card-image {
  width: 100px;
  height: 100px;
  border-radius: 100px;
}
.card-image img{
  width:100%;
  height:100%;
  object-fit: cover;
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
}
.delete-action {
  width:50px;
  height:50px;
  border-radius:50%;
  background-color:#FFFFFF;
  position: relative;
  bottom:35px;
  right:75px;
}
.delete-action img {
  margin:14px 0 5px 13px;
  cursor: pointer;
  border-color:#FFFFFF;
}
.cancel-action {
  width:50px;
  height:50px;
  border-radius:50%;
  background-color:#FFBA33;
  position: relative;
  bottom:84px;
  right:20px;
}
.cancel-action img {
  margin:18px 0 5px 17px;
  cursor: pointer;
}
</style>
