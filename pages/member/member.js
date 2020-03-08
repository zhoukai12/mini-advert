// pages/member/member.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardInfo: {},
    data: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    app.updateTitle("会员信息");
  },
  bindGetUserInfo(e) {
    let that = this;
    // wxfaceapp.isLoginOnFaceApp({
    //   success() {
    //     //成功，说明此时青蛙App具备登录态，可以进行小程序内登录
    //     console.log("会员卡页有刷脸登录信息")
    //     console.log(e)
        if (!!e.detail.rawData) {
          wx.login({
            success(res) {
              if (res.code) {
                //发起网络请求
                app.$api.getCode({
                  "code": "",
                  "encryptedData": e.detail.encryptedData,
                  "iv": e.detail.iv,
                  "sn": "TXAP11939002689ND002112"
                }).then(resp => {
                  console.log(resp)
                  // if (!!resp.data.data.merchantsMember) {
                  //   that.setData({
                  //     cardInfo: resp.data.data.merchantsMember
                  //   })
                  // } else {
                  //   that.setData({
                  //     data: {
                  //       encrypt_card_id: decodeURIComponent(resp.data.data.encrypt_card_id),
                  //       biz: decodeURIComponent(resp.data.data.biz),
                  //       outer_str: resp.data.data.outer_str
                  //     }
                  //   },()=>{
                  //     console.log(that.data)
                  //   })
                  // }
                }).catch(res => {
                  console.log(res)
                })
              } else {
                console.log('登录失败！' + res.errMsg)
              }
            }
          })
        }
      // },
      // fail() {
      //   console.log("会员卡页无刷脸登录信息")
      //   wxfaceapp.faceLogin({
      //     //开启重复登录
      //     enableMultiLogin: true,
      //     //登录成功后，自动路由至此页面
      //     relaunchUrl: "pages/member/member",
      //     success(res) {
      //       console.log("[faceLogin] success")
      //       console.log(res.replyCode)
      //       console.log(res.reply)
      //     },
      //     fail(res) {
      //       console.log("[faceLogin] failed")
      //       console.log(res.replyCode)
      //       console.log(res.reply)
      //     }
      //   })
      // }
    // })

  },

  openVip(){
    let that=this;
    wx.navigateToMiniProgram({
      appId: 'wxeb490c6f9b154ef9', //固定为此 appid，不可改动
      extraData: that.data.data, // 包括 encrypt_card_id, outer_str, biz三个字段，须从 step3 中获得的链接中获取参数
      success: function (data) {
        console.log('success')
        console.log(data)
      },
      fail: function () {
        console.log('fail')
      },
      complete: function () {
        console.log('complete')
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

    // wxfaceapp.faceLogin({
    //   //开启重复登录
    //   enableMultiLogin: true,
    //   //登录成功后，自动路由至此页面
    //   relaunchUrl: "pages/member/member",
    //   success(res) {
    //     console.log("[faceLogin] success")
    //     console.log(res.replyCode)
    //     console.log(res.reply)
    //   },
    //   fail(res) {
    //     console.log("[faceLogin] failed")
    //     console.log(res.replyCode)
    //     console.log(res.reply)
    //   }
    // })
  },
  vipEnd(e) {
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    // console.log(e)

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})