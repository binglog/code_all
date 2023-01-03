import common from '../../utils/common'
import time from '../../utils/util'
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  data: {
    video:[],
    loading:true
  },
  onLoad: function (options) {
    let db = wx.cloud.database()
    db.collection('video').get().then(res => {
        // res.data 包含该记录的数据
        this.setData({
            video:res.data
        })
        console.log(res.data)
      })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getNews(this.data.list.length);
  },
  geDetail(e) {
    console.log(e.currentTarget.dataset.id)
    let id =e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/newsDetails/newsDetails?id=' + id,
    })
  },

})