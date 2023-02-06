import questionJson from "../questions.js"
Page({
  data: {
    questionList: [],
    allQuestions: [],
    answer: [
      "A.我是本题答案A",
      "B.我是本题答案B",
      "C.我是本题答案C",
      "D.我是本题答案D"
    ]
  },
  onLoad() {
    console.log(questionJson)
  },

  radioChange() {

  },

  finish:function() {
    wx.navigateTo({
      url:"../index/index"
    })
  }
})