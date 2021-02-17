// Functional
import API from '../helpers/Api.js'
import Cookies from 'universal-cookie'
import React, { Component } from 'react'
import Settings from '../config.json'

// Components
import Button from '../components/Button.js'
import ImageButton from '../components/ImageButton.js'
import LoadingBar from '../components/LoadingBar.js'
import Particle from '../components/Particle.js'
import { Prompt } from 'react-router-dom'

//Resources
import smiley from '../assets/images/smiley.svg'
import './Play.scss'

const cookies = new Cookies()

// =========
// Play Page
// =========
export class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      question: {
        answer: null,
        options: [],
        timeTaken: 0
      },
      answer: null,
      complete: false,
    };
    this.employees = []
    this.questions = []
    this.currentQ = 0
    this.correctAnswers = 0
    this.startTime = 0
    this.assistMode = cookies.get('assist_mode') == "true"
    
    if (this.props.match.params.mode)
      this.practiceMode = this.props.match.params.mode.toLowerCase() == "practice"
  }

  componentDidMount() {
    this.getEmployees()
  }

  async getEmployees () {
    const willowtreeEmployees = await API.fetchEmployees()
    this.employees = willowtreeEmployees
    
    this.getQuestions()
    this.setState({loading: false})
  }

  shuffleArray (array) {
    var shuffledArray = []

    while (array.length) {
      shuffledArray.push(array.splice(Math.floor(Math.random() * array.length),1)[0])
    }
    
    return shuffledArray
  }

  getQuestions () {
    this.employees = this.shuffleArray(this.employees)
    this.questions = []

    //Pick # questions with 6 employees at a time to ensure they never duplicate in a session
    for (var q = 0; q < Math.min(Math.floor(this.employees.length / 6), Settings.game.questions); q++) {
      //Get the next 6 employees, pick one as the answer
      var options = this.employees.slice(q*6,q*6 + 6)
      var answer = options[Math.floor(Math.random() * 6)]

      //Setup question object with answer and formatted employee options
      var question = {
        answer: answer,
        options: options.map((employee) => {
          return { employee: employee }
        })
      }

      this.questions.push(question)
    }

    this.currentQ = -1
    this.nextQuestion()
  }

  nextQuestion = () => {
    this.currentQ++

    if (this.currentQ < this.questions.length) {
      this.startTime = Date.now()

      if (this.assistMode) {
        this.assistTimer = setTimeout(this.assistPlayer, Settings.game.assist_mode.start_delay * 1000)
      }

      this.setState({question: this.questions[this.currentQ]})
      return
    }

    if (this.practiceMode)
      this.getQuestions()
    else
      this.setState({complete: true})
  }

  assistPlayer () {
    let toReveal = []
    this.state.question.options.map((option) => {
      if (option.employee.id != this.state.question.answer.id && !option.answer)
        toReveal.push(option)
    })

    toReveal[Math.floor(Math.random() * toReveal.length)].answer = "Disabled"

    if (toReveal.length <= 1) {
      this.resolveAnswer("TooLate")
      return
    }

    this.assistTimer = setTimeout(this.assistPlayer, Settings.game.assist_mode.reveal_delay * 1000)
    this.setState({question: this.state.question})
  }

  resolveAnswer (id) {
    if (this.assistTimer)
      clearInterval(this.assistTimer)

    //Gather Data
    if (!this.practiceMode) {
      this.questions[this.currentQ].timeTaken = Date.now() - this.startTime

      if (this.state.question.answer.id == id)
        this.correctAnswers++
    }

    //Display Results
    this.state.question.options.map((option) => {
      if (option.employee.id == this.state.question.answer.id)
      {
        if (option.employee.id == id)
          option.answer = "Correct"
        else
          option.answer = "Incorrect"
      } else {
        option.answer = "Disabled"
      }
    })
    
    this.setState({answer: id})
  }

  sanitizeName(firstName, lastName) {
    firstName = firstName.match(/([a-zA-Z\-." "`\']*)/)[0];
    lastName = lastName.match(/([a-zA-Z\-." "`\']*)/)[0];
    let name = firstName + " " + lastName;
    name = name.replace(/([' '][' ']*)/g," ").trim();

    return name
  }

  calcScore () {
    var correctPercentage = Math.floor(this.correctAnswers/Settings.game.questions * 100)

    var incorrectPercentage = Math.floor((1-(this.correctAnswers/Settings.game.questions)) * 100)

    var averageTime = 0
    this.questions.map((question) => {
      averageTime += question.timeTaken
    })
    averageTime /= Settings.game.questions
    averageTime = Math.floor(averageTime / 100) / 10
    return [correctPercentage, incorrectPercentage, averageTime]
  }

  // ================
  // Render Functions
  // ================
  render() {
    if (this.state.loading) {
      return (
        <div className="Page-Play">
          <LoadingBar />
        </div>
      )
    }

    if (!this.state.complete) {
      return this.renderGame()
    } else {
      return this.renderScore()
    }
  }

  renderGame () {
    //Trim Name
    let name = this.sanitizeName(this.state.question.answer.firstName, this.state.question.answer.lastName)

    return (
      <div className="Page-Play">
        <Prompt when={!this.practiceMode} message="Are you sure?" />
        <p>Which one of these good looking photos is the real</p>
        <div className="Name text-big">{name}</div>
        <div className="Portraits">
          {this.state.question.options.map((option) => (
            <ImageButton result={option.answer} onClick={() => this.resolveAnswer(option.employee.id)} key={option.employee.id} image={Settings.app.website_url + '/' + option.employee.headshot.url}/>
          ))}
        </div>
        <Button action={this.nextQuestion} disabled={!this.state.answer} text="Continue" />
      </div>
    )
  }

  renderScore () {
    let [correctPercentage, incorrectPercentage, averageTime] = this.calcScore()
    API.saveScores(this.correctAnswers, averageTime)

    let stats = [
      {text: correctPercentage + "%", subtext: "Correct Selections"},
      {text: incorrectPercentage + "%", subtext: "Incorrect Selections"},
      {text: averageTime + "sec", subtext: "Avg Selection Time"}
    ]

    //Render Page
    return (
      <div className="Page-Score">

        <div className="TopHalf">
          <div className="Report">
            <Particle shape='square' x={30} y={70} />
            <Particle shape='star' clockwise={false} y={75} />
            <Particle shape='triangle' x={70} y={70} />
            <img className="Smiley" src={smiley} />
            <p className="text-big">Congratulations, you scored {this.correctAnswers}/{Settings.game.questions}!</p>
          </div>
        </div>

        <div className="Scoring">
          {stats.map((stat, i) => (
            <div key={i} className="Category">
              <div className="Value text-big">{stat.text}</div>
              <label>{stat.subtext}</label>
            </div>
          ))}
        </div>

        <div className="Return">
          <Button action='/' text="Return to Home" />
        </div>

      </div>
    )
  }
}

export default Play