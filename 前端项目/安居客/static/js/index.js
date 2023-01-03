// swiper官方引入
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });
var swiper_tab=new Swiper(".mySwiper_tab", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });


//   获取可视宽度
app_width=screen.availWidth
console.log(app_width);

// 设置conten_tab宽度
document.querySelectorAll('.content_li_item').forEach(function (item) { 
    item.style.width=(app_width-20)+"px"
 })
// 设置content_li ul的宽度
document.querySelector('.content_li').firstElementChild.style.width=(app_width*2-20)+"px"

document.querySelector('title').innerText=app.index.title

// 城市选择渲染
select=document.querySelector('select')
app.index.select.forEach(function (item) { 
    nweSelect=document.createElement('option')
    select.appendChild(nweSelect)
    nweSelect.innerText=item
 })

//  navtop导航渲染
navtop=document.querySelector('nav')
// 循环app里的index下的name属性
app.index.navtop.name.forEach(function (item,index) {
    // 创建.a
   newNavtop=document.createElement('a')
  //  添加进navtop
   navtop.appendChild(newNavtop)
  //  设置a标签class属性值
   newNavtop.setAttribute('class','nav')
  //  设置a标签href属性值
   newNavtop.setAttribute('href','#')

    // 创建img
    newimg=document.createElement('img')
    // 添加进navtop
    newNavtop.appendChild(newimg)
    // 设置img的src属性
    newimg.setAttribute("src",app.index.navtop.images[index])
    
    // 创建p
    newp=document.createElement('p')
    // 添加进navtop
    newNavtop.appendChild(newp)
    // 设置p标签内容
    newp.innerText=item
})

// swiper-item
swiper_item=document.querySelectorAll('.swiper-item')[0]
try {
    app.index.nav_swiper.name.forEach(function (item,index) { 
        // 循环前5个内容个
        if(index>=5){
            throw new Error()
        }
        a=document.createElement('a')
        swiper_item.appendChild(a)

    
        // 创建img
        newimg=document.createElement('img')
        a.appendChild(newimg)
        newimg.setAttribute("src",app.index.nav_swiper.images[index])
        
        // 创建p
        newp=document.createElement('p')
        a.appendChild(newp)
        newp.innerText=item
     })
} catch (error) {
    swiper_item=document.querySelectorAll('.swiper-item')[1]
    app.index.nav_swiper.name.forEach(function (item,index) { 
        // 循环后5个内容
        if(index>=5){
            a=document.createElement('a')
            swiper_item.appendChild(a)
    
        
            // 创建img
            newimg=document.createElement('img')
            a.appendChild(newimg)
            newimg.setAttribute("src",app.index.nav_swiper.images[index])
            
            // 创建p
            newp=document.createElement('p')
            a.appendChild(newp)
            newp.innerText=item
        }
     })
}

// 推荐 内容
content_li_item=document.querySelector('.content_li_item')
app.index.content.tj.forEach(function (item) { 
   
    // 创建div
    div=document.createElement('div')
    // 添加进content_li_item
    content_li_item.appendChild(div)
    // 设置div class属性值
    div.setAttribute('class','content_li_item_item')

        // 创建a标签
        a=document.createElement('a')
        // a标签添加进div里
        div.appendChild(a)
        // 设置a标签的href属值
        a.setAttribute('href',item.a)

            // 创建img
            img=document.createElement('img')
            // 添加img到a标签里面
            a.appendChild(img)
            // 设置img的src属性值
            img.setAttribute('src',item.img)

            // 创建p标签
            p=document.createElement('p')
            // 添加p标签到a标签
            a.appendChild(p)
            // 设置p标签的内容
            p.innerText=item.title
            // 创建div
            div=document.createElement('div')
            // 添加div到a标签
            a.appendChild(div)

                // 创建span标签
                span=document.createElement('span')
                // 添加span标签到div
                div.appendChild(span)
                // 设置span的内容
                span.innerText=item.fz
                // 创建span标签
                span=document.createElement('span')
                // 添加span标签到div
                div.appendChild(span)
                // 设置span的内容
                span.innerText="."
                // 创建span标签
                span=document.createElement('span')
                // 添加span标签到div
                div.appendChild(span)
                // 设置span的内容
                span.innerText=item.pf

            // 创建p标签并添加到a标签 设置p标签的值
            a.appendChild(document.createElement('p')).innerText=item.rmb

            // 创建div
            div=document.createElement('div')
            // 添加div到a标签
            a.appendChild(div)
            //循环app.index.tj里的tj数组
            item.tj.forEach(function (item) { 
              // 创建span标签添加到div里 并把item数据赋值给span标签
                div.appendChild(document.createElement('span')).innerText=item
             })




 })

//  触摸滑动效果未完成

//  var start=0
//  var end=0

//  document.querySelector('.content_li').addEventListener('touchstart',(e)=>{ 
//     start=e.touches[0].screenX
//   })
//     document.querySelector('.content_li').addEventListener('touchend',(e)=>{
//         end=e.changedTouches[0].screenX
//         if(app_width/5<start-end){
//             console.log("出来了");
//             document.querySelector('.content_li').style.transition = 'all, linear, 1s';
//             document.querySelector('.content_li ul').style.transform='translateX('+'-'+app_width+'px)'
            
//         }
//         if(app_width/5>start-end){
//             document.querySelector('.content_li').style.transition = 'all, linear, 1s';
//             document.querySelector('.content_li ul').style.transform='translateX('+'-'+start-end+'px)'
//             console.log(document.querySelector('.content_li ul').style.transform);
            
//         }
        
//     })


