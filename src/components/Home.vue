<template>
  <div>
    <auth></auth>

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 col-md-6">
          <div class="thumbnail">
            <img src="../assets/photo/logo.jpg" alt="">
            <div class="caption">
              <h3>2017级新生照片采集确认</h3>
              <router-link class="btn btn-primary btn-block" to="/photo">进入</router-link>
            </div>
          </div>
        </div>
      </div>

    </div>


  </div>
</template>

<script>
  import Auth from "./Auth.vue";

  export default {
    components: {Auth},
    name: 'Home',
    data: () => ({})
  }
</script>

<style scoped>

</style>
