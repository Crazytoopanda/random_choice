Page({
  data: {
    backgroundPath: "../../data/20大1.png"
  },
  onload() {
  }, 
  toChoice: function(){
    wx.navigateTo({
      url:"../choice/choice"
    })
  }
})