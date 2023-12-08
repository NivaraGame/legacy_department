<template>
  <div class="d-flex">
    <GoogleMap api-key="AIzaSyB1GhrKvPtal9CuIvyQYEC7hCeV9Vvq56E" style="margin: 10% 10% 10% 0; width: 580px; height: 500px"
               :center="center" :zoom="4">
      <Marker :options="{ position: center }"/>
    </GoogleMap>

    <div style="margin-top: 80px ">
      <h1 class="mt-5">Контакти з нами</h1>
      <a href="#" style="font-size: 20px">Зв'яжіться з нашими менеджерами</a>
      <p class="mt-3">Гаряча лінія</p>
      <div class="d-flex justify-content-between">
        <p>Kievstar:</p><a href="#" class="ml-1" style="white-space: nowrap">+380 98 883 14 88</a>
        <p class="ml-3">Life:</p><a href="#" class="ml-1" style="white-space: nowrap">+380 66 666 66 66</a>
      </div>
      <p>Наша адреса</p>
      <p><a href="#" style="font-size: 23px">Yeti House</a></p>
    </div>
  </div>

</template>

<script>
import {defineComponent} from "vue";
import {GoogleMap, Marker} from "vue3-google-map";
export default defineComponent({
  components: {GoogleMap, Marker},
  setup() {
    const center = {lat: 35.184077, lng: -41.660045};

    return {center};
  },
});
</script>

<style scoped>

</style>