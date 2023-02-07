Page({
  data: {
    backgroundPath: "../../data/20大2.jpg",
    allQuestions: [],
    rightAnswers:[],
    answerSet:[],
    currAnswers:[],
    totalScore: 0,
    count:0,
    remark: ["好极了！你很棒棒哦", "哎哟不错哦", "别灰心，继续努力哦！"], // 评语
  },
  onLoad: function (options: any) {
    this.setData({
      allQuestions: options["allQuestions"].split("||"),
      rightAnswers: options["rightAnswers"].split(","),
      currAnswers: options["currAnswers"].split(","),
      answerSet: options["answerSet"].split(",")
    })
    for (let index = 0; index < 10; index++) {
      if(this.data.currAnswers[index] == this.data.rightAnswers[index]){
        this.data.count = this.data.count + 1;
      }
      
    }
    this.setData({
      totalScore: this.data.count*10
    })
  },
  // 查看错题
  toView: function () {
    wx.navigateTo({
      url:"../detail/detail?allQuestions=" + 
      this.data.allQuestions.join("||") + "&rightAnswers=" 
      + this.data.rightAnswers.join(",")
      + "&currAnswers=" + this.data.currAnswers.join(",")
      + "&answerSet=" + this.data.answerSet.join(",")
    })
   

  },
  // 返回首页
  toIndex: function () {
    wx.clearStorageSync()
    wx.navigateTo({
      url: '../index/index'
    })
  }
})