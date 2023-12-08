<template>
  <div class="container-fluid badge-dark p-5 mt-2" style="border-top: 2px solid black">
    <div class="d-flex flex-row justify-content-between">
      <div>
        <h4 class="mb-5">MOUK</h4>
        <div style="line-height: 3px">
          <p style="font-size: 13px">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p style="font-size: 13px">Ipsum iste sunt voluptas. Cum facilis in iusto obcaecati quasi totam?</p>
        </div>
      </div>
      <div class="d-flex flex-column">
        <h5>Explore</h5>
        <router-link to="/gallery" class="text-decoration-none btn" style="color: #d2caca; margin-top:10px">Gallery</router-link>
        <router-link to="/about" class="text-decoration-none btn" style="color: #d2caca; margin-top:10px">About us</router-link>
        <router-link to="/contact" class="text-decoration-none btn" style="color: #d2caca; margin-top:10px">Contact us</router-link>
      </div>
      <div>
        <h3 class="mb-4">Join Our Weekly Digest </h3>
        <p style="color: #d2caca; margin-top:10px">Get exclusive promotions & updates straight to your inbox.</p>
        <div class="input-group">
          <input class="form-control" aria-label="With textarea">
          <button type="button" class="btn btn-success">Success</button>
        </div>
      </div>
    </div>
    <hr style="border-color: #ffffff">
    <p>
      Create by support of MITIT
    </p>
    <div></div>
  </div>
</template>

<script>
import '../assets/font/fontawesome-free-5.15.4-web/js/all'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "Footer",
  components: {FontAwesomeIcon}
}
</script>

<style scoped>

</style>