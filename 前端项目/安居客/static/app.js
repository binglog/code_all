// 公用js
var app={
  // 标题
    title:'安居客',
  // 底部tabbars
    tabbars:{
      name:['首页','消息','有料','推荐','我的'],
      a:['./index.html','./xx.html','./yl.html','./tuijian.html','./home.html'],
      img:['./static/img/tabbars/首页.svg','./static/img/tabbars/消息.svg','./static/img/tabbars/热门.svg','./static/img/tabbars/喜欢.svg','./static/img/tabbars/用户.svg']
    },
    // 首页数据
    index:{
      // 下拉框
        select:['北京','上海','成都','重庆','西安','广州'],
        // 头部导航
        navtop:{
            name:['新房','二手房','租房','商品写字楼','我是房东'],
            images:['./static/img/navtop/新房.svg','./static/img/navtop/二手房.svg','./static/img/navtop/二手房.svg','./static/img/navtop/二手房.svg','./static/img/navtop/二手房.svg']
        },
        // 头部swiper
        nav_swiper:{
            name:['装修建材','免费看房','找小区','品牌公寓','房贷计算','找经济人','找室友','出租','厂房厂库','卖房'],
            images:['./static/img/navtop/装修.svg','./static/img/navtop/楼房.svg','./static/img/navtop/小区.svg','./static/img/navtop/公寓.svg','./static/img/navtop/计算器.svg']
        },
        // 内容页面
        content:{
          // 推荐数据
          tj:[
            {
              // a标签
              a:'./1.html',
              // 图片
              img:'./static/img/index/conten/1.jpg',
              // 标题
              title:'重庆北站南广场 渝鲁环线 动力国际 狮子坪 低价出租房源！！',
              fz:'1室1厅',
              pf:'15',
              // 每月多少钱
              rmb:'780',
              // 标签
              tj:['安选','东南','有电梯']
            },
            {
              a:'',
              img:'https://pic1.ajkimg.com/display/anjuke/024129d04199f43f77fd04a3ac3ad5a4/100x75c.jpg?t=1&srotate=1',
              title:'测试测试测试测试存是测试测试测试',
              fz:'1室1厅',
              pf:'49',
              rmb:'1000',
              tj:['安逸','刺激']
            },
            {
              a:'123456',
              img:'./static/img/index/conten/1.jpg',
              title:'重庆北站南广场 渝鲁环线 动力国际 狮子坪 低价出租房源！！',
              fz:'1室1厅',
              pf:'15',
              rmb:'780',
              tj:['安选','东南','有电梯']
            },
            {
              a:'',
              img:'https://pic1.ajkimg.com/display/anjuke/024129d04199f43f77fd04a3ac3ad5a4/100x75c.jpg?t=1&srotate=1',
              title:'测试测试测试测试存是测试测试测试',
              fz:'1室1厅',
              pf:'49',
              rmb:'1000',
              tj:['安逸','刺激']
            },
            {
              a:'123456',
              img:'./static/img/index/conten/1.jpg',
              title:'重庆北站南广场 渝鲁环线 动力国际 狮子坪 低价出租房源！！',
              fz:'1室1厅',
              pf:'15',
              rmb:'780',
              tj:['安选','东南','有电梯']
            },
            {
              a:'',
              img:'https://pic1.ajkimg.com/display/anjuke/024129d04199f43f77fd04a3ac3ad5a4/100x75c.jpg?t=1&srotate=1',
              title:'测试测试测试测试存是测试测试测试',
              fz:'1室1厅',
              pf:'49',
              rmb:'1000',
              tj:['安逸','刺激']
            },
          ]
        }

    }
}