// pages/movie-detail/movie-detail.js
import {convertToCastString} from "../../utils/util"
Page({

    /**
     * 页面的初始数据
     */
    data: {
      movie:{},
      convertData:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const mid = options.mid
        wx.request({
          url: 'http://t.talelin.com/v2/movie/subject/'+mid,
          success:(res)=>{
            this.processMovieDSata(res.data)
            console.log(res.data)
            this.setData({
              movie:res.data
            })
          }
        })
    },
    onViewPost(){
      wx.previewImage({
        urls: [this.data.movie.images.large],
      })
    },
    processMovieDSata(movie){
      const convertData = {}
      convertData.name = convertToCastString(movie.directors)
      convertData.casts = convertToCastString(movie.casts)
      this.setData({
        convertData:convertData
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