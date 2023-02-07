import questionJson from "../questions.js"

Page({
  data: {
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
    wx.navigateTo({
      url:"../index/index"
    })
    wx.clearStorageSync()
  }
})