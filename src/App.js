import './App.scss';
import Title from './components/Title'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title></Title>
        <p className="App-tagline">
          Try matching the WillowTree employee to their photo.
        </p>
        <button
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play!
        </button>
      </header>
    </div>
  );
}

export default App;
