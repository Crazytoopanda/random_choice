Page({
  data: {
    backgroundPath: "../../data/20大2.jpg",
    questionList: [],
    allQuestions: [],
    rightAnswers: [],
    currAnswers: [],
    answerSet: []
  },
  onLoad(options: any) {
    this.setData({
      allQuestions: options["allQuestions"].split("||"),
      rightAnswers: options["rightAnswers"].split(","),
      currAnswers: options["currAnswers"].split(","),
      answerSet: options["answerSet"].split(",")
    })
  },

  radioChange() {

  },

  finish:function() {
    wx.clearStorageSync()
    wx.navigateTo({
      url:"../index/index"
    })
  }
})