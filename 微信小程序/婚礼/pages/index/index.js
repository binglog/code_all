
const app = getApp()

Page({
  data: {
    puass:'null',
    puass1:'null',
    bofang:true
  },
 
  onLoad() {
    this.music=wx.createInnerAudioContext()
    this.music.src="https://m701.music.126.net/20220523144159/45e0a7501c801ab13d94f7ba629ed994/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14096442961/0219/71c6/d867/eca80101c2239842e0929e3c06e8ca8e.mp3"
    this.music.play()
  },
  tel1(){
    wx.makePhoneCall({
        phoneNumber: '15297007390'
    })
  },
  player(){
    if(this.data.bofang==true){
        this.music.pause()
        this.setData({
            bofang:false
        })
    }
    else{
        this.music.play()
        this.setData({
            bofang:true
        })
    }
    this.setData({
        puass:this.data.puass?null:'puass',
        puass1:this.data.puass1?null:'puass1'
    })
    console.log(this.data.puass)
  }
 
})
