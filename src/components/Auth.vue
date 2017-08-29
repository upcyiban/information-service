<template>
  <div>
  </div>
</template>

<script>
  import API from '../config/request'
  import qs from 'qs'
  import config from '../config/config'

  export default {
    name: 'auth',
    methods: {
      auth() {

        let verify_request = this.$route.query.verify_request;
        let ybid = this.$route.query.yb_uid;


        if (verify_request !== undefined) {
          //储存ybid
          localStorage.setItem('ybid', ybid);

          let postData = {
            appName: 'information-service',
            vq: verify_request
          };
          this.$http.post(API.auth, qs.stringify(postData)).then((res) => {

            if (res.data.token !== undefined) {

              //存token和vq
              localStorage.setItem('token', res.data.token);
              localStorage.setItem('vq', verify_request);
              localStorage.setItem('lastAuth', Date.parse(new Date()));

              window.location.href = config.front;
            }
          });
        }else {

          //localstorage中寻找vq,如果找到,判断上次认证时间是否超过1天，如果没超过则不用重复认证
          let vq = localStorage.getItem('vq');
          let lastDate = localStorage.getItem('lastAuth');
          let now = Date.parse(new Date());
          if (vq !== '') {
            if (now - lastDate > 86400000) { //认证时间大于1天
              this.toYibanAuth();
            }
          } else if (vq === '') {
            this.toYibanAuth();
          }

        }

      },
      toYibanAuth() {
        window.location.href = 'https://openapi.yiban.cn/oauth/authorize?client_id=' + config.APPID + '&redirect_uri=' + config.redirectUrl + '&display=html';
      }

    },
    mounted() {
      this.auth();
    }
  }
</script>
