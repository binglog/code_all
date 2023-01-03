// pages/guest/guest.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        array: ['1', '2', '3', '4'],
    objectArray: [
      {
        id: 0,
        name: '1'
      },
      {
        id: 1,
        name: '2'
      },
      {
        id: 2,
        name: '3'
      },
      {
        id: 3,
        name: '4'
      }
    ],
    index: 0,
    xm:null,
    sj:null,
    zf:null
    },
    bindPickerChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          index: e.detail.value
        })
    },
    inputxm(e){
        let value=e.detail.value
        console.log(e)
        if(e.detail.cursor>4||(/(^[0-9]*$)/.test(value))){
            wx.showToast({
                title: '姓名错误',icon:'none',duration:1500
              })
            return
        }
        this.setData({
            xm:value
        })
       
    },

   
    inputsj(e){
        let value=e.detail.value
        console.log(e)
        if(e.detail.cursor!=11){
            wx.showToast({
                title: '手机号码错误',icon:'none',duration:1500
              })
            return
        }
        this.setData({
            sj:value
        })
       
    },
    inputzf(e){
        let value=e.detail.value
        console.log(e)

        this.setData({
            xm:value
        })
       
    },

    tijiao(){
       
       
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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