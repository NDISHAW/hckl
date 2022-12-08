/* eslint-disable react/style-prop-object */
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <iframe
          title="feame"
          src="https://vdocuments.net/embed/v1/lifecycle-manager-and-the-lifecycle-api.html"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          style="border:1px solid #CCC; margin-bottom:5px;max-width: 100%; overflow: hidden; width: 599px; height: 487px;"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default App;
