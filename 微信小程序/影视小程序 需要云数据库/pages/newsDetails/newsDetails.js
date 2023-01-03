// pages/newsDetails/newsDetails.js
const app = getApp()
let index
Page({
  /**
   * 页面的初始数据
   */
  data: {
    videdo:[],
    id: null,
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    console.log(id)
    let db = wx.cloud.database()
    db.collection('video').where({
        _id:id
    }).get().then(res => {
        // res.data 包含该记录的数据
        console.log(res.data)
        this.setData({
            video:res.data
        })
      })
     
  },




  clickLike() {
    wx.showModal({
        title: '提示',
        content: '暂未添加进数据库',
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
  },


  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    let pages = getCurrentPages()[getCurrentPages().length - 2];
    if (pages.route == 'pages/news/news') {
      let list = pages.data.list;
      list[index].praise = this.data.list.praise;
      pages.setData({
        list
      })
    }else{
      let list = pages.data.list;
      console.log(list );
     
    }
  },
})