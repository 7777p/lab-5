/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-comment-textnodes */
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit 
          {' '}
          <code>src/App.js</code> and save to reload.
        </p>
        // eslint-disable-next-line react/react-in-jsx-scope
        // eslint-disable-next-line react/react-in-jsx-scope
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
