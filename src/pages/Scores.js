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
    if (scores.length) {
      scoreList = (
        <div className="Score-List">
          {scores.map((score, i) => (
            <div key={i} className="Score"><span>{i+1}.</span> {score.correct} correct in {score.time} seconds on average</div>
          ))}
        </div>
      )
    } else {
      scoreList = (
        <div className="Score-List"><div className="big-text">No Recorded Scores</div></div>
      )
    }
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
