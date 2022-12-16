/* eslint-disable react/style-prop-object */
// import logo from './logo.svg';
import React from 'reacty'
import './App.css';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";   
import Slider from './components/Home/Slider/Slider';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Slider />
        <About />
      </div>
    </div>
  );
}

export default App;
