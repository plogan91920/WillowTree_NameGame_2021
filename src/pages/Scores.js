// Functional Includes
import Cookies from 'universal-cookie'

// Resource Includes
import './Scores.scss';

const cookies = new Cookies();

// =============
// Scores Page
// =============
function Scores() {
  const scores = cookies.get("high_scores")
  return (
    <div className="Page-Scores">
      <h1>High Scores</h1>
      <div className="Score-List">
        {scores.map((score, i) => (
          <div className="Score">{i+1}. {score.correctAnswers} correct in {score.time} seconds</div>
        ))}
      </div>
    </div>
  );
}

export default Scores;
