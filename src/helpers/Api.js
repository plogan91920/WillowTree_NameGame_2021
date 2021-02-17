import Settings from "../config.json";

//Todo: establish API for scores
import Cookies from 'universal-cookie'
const cookies = new Cookies()

export class API {
  // =============
  // Employee Data
  // =============
  static fetchEmployees = async () => {
    const res = await fetch(Settings.app.api_endpoint)
    const data = await res.json()

    return data
  }

  // ===========
  // Game Scores
  // ===========
  //Todo: Fetch from API
  static fetchScores = async () => {
    let scores = cookies.get('high_scores')
    
    if (!scores)
      scores = []

    return scores
  }

  //Todo: Save to API
  static saveScores = async (correctAnswers, averageTime) => {
    let scores = await this.fetchScores()

    scores.push({time: averageTime, correct: correctAnswers})

    //Sort best to worst and keep only the top 10 scores
    scores.sort((score1, score2) => {
      if (score1.correct == score2.correct)
        return score1.time - score2.time

      return score2.correct - score1.correct
    })
    scores = scores.slice(0,10)

    cookies.set('high_scores', JSON.stringify(scores))
  }
}

export default API