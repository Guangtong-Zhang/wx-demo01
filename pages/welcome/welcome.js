// pages/welcome/welcome.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
       

    },

    /**
     * 组件的方法列表
     */
    methods: {
        onTap:function (params) {
            wx.switchTab({
              url: '/pages/posts/posts',
            })
            // wx.redirectTo({
            //   url: '/pages/posts/posts',
            // })
            // wx.navigateTo({
            //   url: '/pages/posts/posts',
            // })
        },

    }
})
