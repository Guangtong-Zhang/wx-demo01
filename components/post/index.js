// components/post/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        item:Object
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
        onTap(event){
            // console.log(event)
            // const pid = event.currentTarget.dataset.id
            // wx.navigateTo({
            //   url: '/pages/post-detail/post-detail?pid='+pid,
            // }) 
            const pid = this.properties.item.postId
            this.triggerEvent('postTap',{
                pid:pid
            })
        },
    }
})
