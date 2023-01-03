// pages/cc/cc.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bijiao:'',
        nanniu1:"false"


    },
    n1:null,n2:null,
    qingchu:function(e){
        this.setData({
            
        })
    },

    num1change:function(e){
        console.log(e.detail.value)
        this.n1=e.detail.value
        this.anniu1()

    },
   anniu1:function(){
        if(this.n1!=""&&this.n2!=""&&this.n1!=null&&this.n2!=null){
            console.log("成功")
            this.setData({
                nanniu1:''
            })
        }
   },
    num2change:function(e){
        console.log(e.detail.value)
        this.n2=e.detail.value
        this.anniu1()

    },
    compare:function(e){
        var str=null
        if(this.n1>this.n2){
            str='第一个大'
        }
        else if(this.n1<this.n2){
            str='第二个大'
        }
        else{
            str='一样大'
            console.log(this.n1)
        }
        this.setData({
            bijiao:str
        })
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