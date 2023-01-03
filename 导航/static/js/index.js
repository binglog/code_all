function search() { 
    console.log(document.querySelector('#search').value);
    window.open("http://baidu.com/s?wd="+document.querySelector('#search').value,"_blank”")
   
 }
//  document.querySelector('bj').src='./bg'+ Math.ceil(Math.random()*20)+'.jpg'
 document.querySelector('.bj').setAttribute('src','./static/img/bg'+ Math.ceil(Math.random()*17)+'.jpg')

 function bj() { 
    document.querySelector('.bj').setAttribute('src','./static/img/bg'+ Math.ceil(Math.random()*17)+'.jpg')
  }
document.querySelector('input').onkeydown=function(e){
   console.log(e.code);
   if(e.keyCode=='13' || e.code=="NumpadEnter" || e.code=="Enter"){
      window.open("http://baidu.com/s?wd="+document.querySelector('#search').value,"_blank”")

   }
}
 