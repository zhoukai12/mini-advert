//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    autoplay: true,
    circular: true,
    interval: 3000,
    previousMargin: 0,
    nextMargin: 0,
    initialTime: 0,   //视频初始时间
    current: 0,
    controls: false,
    videoPlay: false,
    loop: true,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  videoEnd(e){
    console.log(e)
    this.setData({
      autoplay: true,
      videoPlay: false,
      initialTime: 0,
      interval: 100,
      loop: false,
    },()=>{
      let videoContext = wx.createVideoContext('video1');
      // console.log(videoContext)
      videoContext.pause()
    })
    
  },

  //swiper改变事件
  swiperChange(e){
    let current = e.detail.current
    if(current==1){
      this.setData({
        autoplay: false,
        videoPlay: true,
        loop: true,
      },()=>{
        let videoContext = wx.createVideoContext('video1');
        // videoContext.seek(0)
        setTimeout(()=>{
          videoContext.play()
        },100)
      })
    }else{
      this.setData({
        interval: 3000,
        videoPlay: false
      })
    }
  },
  catchTouchMove(){},
  goOrderMeal(){
    //启动后屏小程序
    wxfaceapp.launchMp({
      appId: app.globalData.afterAppId,
      hostAppId: 'gh_f31628d08c4e',
      miniappType: 2,//小程序版本类型
      launchPage: "pages/index/index",
      needLogin: 0,//是否需要登录态
      success(res) {
        console.log('启动后屏小程序成功')
        app.globalData.isPhone=false
      },
      fail(res) {
        console.log('启动后屏小程序失败 = ' + res.reply)
        // originThz.setData({
        //   launcMpResult: res.reply
        // })
      }
    })
  },
  onLoad(options){
    console.log(options)
    if(options.id==1){

    }else{
      this.goOrderMeal()
    }
  },
  onReady: function (options) {
  },
  onShow(){
    // wxfaceapp.isLoginOnFaceApp({
    //   success() {
    //     //成功，说明此时青蛙App具备登录态，可以进行小程序内登录
    //     console.log("广告页有刷脸登录信息")
    //   },
    //   fail() {
    //     console.log("广告页无刷脸登录信息")
    //   }
    // })
  }
  
})
