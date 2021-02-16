//Functional Includes
import React, { Component, useState } from 'react'
import Cookies from 'universal-cookie'
import { Prompt } from 'react-router-dom'
import LoadingBar from '../components/LoadingBar.js'
import Button from '../components/Button.js'
import EmployeePortrait from '../components/EmployeePortrait.js'
import Particle from '../components/Particle.js'

//Resource Includes
import smiley from '../assets/images/smiley.svg'
import './Play.scss'

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
      complete: false
    };
    this.employees = []
    this.questions = []
    this.currentQ = 0
    this.correctAnswers = 0
    this.startTime = 0
    this.questionLimit = 5
    
    if (this.props.match.params.mode)
      this.practiceMode = this.props.match.params.mode.toLowerCase() == "practice"
  }

  componentDidMount() {
    this.getEmployees()
  }

  getEmployees = async () => {
    const willowtreeEmployees = await this.fetchEmployees()
    this.employees = willowtreeEmployees
    
    this.getQuestions()
  }

  fetchEmployees = async () => {
    const url = "https://namegame.willowtreeapps.com/api/v1.0/profiles"
    const res = await fetch(url)
    const data = await res.json()

    return data
  }

  shuffleEmployees = () => {
    var shuffledEmployees = []
    while (this.employees.length) {
      shuffledEmployees.push(this.employees.splice(Math.floor(Math.random() * this.employees.length),1)[0])
    }
    this.employees = shuffledEmployees
  }

  getQuestions = () => {
    this.shuffleEmployees()

    this.questions = []
    for (var q = 0; q < Math.min(Math.floor(this.employees.length / 6), this.questionLimit); q++) {
      var options = this.employees.slice(q*6,q*6 + 6)
      var answer = options[Math.floor(Math.random() * 6)]
      var question = {
        answer: answer,
        options: []
      }
      options.map((option) => {
        question.options.push({
          employee: option
        })
      })
      this.questions.push(question)
    }

    this.currentQ = 0
    this.startTime = Date.now()
    this.setState({question: this.questions[this.currentQ]})
  }

  resolveAnswer = (id) => {
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

  nextQuestion = () => {
    this.currentQ++

    if (this.currentQ < this.questions.length) {
      this.startTime = Date.now()
      this.setState({question: this.questions[this.currentQ]})
      return
    }

    if (this.practiceMode)
      this.getQuestions()
    else
      this.setState({complete: true})
  }

  render() {
    if (!this.state.complete) {

      // ==================
      // Render Game Screen
      // ==================
      return (
        <div className="Page-Play">
          <Prompt when={!this.practiceMode} message="Are you sure?" />
          <p>Which one of these good looking photos is the real</p>
          <div className="Name text-big">{this.state.question.answer ? this.state.question.answer.firstName + " " + this.state.question.answer.lastName : ""}</div>
          <div className="Portraits">
            {this.state.question.options.map((option) => (
              <EmployeePortrait result={option.answer} onClick={() => this.resolveAnswer(option.employee.id)} key={option.employee.id} image={option.employee.headshot.url}/>
            ))}
          </div>
          <Button action={this.nextQuestion} disabled={!this.state.answer} text="Continue" />
        </div>
      )
    } else {

      // ===================
      // Render Score Screen
      // ===================

      //Stat Calculations
      var correctPercentage = Math.floor(this.correctAnswers/this.questionLimit * 100)

      var incorrectPercentage = Math.floor((1-(this.correctAnswers/this.questionLimit)) * 100)

      var averageTime = 0
      this.questions.map((question) => {
        averageTime += question.timeTaken
      })
      averageTime /= this.questionLimit
      averageTime = Math.floor(averageTime / 100) / 10

      //Render Page
      return (
        <div className="Page-Score">
          <div className="TopHalf">

            <div className="Report">
              <Particle shape='square' x={30} y={70} />
              <Particle shape='star' clockwise={false} y={75} />
              <Particle shape='triangle' x={70} y={70} />
              <img className="Smiley" src={smiley} />
              <p className="text-big">Congratulations, you scored {this.correctAnswers}/{this.questionLimit}!</p>
            </div>

            <div className="Return">
              <Button action="/menu" text="Return to Home" />
            </div>

          </div>
          <div className="Scoring">

            <div className="Category">
              <div className="Value text-big">{correctPercentage}%</div>
              <label>Correct Selections</label>
            </div>

            <div className="Category">
              <div className="Value text-big">{incorrectPercentage}%</div>
              <label>Incorrect Selections</label>
            </div>

            <div className="Category">
              <div className="Value text-big">{averageTime} sec</div>
              <label>Avg Selection Time</label>
            </div>

          </div>
        </div>
      )
    }
  }
}

export default Play