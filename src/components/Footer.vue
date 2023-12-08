<template>
  <div class="container-fluid badge-dark p-5 mt-2" style="border-top: 2px solid black">
    <div class="d-flex flex-row justify-content-between">
      <div>
        <h4 class="mb-5">MOUK</h4>
        <div style="line-height: 3px">
          <p style="font-size: 13px">2001—2023 Міністерство оборони України</p>
        </div>
      </div>
      <div class="d-flex flex-column align-items-start">
        <h5>Наігація</h5>
        <router-link to="/gallery" class="text-decoration-none btn" style="color: #d2caca; margin-top:10px">Галерея</router-link>
        <router-link to="/about" class="text-decoration-none btn" style="color: #d2caca; margin-top:10px">Про нас</router-link>
        <router-link to="/contact" class="text-decoration-none btn" style="color: #d2caca; margin-top:10px">Зв'язатися з нами</router-link>
      </div>
      <div>
        <h3 class="mb-4">Задай запитання </h3>
        <p style="color: #d2caca; margin-top:10px">Наші спеціалісти зв'яжуться з вами</p>
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