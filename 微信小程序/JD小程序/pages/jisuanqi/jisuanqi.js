// pages/jisuanqi/jisuanqi.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        xianshi:'',
        zong:'',
        fh:'',
        qc:0,
        ys:''

    },
    an:function(e) {
        // 获取按钮
        if(this.data.qc==1){
            this.setData({
                xianshi:'',
                qc:0,
                fh:'',
                
            })
        }
 
        var id= e.target.id
        // 判断是什么

        if(id=="C"){
            this.setData({
                xianshi:'',
                fh:'',
                ys:''
            })
            return
        }
        else if(id=="DEL"){
            var xs= this.data.xianshi.slice(0,this.data.xianshi.length-1)
            var ys1= this.data.ys.slice(0,this.data.ys.length-1)
            console.log(xs)
            this.setData({
                xianshi:xs,
                ys:ys1
                
            })
           
            return
        }
        else if(id=="+"||id=="-"||id=="*"||id=="/"||id=="%"){
            var id=id
            var ys1=this.data.ys+id
                
            console.log(id)
            this.setData({
                fh:id,
                qc:1,
                ys:ys1
            })
            return
        }
        else if(id=="="){
            console.log(this.data.ys)
            var zz=this.data.ys.split("+")
            zz=parseFloat(zz[0])+parseFloat(zz[1])
            this.setData({
                xianshi:zz,
                ys:zz
            })
            return
        }
      
        this.setData({
            xianshi:this.data.xianshi+id,
            ys:this.data.ys+id
        })
        console.log(this.data.ys)
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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