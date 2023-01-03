// pages/index1/index1.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        banner:['../image/banner1.png','../image/banner2.png'],
        sp:[
            {image:'../image/1.png',title1:'限时优惠',title2:'食堂/自助点餐',title:'5杯现磨咖啡兑换券',money1:'66元',money2:'85元'},
            {image:'../image/2.png',title1:'限时优惠',title2:'食堂/自助点餐',title:'10杯现磨咖啡兑换券',money1:'66元',money2:'85元'},
            {image:'../image/3.png',title1:'限时优惠',title2:'食堂/自助点餐',title:'10杯现磨咖啡兑换券',money1:'66元',money2:'85元'},
            {image:'../image/4.png',title1:'限时优惠',title2:'食堂/自助点餐',title:'10杯现磨咖啡兑换券',money1:'66元',money2:'85元'},
            {image:'../image/5.png',title1:'限时优惠',title2:'食堂/自助点餐',title:'10杯现磨咖啡兑换券',money1:'66元',money2:'85元'},
            {image:'../image/6.png',title1:'限时优惠',title2:'食堂/自助点餐',title:'10杯现磨咖啡兑换券',money1:'66元',money2:'85元'}
        ],
        xxtab:[
            {title:'热门推荐',data:'0'},
            {title:'即溶咖啡',data:'1'},
            {title:'K咖烘焙选',data:'2'},
            {title:'品牌周边',data:'3'},
        ],
        xxrm:[
            {title:'春樱初绽玛奇朵中热',money:'19'},
            {title:'春樱初绽玛奇朵中热',money:'29'},
            {title:'春樱初绽玛奇朵中热',money:'39'},
            {title:'春樱初绽玛奇朵中热',money:'49'},
        ],
        xxtable:'0',
        xz:0,

    },
    xz(e){
        var xz=e.currentTarget.dataset.xz
        console.log(xz)
        this.setData({
            xz:xz
        })
        console.log(this.data.xz)
    },
    xxtab(e){
        var xxtable=e.target.dataset.tab
        console.log(xxtable)
        this.setData({
            xxtable:xxtable
        })
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