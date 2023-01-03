// 商品动态-开始
    var sp=[
        {name:'灯泡1',js:'这是一个灯泡',img:'./img/banner1.webp',jg:18},
        {name:'灯泡2',js:'这是一个xx',img:'./img/banner1.webp',jg:19},
        {name:'灯泡3',js:'这是一个xx',img:'./img/banner1.webp',jg:20},
        {name:'灯泡4',js:'这是一个xx',img:'./img/banner1.webp',jg:30},
        {name:'灯泡5',js:'这是一个xx',img:'./img/banner1.webp',jg:40},
    ]


    var ssp=document.querySelector('.ssp')

    // 动态循环 填充商品信息
    sp.forEach((item,index) => {
        // 创建卡片模型
        div=document.createElement('div')
        ssp.appendChild(div)
        div.setAttribute('class','col-4 mt-3')

            // 创建div
            div1=document.createElement('div')  
            div.appendChild(div1)
            div1.setAttribute('class','card')


                // 创建img
                img=document.createElement('img')
                div1.appendChild(img)
                img.setAttribute('src',item.img)

                // 创建div
                div2=document.createElement('div')
                div1.appendChild(div2)
                div2.setAttribute('class','card-body')

                    // 创建h5标签
                    h5=document.createElement('h5')
                    div2.appendChild(h5)
                    h5.setAttribute('class','card-title')
                    h5.innerText=item.name

                    p=document.createElement('p')
                    div2.appendChild(p)
                    p.setAttribute('class','card-text')
                    p.innerText=item.js
                    
                    a=document.createElement('a')
                    div2.appendChild(a)
                    a.setAttribute('class','btn btn-primary')
                    a.setAttribute('onclick','cs('+index+')')
                    a.innerHTML="加入购物车 <span class='badge text-bg-warning'>"+item.jg+'元'


            
        
    });

// 商品动态结束


// 商品结算列表渲染 开始
    var sum=0
    var spjs=document.querySelector('.spjs')
    var zje=document.querySelector('.zje')
    var i=0
    function cs(index) { 
        let li=document.createElement('li')
        spjs.appendChild(li)
        li.setAttribute('class','list-group-item d-flex justify-content-between align-items-start sss'+i)
        i=i+1

        let div=document.createElement('div')
        li.appendChild(div)
        div.setAttribute('class','ms-2 me-auto')

        let div1=document.createElement('div')
        div.appendChild(div1)
        div1.setAttribute('class','fw-bold')
        div1.innerText=sp[index].name
        
        let span=document.createElement('span')
        li.appendChild(span)
        span.setAttribute('class','badge bg-primary rounded-pill')
        span.innerText=sp[index].jg+'元'

        let span1=document.createElement('span')
        li.appendChild(span1)
        span1.setAttribute('class','badge text-bg-warning')
        span1.setAttribute('onclick','shanchu('+'this,'+index+')')
        span1.innerText='删除'
        


        sum=sum+Number(sp[index].jg)

        zje.innerText=sum


    }
// 商品结算列表渲染 结束


// 商品删除
function shanchu(i,index) { 
    i.parentNode.remove()
    sum=sum-Number(sp[index].jg)
    zje.innerText=sum
 }

// 商品结算清空
function clearn(){
    sum=0
    zje.innerText=sum
    spjs.innerHTML=''
}

// 注册判断 
function tj(){
    validationServer001=document.querySelector('#validationServer001')
    validationServer002=document.querySelector('#validationServer002')

    validationServer001.setAttribute('class','form-control')
    validationServer002.setAttribute('class','form-control')
    // 判断账号不小于4个字符 密码不少于6个 密码不多于10
    if(String(validationServer001.value).length<4){
        validationServer001.setAttribute('class','form-control is-invalid')
    }else if(String(validationServer002.value).length<6 && String(validationServer002.value).length>10){
        validationServer002.setAttribute('class','form-control is-invalid')
    }else{
        alert('注册成功')
        window.location.href='./'
    }
}


// 商品搜索
function search() { 
    ssp.innerHTML=''
    inputvlaue=document.querySelector('#inputvlaue').value
    sp.forEach((item,index) => {
        if(item.name.indexOf(inputvlaue)!=-1){
             // 创建卡片模型
        div=document.createElement('div')
        ssp.appendChild(div)
        div.setAttribute('class','col-4 mt-3')

            // 创建div
            div1=document.createElement('div')  
            div.appendChild(div1)
            div1.setAttribute('class','card')


                // 创建img
                img=document.createElement('img')
                div1.appendChild(img)
                img.setAttribute('src',item.img)

                // 创建div
                div2=document.createElement('div')
                div1.appendChild(div2)
                div2.setAttribute('class','card-body')

                    // 创建h5标签
                    h5=document.createElement('h5')
                    div2.appendChild(h5)
                    h5.setAttribute('class','card-title')
                    h5.innerText=item.name

                    p=document.createElement('p')
                    div2.appendChild(p)
                    p.setAttribute('class','card-text')
                    p.innerText=item.js
                    
                    a=document.createElement('a')
                    div2.appendChild(a)
                    a.setAttribute('class','btn btn-primary')
                    a.setAttribute('onclick','cs('+index+')')
                    a.innerHTML="加入购物车 <span class='badge text-bg-warning'>"+item.jg+'元'
        }
       


            
        
    });
 }