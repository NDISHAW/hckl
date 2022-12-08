/* eslint-disable react/style-prop-object */
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <div>
          <iframe
            title="feame"
            src="https://www.sigma-zentrifugen.de/en/configurator"
            frameborder="0"
            marginwidth="0"
            marginheight="0"
            scrolling="no"
            style={{
              backgroundColor: "red",
              border: "1px",
              marginBottom: "5px",
              overflow: "hidden",
              width: "599px",
              height: "487px",
            }}
            // style="border:1px solid #CCC; margin-bottom:5px;max-width: 100%; overflow: hidden; width: 599px; height: 487px;"
            allowfullscreen
          ></iframe>
        </div> */}


        <Header/>
      </header>
    </div>
  );
}

export default App;
