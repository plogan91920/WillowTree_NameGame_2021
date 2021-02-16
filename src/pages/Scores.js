// Functional
import React, { useState, useEffect } from 'react'
import API from '../helpers/Api.js'

// Components
import LoadingBar from '../components/LoadingBar.js'

// Resources
import './Scores.scss';

// =============
// Scores Page
// =============
function Scores() {
  const [scores, setScores] = useState(null)

  useEffect(() => {
    loadScores()
  })

  const loadScores = async () => {
    let scores = await API.fetchScores()
    setScores(scores)
  }

  let scoreList
  if (scores)
    scoreList = (
      <div className="Score-List">
        {scores.map((score, i) => (
          <div key={i} className="Score">{i+1}. {score.correctAnswers} correct in {score.time} seconds</div>
        ))}
      </div>
    )
  else
  scoreList = <LoadingBar />
  
  return (
    <div className="Page-Scores">
      <h1>High Scores</h1>
      {scoreList}
    </div>
  );
}

export default Scores;
