//调试
const  baseUrl = 'http://localhost:8084';

//上线
// const  baseUrl = 'http://yb.upc.edu.cn:8084';


const API = {

  auth: baseUrl + '/auth',
  getStuInfo: baseUrl + '/photo/getphoto'

};

module.exports = API;
