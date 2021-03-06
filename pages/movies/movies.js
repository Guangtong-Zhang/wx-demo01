// pages/movies/movies.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        inTheaters:[],
        comingSoon:[],
        top250:[],
        isSearch:false,
        searchResult:[]
    },

    onGoToMoreMovie(event){
      const type = event.currentTarget.dataset.type
      const title = event.currentTarget.dataset.title
      wx.navigateTo({
        url: '/pages/more-movie/more-movie?type='+type+"&title="+title,
      })
    },

    onSearchConfirm(event){
      this.setData({
        isSearch:true
      })
      const search = event.detail.value
      wx.request({
        url: 'http://t.talelin.com/v2/movie/search',
        data:{
          q:search
        },
        success:(res)=>{
          console.log(res.data.subjects)
          this.setData({
            searchResult:res.data.subjects
          })
        }
      })
    },
    onSearchCancel(){
      this.setData({
        isSearch:false
      })
    },

    /**
     * 生命周期函数--监听页面加载
     */ 
    onLoad: function (options) {
        wx.request({
          url: 'http://t.talelin.com/v2/movie/in_theaters?start=0&count=3',
          success:(res)=>{
            this.setData({
                inTheaters:res.data.subjects
            })
          }
        }),
        wx.request({
            url: 'http://t.talelin.com/v2/movie/coming_soon?start=0&count=3',
            success:(res)=>{
              this.setData({
                comingSoon:res.data.subjects
              })
            }
          }),
          wx.request({
            url: 'http://t.talelin.com/v2/movie/top250?start=0&count=3',
            success:(res)=>{
              this.setData({
                top250:res.data.subjects
              })
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