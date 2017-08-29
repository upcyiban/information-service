<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-md-12 ">
        <div class="thumbnail">
          <div class="caption">
            <div class="alert alert-success" role="alert">该应用仅供2017级新生使用</div>
            <h3>你好 {{ user.name }}</h3>
            <br>
            <h4 v-if="!user.isExist">
              没有发现的照片信息，请到指定信息采集处采集。
            </h4>
            <div v-if="user.isExist">
              <h4>这是你信息采集到照片，您还满意吗?如果不满意请到指定信息采集地点重新采集</h4>
              <img :src="user.url" alt="">
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import config from '../config/config'
  import API from '../config/request'

  export default {
    name: 'PhotoCollection',
    data: () => ({
      user: {
        isExist: '',
        name: '',
        stuId: '',
        url: ''
      }
    }),
    mounted() {
      this.getStuId()
//      console.log(this.isExist('http://element.eleme.io/#/zh-CN/component/installation'))

    },
    methods: {
//      isExist(url) {
//        this.$http.get(url).then((res) => {
//          console.log(res);
//          return res.status === 200;
//        });
//
//      },
      getStuId() {

        //获取stuid
        let token = localStorage.getItem('token');
        if (token === null) {
          window.location.href = config.front;
        }
        let sendData = {
          Authorization: token

        };
        let self = this;
        this.$http.get(API.getStuInfo, {params: sendData}).then((res) => {
          self.user.isExist = res.data.isExist;
          self.user.name = res.data.name;
          self.user.stuId = res.data.stuId;
          self.user.url = res.data.url + '?Authorization=' + token;
        });



      }
    }
  }
</script>

<style scoped>

</style>
