// components/movie-list/index.js
Component({

    externalClasses:['movie-list-class'],

    /**
     * 组件的属性列表
     */
    properties: {
        title:String,
        movies:Array
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
        onGoToMoreMovie(){
            this.triggerEvent('onGoToMoreMovie')
        }

    }
})
