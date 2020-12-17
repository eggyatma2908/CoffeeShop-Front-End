<template>
    <main>
      <div class="card-room-chat row">
        <div class="card-room-chat-left col-5 p-5">
          <div class="search-box">
            <input type="text" class="search-input" placeholder="Search Chat" />
            <div class="input-icon">
              <img src="../../assets/Vector.png" alt="" />
            </div>
          </div>
          <p class="text-desc text-center mt-3">
            Choose a staff you want to talk with
          </p>
          <div class="list-chat-master p-0 mt-5">
            <div class="chat-master m-0 mt-3 row">
              <div class="col-2 p-0">
                <div class="master-photo">
                  <img src="../../assets/image 48.png" alt="" />
                </div>
              </div>
              <div class="col-10">
                <div class="detail-master pl-4">
                  <p class="master-name m-0">Jason</p>
                  <p class="message-to-master m-0">
                    Hey, I’m Jason, Let’s talk and share what’s on your
                    thoughts!
                  </p>
                </div>
              </div>
            </div>
            <div class="chat-master m-0 mt-3 row">
              <div class="col-2 p-0">
                <div class="master-photo">
                  <img src="../../assets/image 49.png" alt="" />
                </div>
              </div>
              <div class="col-10">
                <div class="detail-master pl-4">
                  <p class="master-name m-0">Cheryn</p>
                  <p class="message-to-master m-0">
                  Hey, I’m Cheryn, can I help you? Just chat me if you have some trouble in ordering, happy shopping!                  </p>
                </div>
              </div>
            </div>
            <div class="chat-master m-0 mt-3 row">
              <div class="col-2 p-0">
                <div class="master-photo">
                  <img src="../../assets/image 50.png" alt="" />
                </div>
              </div>
              <div class="col-10">
                <div class="detail-master pl-4">
                  <p class="master-name m-0">Lou</p>
                  <p class="message-to-master m-0">
                   Hey, I’m Lou, I’ll here to help you, just talk to me and we solve the problme. Have a good day!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-room-chat-right col-7 p-4">
          <p class="text-title">jason</p>
          <div class="live-chat m-0 mt-5 p-0 row">
              <div class="col-10">
                <p class="live-chat-message-send m-0 mt-1">
                  Hey jason, I can’t find the promo section. Can u tell me where is it?
                </p>
                <div class="status-message d-flex">
                <p class="text-left status-time">
                  02.19 PM
                </p>
                <div class="icon-status ml-2">
                   <img class="text-left float-left" src="../../assets/check-symbol (1) 10.jpg" alt="">
                </div>
                </div>
              </div>
              <div class="col-2 p-0">
                <div class="live-chat-photo">
                  <img src="../../assets/image 48.png" alt="" />
                </div>
              </div>
          </div>
          <div class="live-chat m-0 p-0 mt-5 row">
             <div class="col-1 p-0">
                <div class="live-chat-photo">
                  <img src="../../assets/image 48.png" alt="" />
                </div>
              </div>
              <div class="col-10">
                <p class="live-chat-message-receive m-0 mt-1 p-1 pl-3">
                  Hey jason, I can’t find the promo section. Can u tell me where is it?
                </p>
                <p class="text-right status-time">
                  02.19 PM
                </p>
              </div>
          </div>
        </div>
      </div>
    </main>
</template>

<script>
export default {

}
</script>

<style scoped>
main {
  padding: 80px;
  height: max-content;
  background: url("../../assets/joshua-ness--bEZ_OfWu3Y-unsplash 1.png");
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.card-room-chat {
  width: 90%;
  height: max-content;
  background-color: #ffffff;
  margin: auto auto;
  border-radius: 20px;
}
.card-room-chat-left {
  background-color: #6a4029;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
}
.card-room-chat-right {
  background-color: #ffffff;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
}
.search-input {
  width: 100%;
  height: 60px;
  display: block;
  margin: auto auto;
  border-radius: 30px;
  padding-left: 50px;
  box-sizing: border-box;
  outline: none;
  border:none;
}
.input-icon {
  position: relative;
  left: 20px;
  bottom: 42px;
}
.list-chat-master {
  overflow-y: auto;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 700px;
}

.chat-master {
  width: 100%;
  padding: 0 0 20px 0 ;
  border-bottom: 1px solid white;
}
.master-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.master-photo {
  width: 80px;
  border-radius: 100px;
}
.master-name {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  /* identical to box height */

  color: #ffffff;
}
.message-to-master {
  font-family: Poppins;
  font-style: normal;
  font-weight: 200;
  font-size: 15px;
  /* identical to box height */

  color: #ffffff;
  letter-spacing: 1px;
}
.text-desc {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  /* identical to box height */

  color: #ffffff;
  letter-spacing: 0.5px;
}
.text-title {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  /* identical to box height */
  color: #4F5665;
}
.live-chat-photo {
  width:60px;
}
.live-chat {
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(196,196,196,0.5);
}
.live-chat-photo img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.live-chat-name {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */
  color: #4F5665;
}
.live-chat-message-send {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  text-align:right;
  color: #4F5665;
}
.live-chat-message-receive {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  text-align:left;
  color: #4F5665;
}
.status-time {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  /* identical to box height */
  color: #9F9F9F;
}
</style>
