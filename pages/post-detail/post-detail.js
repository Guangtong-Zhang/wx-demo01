// pages/post-detail/post-detail.js
import {
  postList
} from '../../data/data'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postDetailData: {},
    collected: false,
    _pid: null,
    _postCollected: {},
    isPlaying:false,
    _mgr:null,
    // a:{
    //   b:1
    // },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let b={
    //   c:3
    // }
    // this.data.a=b
    // b['c']=4
    // let e=this.data.a
    // for (let i in e){
    //   console.log(i+"=="+e[i])
    // }
    //页面详情数据
    const postDetailData = postList[options.pid]
    this.setData({
      postDetailData: postDetailData
    })
    //缓存
    this.data._pid = options.pid
    let postCollected = wx.getStorageSync('post_collected')
    if (postCollected == "" || postCollected == null) {
      postCollected = {}
    }

    let collected = postCollected[this.data._pid]
    if (typeof (collected) === 'undefined') {
      //let postCollected = wx.getStorageSync('post_collected')
      collected = false
      postCollected[this.data._pid] = collected
      wx.setStorageSync('post_collected', postCollected)
    }

    this.data._postCollected = postCollected
    this.setData({
      collected
    })
    const mgr = wx.getBackgroundAudioManager();
    this.data._mgr=mgr;
    mgr.onPlay(()=>{
      this.setData({
        isPlaying:true
      })  
    });
    mgr.onPause(()=>{
      this.setData({
        isPlaying:false
      })  
    });
    if(this.data._pid==app.gIsPlayingMusicPostId){
      this.setData({
        isPlaying : app.gIsPlayingMusic
      })
    }
    
    
  },

  async onCollect() {

    // wx.showToast({
    //   title: this.data.collected ? '收藏成功' : '取消收藏',
    //   duration: 3000
    // })
    const result = await wx.showModal({
      title: this.data.collected ? '是否取消收藏' : '是否收藏',
    })
    if (result.confirm) {
      //let postCollected = wx.getStorageSync('post_collected')
      let postCollected = this.data._postCollected
      postCollected[this.data._pid] = !this.data.collected
      //this.data.collected=!this.data.collected
      this.setData({
        collected: postCollected[this.data._pid]
      })
      wx.setStorageSync('post_collected', postCollected)
    }
  },
  onMusic(){
    const mgr =this.data._mgr
    mgr.src=this.data.postDetailData.music.url
    mgr.title=this.data.postDetailData.music.title
    mgr.coverImgUrl=this.data.postDetailData.music.coverImg
    app.gIsPlayingMusic=true
    app.gIsPlayingMusicPostId=this.data._pid

    this.setData({
      isPlaying:true
    })

  },
  stopMusic(){
    const mgr = this.data._mgr
    mgr.pause()
    app.gIsPlayingMusic=false
    app.gIsPlayingMusicPostId=null
    this.setData({
      isPlaying:false
    })
  },

  onShare(){
  onShareAppMessage()
  //   wx.showActionSheet({
  //     itemList: ['分享到QQ', '分享到微信', '分享到'],
  //     success (res) {
  //       console.log(res.tapIndex)
  //     },
  //     fail (res) {
  //       console.log(res.errMsg)
  //     }
  //   })
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