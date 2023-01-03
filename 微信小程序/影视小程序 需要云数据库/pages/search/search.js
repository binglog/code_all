import common from '../../utils/common'
import time from '../../utils/util'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key: '',
    video:[],
    video:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let db = wx.cloud.database()
    db.collection('video').get().then(res => {
    // res.data 包含该记录的数据
    this.setData({
        video:res.data
    })
  })
  },
  onInput(e) {
    console.log(e.detail.value);
    this.setData({
      key: e.detail.value
    })
  },

  goSearch() {
    if (this.data.key == '' || !this.data.key) {
      wx.showToast({
        icon: 'error',
        title: '请正确输入内容',
      })
    } else {
        this.data.video.forEach(element => {
           if(element.name.indexOf(this.data.key)>=0){
               console.log(element.name)
               let video=[]
               video.push(element)
                this.setData({
                    video:video
                })
           }
           
        });
        console.log(this.data.video)
      
    }
    
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