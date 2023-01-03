// pages/map/map.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        markers:[{
            iconPath:'/image/update/navi.png',id:0,
            latitude:29.601397,longitude:106.307571,width:50,height:50
        }],
        longitude:null,
        latitude:null,

    },
    markertap(){
        wx.openLocation({
          latitude: 29.601397,
          longitude: 106.307571,
          name:'大学城中路',address:'重庆市 沙坪坝区 大学城中路'
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.mapCtx = wx.createMapContext('myMap')
        getCenterLocation: {
            this.mapCtx.getCenterLocation({
              success: function(res){
                console.log(res.longitude)
                console.log(res.latitude)
              }
            })
          }
          this.mapCtx.moveToLocation()
    },

   
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})