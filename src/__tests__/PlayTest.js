import Play from '../pages/Play.js'
import questionData from './QuestionsData.json'

//Mock Play Component
const playProps = {match: {params: {mode: ""}}}
const play = new Play(playProps)
play.correctAnswers = 3
play.questions = questionData
play.currentQ = 1
play.state = {
  loading: false,
  question: {
    answer: null,
    options: [],
    timeTaken: 0
  },
  answer: null,
  complete: false,
};
play.setState = (val) => Object.assign(play.state, val)

test('Shuffles Array', () => {
  let arr = [0,1,2,3,4,5]
  let newArr = play.shuffleArray(arr)
  expect(newArr).toBeInstanceOf(Array)
});

test('Sanitize Name', () => {
  let firstName = "      jon              jacob<script>"
  let lastName = "jingleheimer-smith jr.?test-ing</html>   "
  let name = play.sanitizeName(firstName, lastName)
  expect(name).toBe("jon jacob jingleheimer-smith jr.")
})

test ('Calc Score', () => {
  let [correctPercentage, incorrectPercentage, averageTime] = play.calcScore()
  expect(correctPercentage).toBe(60)
  expect(incorrectPercentage).toBe(40)
  expect(averageTime).toBe(3.4)
})

test ('Next Question', () => {
  play.nextQuestion()
  expect(play.currentQ).toBe(2)
  expect(play.state.question).toBe(questionData[2])
})