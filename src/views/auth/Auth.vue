<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 col-md-12">
                <div class="background-image">
                    <img src="../../assets/bg-login.png" alt="background login">
                </div>
            </div>
            <div class="col-lg-6 col-md-12 side-right">
                <router-view/>
            </div>
            <Footer/>
        </div>
        <div class="row">
            <div class="col-lg-10 member-card">
                <div class="col-lg-6">
                    <h6 class="title">Get your member card now!</h6>
                    <p class="paragraph">Let's join with our member and enjoy the deals.</p>
                </div>
                <div class="col-lg-6">
                    <button type="submit" class="btn create">Create Now</button>
                    <!-- <Button type="submit" class="btn create" name="Create Now"/> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Footer from '../../components/module/Footer'
export default {
  name: 'Auth',
  components: {
    Footer
  }
}
</script>

<style scoped>
.col-lg-6 {
    padding: 0 !important;
}
.background-image img {
    margin: 0;
    padding: 0;
}

.side-right {
    background: #FFFFFF;
    display: flex;
    justify-content: center;
}

.row {
    position: relative;
}

.member-card {
    background: #FFFFFF;
    border-radius: 10px;
    width: 1140px;
    height: 223px;
    position: absolute;
    top: -660px;
    left: 110px;
    display: flex;
}

.member-card .title {
    font-weight: 500;
    font-size: 35px;
    line-height: 45px;
    margin-left: 50px;
    margin-right: 120px;
    margin-top: 50px;

    display: flex;
    align-items: center;

    color: #0B132A;
}

.member-card .paragraph {
    line-height: 30px;
    margin-left: 50px;

    color: #4F5665;
}

.member-card .btn.create {
    background: #FFBA33;
    border-radius: 10px;
    width: 250px;
    height: 60px;
    font-weight: bold;
    font-size: 16px;
    line-height: 25px;
    color: #6A4029;
    margin-top: 90px;
    margin-left: 200px;
}

@media (max-width: 987px) {
    .background-image img {
        max-width: 100%;
    }
}
</style>
