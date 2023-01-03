    // tabbars设置
    // 每个页面引用 此文件 渲染


    // 获取class为tabbars的元素
    tabbars=document.querySelector('.tabbars')

    // 循环关于tabaars的json
    app.tabbars.name.forEach(function (item,index) { 
        // 创建一个a标签
    a=document.createElement('a')
    // 在tabbars元素里新增a标签
    tabbars.appendChild(a)
    // 设置a标签的herf值
    a.setAttribute("href",app.tabbars.a[index])

    // 创建一个img元素
    img=document.createElement('img')
    // 在a标签里新增img元素
    a.appendChild(img)
    // 设置img元素的src值
    img.setAttribute('src',app.tabbars.img[index])

    // 创建一个p元素
    p=document.createElement('p')
    // a标签内新增一个p标签
    a.appendChild(p)
    // 修改p标签的值
    p.innerText=item
 })
 console.log(1)
 