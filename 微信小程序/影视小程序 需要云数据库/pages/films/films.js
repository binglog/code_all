// pages/films/films.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,

    loading: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(){
    let db = wx.cloud.database()
    db.collection('video').get().then(res => {
        // res.data 包含该记录的数据
        this.setData({
            video:res.data
        })
        console.log(res.data)
      })
  },


  onHide: function () {
    this.setData({
      list:[],
      loading: true,
    })
    app.globalData.moviesIndex = 0
  },




  geDetail(e) {
    let id = e.currentTarget.dataset.item._id
    wx.navigateTo({
      url: '/pages/details/details?id=' + id,
    })
  },

  change(e) {
    let index = e.currentTarget.dataset.index
    console.log(index);
    this.setData({
      list: [],
      active: index,
      loading: true,
    })
    this.getMovies(0, this.data.active)
  },



  onReachBottom: function () {
    this.getMovies(this.data.list.length, this.data.active);
  },
})