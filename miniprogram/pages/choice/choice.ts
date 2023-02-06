import questionJson from "../questions.js"

Page({
  data: {
    rightAnswers: [],
    answerSet: [],
    questionList: [],
    allQuestions: [],
    answerLength: 10
  },
  currAnswers: <any>[],
  onLoad() {
    function shuffle(arr: any) {
      let i = arr.length;
      while(i) {
          let j = Math.floor(Math.random() * i--);
          [arr[j], arr[i]] = [arr[i], arr[j]];
      }
      return arr;
    }
    this.setData({
      allQuestions: shuffle(questionJson["questions"].slice(0, 10))
    })
    let tempRightAnswers = <any>[]
    let tempAnswerSet = <any>[]
    for(let i = 0; i < this.data.answerLength; i++) {
      tempRightAnswers.push(this.data.allQuestions[i]["Answer"][0])
      tempAnswerSet.push(shuffle(this.data.allQuestions[i]["Answer"]))
    }
    this.setData({
      rightAnswers: tempRightAnswers,
      answerSet: tempAnswerSet
    })
  },

  radioChange(e: any) {
    let temp = e.detail.value.split(".")
    this.currAnswers[parseInt(temp[0])] = temp[1]
  },

  submit:function() {
    wx.navigateTo({
      url:"../consequence/consequence?allQuestions=" + 
        this.data.allQuestions.map((t) => t["name"]).join("||") + "&rightAnswers=" 
        + this.data.rightAnswers.join(",")
        + "&currAnswers=" + this.currAnswers.join(",")
        + "&answerSet=" + this.data.answerSet.join(",")
    })
  },

  outTest:function() {
    wx.navigateTo({
      url:"../index/index"
    })
  }
})