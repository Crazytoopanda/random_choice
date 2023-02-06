import * as mode from "../../assets/data/questions.json"
Page({
  data: {
    questionList: [],
    allQuestions: []
  },
  onLoad() {
    console.log(mode)
  }
})