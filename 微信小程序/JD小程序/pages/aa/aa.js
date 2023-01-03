// pages/aa/aa.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        url:[
            {src:"https://m15.360buyimg.com/mobilecms/jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg",title:"京东超市"},
            {src:"https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png!q70.jpg",title:"数码电器"},
            {src:"https://m15.360buyimg.com/mobilecms/jfs/t1/41867/2/15966/7116/60ec0e0dE9f50d596/758babcb4f911bf4.png!q70.jpg",title:"京东服饰"},
            {src:"https://m15.360buyimg.com/mobilecms/jfs/t1/177902/16/13776/5658/60ec0e71E801087f2/a0d5a68bf1461e6d.png!q70.jpg",title:"京东生鲜"},
            {src:"https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg",title:"京东到家"},
            {src:"https://m15.360buyimg.com/mobilecms/jfs/t1/185733/21/13527/6648/60ec0f31E0fea3e0a/d86d463521140bb6.png!q70.jpg",title:"充值缴费"},
            {src:"https://m15.360buyimg.com/mobilecms/jfs/t1/199143/10/8979/4223/614599f5E45cd5464/d15aa650a0ebe596.png!q70.jpg",title:"物流查询"},
            {src:"https://m15.360buyimg.com/mobilecms/jfs/t1/186080/16/13681/8175/60ec0fcdE032af6cf/c5acd2f8454c40e1.png!q70.jpg",title:"领券"},
            {src:"https://m15.360buyimg.com/mobilecms/jfs/t1/196711/35/12751/6996/60ec1000E21b5bab4/38077313cb9eac4b.png!q70.jpg",title:"领津贴"},
            {src:"https://m15.360buyimg.com/mobilecms/jfs/t1/37709/6/15279/6118/60ec1046E4b5592c6/a7d6b66354efb141.png!q70.jpg",title:"PULS会员"}
        ],
        goods:[
            {
                goodsName:"【东方礼】花西子x杜鹃定制东方佳人妆奁彩妆套装化妆品全套初学者组合散粉送女生生日结婚礼物",
                iamgesrc:"https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/107426/20/23242/238829/62270f1bE92c2f546/a9366af7f3f141be.jpg!q70.dpg.webp",
                price:"￥299元"    
            },
            {
                goodsName:"【华为笔记本电脑MateBook 14 2021款 14.0英寸11代酷睿i5 16G 512G 锐炬显卡/2K触控轻薄本 /多屏协同 皓月银",
                iamgesrc:"https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/102224/38/22338/138800/62038732E63c9e68f/4c51361739c1b13e.jpg!q70.dpg.webp",
                price:"￥5699元"    
            },
            {
                goodsName:"乐享 砂锅石锅陶瓷煲新陶养生煲3L煲汤锅炖锅日式蓝",
                iamgesrc:"https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/128886/12/26079/323774/62344987Ef68904c2/4b345a0d69e6cd07.jpg!q70.dpg.webp",
                price:"￥89元"    
            },
            {
                goodsName:"华为笔记本电脑MateBook 13s 2021 11代酷睿i5-11300H 16G 512G锐炬显卡/13.4英寸全面触控屏/轻薄办公本 银",
                iamgesrc:"https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/148598/31/23376/183660/6237edd4Ed65ad882/7e667dc154babba8.jpg!q70.dpg.webp",
                price:"￥89元"    
            }
            
        ],
        banner:[
            {bgck:"https://m15.360buyimg.com/mobilecms/jfs/t1/177379/3/21606/221814/6237538cE39eb8fcb/96e3214c77bd40f8.jpg!cr_1125x449_0_166!q70.jpg"}, {bgck:"https://m15.360buyimg.com/mobilecms/s1062x420_jfs/t1/212225/6/11238/61871/61e50ff9E7f02c060/8d0f3065b0c27182.jpg!cr_1053x420_4_0!q70.jpg"},
            {bgck:"https://imgcps.jd.com/ling4/10045317220882/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5c1224c882acdd181d1230a2/2ba0aa9d/cr_1125x449_0_166/s/q70.jpg"}
        ],
        miaosha:[
            {image:"https://img11.360buyimg.com/n7/s150x150_jfs/t1/120766/35/24033/191329/622e98a8E0362ed82/c38e8a06fa24d5ed.jpg.dpg",jiage:"￥9.9"},
            {image:"https://img11.360buyimg.com/n7/s150x150_jfs/t1/102037/34/26891/97214/623d712aE596c3701/cc9bb58479bb7356.jpg.dpg",jiage:"￥199.9"},
            {image:"https://img11.360buyimg.com/n7/s150x150_jfs/t1/117808/11/21556/98467/623049daE9b5a5a0e/dff7fb809e3fbda8.jpg.dpg",jiage:"￥6.9"},
            {image:"https://img11.360buyimg.com/n7/s150x150_jfs/t1/164924/32/25074/173985/614c3b75Ee60fc100/b520af5fae7eaeb4.jpg.dpg",jiage:"￥25.9"},
            {image:"https://img11.360buyimg.com/n7/s150x150_jfs/t1/126059/9/26742/167459/623d7a24E3d87683c/217bb7e5b6b07f20.jpg.dpg",jiage:"￥58.9"},
            {image:"https://img11.360buyimg.com/n7/s150x150_jfs/t1/113181/23/20489/197096/623aea03E3992af71/255c31b287a6c9aa.jpg.dpg",jiage:"￥1528"},
            {image:"https://img11.360buyimg.com/n7/s150x150_jfs/t1/102037/34/26891/97214/623d712aE596c3701/cc9bb58479bb7356.jpg.dpg",jiage:"￥199.9"}

        ],
        nbFrontColor: '#000000',
        nbBackgroundColor: '#ffffff',
       
    },

    /**
     * 生命周期函数--监听页面加载
     */


     
    onLoad: function (options) {
        this.setData({
            nbTitle: '京东购物',
            nbLoading: false,
            nbFrontColor: '#ffffff',
            nbBackgroundColor: '#000000',
          })
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