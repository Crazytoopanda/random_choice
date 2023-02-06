import questionJson from "../questions.js"
Page({
  data: {
    questionList: [],
    allQuestions: []
  },
  onLoad() {
    console.log(questionJson)
  }
})