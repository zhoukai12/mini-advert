const request = require('./request.js');
const base = 'https://abyys.club/aiba_client_app';
// const base = 'http://xagzts.cn';
// const base = 'http://111.229.207.98:8080/app';
const ajax = {
  // 登录，获取token
  wxLogin(params = {}) {
    return request(`${base}/login`, 'POST', params, {
      contentType: 'application/x-www-form-urlencoded'
    });
  },
  // 登录
  getToken(params = {}) {
    return request(`${base}/login/config`, 'GET', params);
  },
  //调用条码支付
  payCode(params = {}){
    // params = Object.assign(params, {
    //   "merId": 104,
    //   "merchants_number": "1175065325",
    //   "number": "0.01"})
    return request(`${base}/pay/barCode`,'POST',params)
  },
  //根据订单列表编号查询
  getDBillDetail(params={}){
    return request(`${base}/billDetail/findById/${params.billDetailId}`, 'GET', params)
  },
  //
  getCode(params = {}) {
    return request(`${base}/SpWxUserController/decryptForWeChatApplet`, 'POST', params)
  },
  //会员余额支付
  memberPay(params = {}) {
    return request(`${base}/MerchantsMemberController/memberPay`, 'POST', params)
  }
};

module.exports = ajax;
