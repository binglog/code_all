// index.js
// 获取应用实例
const app = getApp()


Page({
   
  data: {
    Swipslist:[{stills:'https://pic.rmb.bdstatic.com/bjh/down/8b89c0614149f3a6d2164ce4a6e960f4.png'},
    {stills:'https://t10.baidu.com/it/u=941319210,2201168715&fm=179&app=42&f=JPEG?w=328&h=164&s=B2E164A450431947104D4D320300500A'},
    ],
    hotList:[{img:'http://t11.baidu.com/it/u=1159208570,987243771&fm=58&app=83&f=JPEG?w=200&h=266',nm:'小黄人大眼萌2'},
    {img:'http://t10.baidu.com/it/u=3658419354,1595559992&fm=58&app=83&f=JPEG?w=200&h=266',nm:'蓝雨'},
    {img:'http://t10.baidu.com/it/u=3716642803,1535800708&fm=58&app=83&f=JPEG?w=200&h=266',nm:'通往夏天的隧道'},
    {img:'http://t10.baidu.com/it/u=2143386563,921990627&fm=58&app=83&f=JPEG?w=200&h=266',nm:'神秘海域'}
],
soonList:[{img:'https://bkimg.cdn.bcebos.com/pic/e7cd7b899e510fb30f2447ac1160df95d143ad4ba6f7?x-bce-process=image/resize,m_lfit,w_536,limit_1/format,f_jpg',nm:'通天塔',id:'1'},
{img:'https://image11.m1905.cn/uploadfile/2022/ss/0610/20220610124515929963.jpeg',nm:'咒'},
{img:'https://n.sinaimg.cn/games/transform/138/w388h550/20220623/e320-f45ab4e1ea1923d2f4c3401320686a37.png',nm:'海贼王 FILM RED'},
{img:'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2504791226.webp',nm:'魁拔4之梅零落'}]

  },
  onLoad() {
    let db = wx.cloud.database()
    db.collection('video').get().then(res => {
        // res.data 包含该记录的数据
        this.setData({
            video:res.data
        })
        console.log(res.data)
      })
   
    
    // this.getMovies('hot')
    // this.getMovies('coming')
    // this.getMovies('soon')
    // this.getMovies('hot')
    // this.getMoviesSwips()
    
  },

//   getMovies(state) {
//     if (state === 'hot') {
//       wx.cloud.callFunction({
//         name: "getMoviesIndex",
//         data: {
//           state: state
//         }
//       }).then(res => {
//         this.setData({
//           hotList: res.result.data
//         })
//       })
//     } else if (state === 'coming') {
//       wx.cloud.callFunction({
//         name: "getMoviesIndex",
//         data: {
//           state: state
//         }
//       }).then(res => {
//         this.setData({
//           comingList: res.result.data
//         })
//       })
//     }else {
//       wx.cloud.callFunction({
//         name: "getMoviesIndex",
//         data: {
//           state: state
//         }
//       }).then(res => {
//         this.setData({
//           soonList: res.result.data
//         })
//       })
//     }
//   },

//   getMoviesSwips() {
//     let state = 'hot'
//     wx.cloud.callFunction({
//       name: "getMoviesSwip",
//       data: {
//         state: state
//       }
//     }).then(res => {
//       // console.log('Swipslist', res.result.data);
//       this.setData({
//         Swipslist: res.result.data
//       })
//     })

//   },

  geSearch(e) {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },

  geDetail(e) {
    // console.log(e.currentTarget.dataset)
    console.log(e.currentTarget.dataset.id)
    let id =e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/details/details?id=' + id,
    })
  },

  geMovieList(e) {
    let index = parseInt(e.currentTarget.dataset.index)
    console.log(index);
    app.globalData.moviesIndex = index
    wx.switchTab({
      url: '/pages/films/films?index',
    })
  }
})