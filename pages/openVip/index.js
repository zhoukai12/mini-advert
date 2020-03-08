// pages/openVip/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  
  wxSlLogin(){
    wxfaceapp.faceLogin({
      //开启重复登录
      enableMultiLogin: true,
      //登录成功后，自动路由至此页面
      relaunchUrl: "pages/openVip/index",
      success(res) {
        console.log("[faceLogin] success")
        console.log(res.replyCode)
        console.log(res.reply)
      },
      fail(res) {
        console.log("[faceLogin] failed")
        console.log(res.replyCode)
        console.log(res.reply)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  bindGetUserInfo(e){
    console.log(e)
    if (!!e.detail.rawData){
      wx.login({
        success(res) {
          if (res.code) {
            //发起网络请求
           wx.getUserInfo({
            //  withCredentials: true,
             success: function (res) {
              console.log(res)
             }
           })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
    }
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})