// pages/computer/computer.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        daxiao:'',
        n1:null,
        n2:null,
        bj:'false'
    },
    n1input:function(){
        if (this.data.n1!=null&&this.data.n2!=null) {
            this.setData({
                bj:''
            })
        }
    },
    n2input:function(){
        if (this.data.n1!=null&&this.data.n2!=null) {
            this.setData({
                bj:''
            })
        }
    },
    bijiao:function(){
        var str=null
        console.log(this.data.n1,this.data.n2)
        if(this.data.n1>this.data.n2){
            str='第一个大'
            console.log(1)
        }
        else if(this.data.n1<this.data.n2){
            str='第二个大'
            console.log(2)
        }
        else{
            str='一样大'
        }
        this.setData({
            daxiao:str
        })
    },
    qingchu:function(){
        this.setData({
            n1:null,
            n2:null,
            bj:'false',
            daxiao:''
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